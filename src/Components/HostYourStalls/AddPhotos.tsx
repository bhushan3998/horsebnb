import { useEffect, useState } from "react"
import { Link, useMatch, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Spinner from "../Spinner/Spinner"
import HenceForthApi from "../Utiles/HenceForthApi"
import "./AddPhotos.css"

import publishImg from "../Images/publish.svg"
import deleteImg from "../Images/delete.svg"
import edit from "../Images/edit.png"
import backArrow from "../Images/chevron-left-primary.svg"
import lightBulb from "../Images/lightBulb.svg"



type props = {
    getStartedShow: () => void,
    steps: Array<number> ,
    setSteps: (value : Array<number>) => void,
    spinner: boolean,
    setSpinner: (value: boolean) => void
    saveExitbtn: number
}

const AddPhotos = (props: props) => {
    const { getStartedShow , steps, setSteps , spinner , setSpinner , saveExitbtn } = props
    const [checkCoverImg, setCheckCoverImg] = useState({
        caption: null as string | null,
        id: '' as string ,
        priority: 0 as number,
        url: "" as string
    })

    const [imgfile, setImgFile] = useState<Array<object>>([])
    console.log(imgfile);

    const navigate = useNavigate()
    const match = useMatch(`/create-stall/AddPhotos/:id`)

    const listId = async () => {
        try {
            let res = await HenceForthApi.Auth.Listid(match?.params?.id)
            setCheckCoverImg(res?.data?.attributes?.publicData?.cover_photo);
            setImgFile(res?.data?.attributes?.publicData?.images)
            setSteps(res?.data?.attributes?.publicData?.stepsCompleted);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getStartedShow()
        listId()
        // eslint-disable-next-line 
    }, [])


    // console.log(showState);


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let files = e.target.files[0];
        try {
           
            
            let imgApi = (await HenceForthApi.Auth.Uploadimage("file", files))
            await uploadImg([...imgfile, { url: imgApi.filename, id: imgApi.id }])
            listId()
        } catch (error) {
            console.log(error);
        }
    };




    const uploadImg = async (ar: any) => {
        let length = ar?.length - 1
        let last = ar[length]
        let list = {}
        {
            checkCoverImg?.url ? (list = {
                id: match?.params?.id,
                publicData: {
                    cover_photo: checkCoverImg,
                    images: [...imgfile,
                    {
                        url: last?.url,
                        id: last?.id,
                        priority: ar?.length + 1,
                        caption: ""
                    }
                    ],
                   
                }
            }) : (list = {
                id: match?.params?.id,
                publicData: {
                    cover_photo: {
                        url: last?.url,
                        id: last?.id,
                        priority: ar?.length,
                        caption: ""
                    },
                   
                }
            })
        }

        // if (checkCoverImg?.url) {
        //     list = {
        //         id: match?.params?.id,
        //         publicData: {
        //             cover_photo: checkCoverImg,
        //             images: [...imgfile,
        //             {
        //                 url: last?.url,
        //                 id: last?.id,
        //                 priority: ar?.length + 2,
        //                 caption: ""
        //             }
        //             ]
        //         }
        //     }
        // } else if (!checkCoverImg?.url) {
        //     list = {
        //         id: match?.params?.id,
        //         publicData: {
        //             cover_photo: {
        //                 url: last?.url,
        //                 id: last?.id,
        //                 priority: ar?.length,
        //                 caption: ""
        //             }
        //         }
        //     }
        // }
        try {
            await HenceForthApi?.Auth?.Updatedlisting(list)
            await listId()

        } catch (error) {
            console.log(error);
        }
    }

    const nextPage = async (ar: any , navigation: string) => {
        let list = {
            id: match?.params?.id,
            publicData: {
                cover_photo: checkCoverImg,
                images: [...imgfile],
                stepsCompleted: [...steps , 7],
            }
        }
        if (checkCoverImg) {
            try {
                setSpinner(true)
                await HenceForthApi?.Auth?.Updatedlisting(list)
                if (navigation === 'next') {
                    navigate(`/create-stall/Description/${match?.params.id}`)
                } else {
                    navigate(`/create-stall/LastStep/${match?.params.id}`)
                }
                setSpinner(false)
                
            } catch (error) {
                console.log(error);
            }
        } else {
            toast("upload cover images ")
        }
    }

    useEffect(() => {
        if(saveExitbtn) {
            nextPage([...imgfile] ,  'last')
        }
    })

    return (
        <>
            <div className="progress" style={{ height: "8px" }}>
                <ToastContainer />
                <div className="progress-bar bg-info" role="progressbar" style={{ width: "40%" }}>
                </div>
            </div>
            <div className="row mx-0 h-100">
                <div className="col-lg-6 py-5 steps-frame-height h-md-auto overflow-scroll" style={{ height: '91vh' }}>
                    <div className="col-md-11 col-lg-8 px-0 mx-auto">
                        <h3 className="heading-big">Add photos to your listing</h3>
                        <p className="font-small-bold mb-4">Upload at least one photo to publish your listing. We strongly suggest adding multiple photos to attract attention to your listing. Do not include images of your barn name or contact information.</p>
                        <div className="upload-container mb-5  border border-3 border-dark p-5 text-center" style={{ borderStyle: "dashed" }}>
                            <div className="">
                                <img src={publishImg} alt="" className="mb-2" />
                            </div>
                            <div className="">
                                <label
                                    className=""
                                    htmlFor="inputGroupFile01"
                                >
                                    <span className="text-white p-2 rounded-2" style={{ backgroundColor: "#00A4B4" }}>Upload Photo</span>
                                </label>
                                <input type="file" className="form-control d-none" id="inputGroupFile01" multiple onChange={(e: any) => handleSubmit(e)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 images-gallery mb-4">
                                <div className="cover-img">
                                    {checkCoverImg ? (<div className="position-relative">
                                        <img src={`${HenceForthApi.API_FILE_ROOT_MEDIUM}${checkCoverImg?.url}`} alt="" className="rounded-1" style={{ width: "200px", height: "200px" }} />
                                        <span className="del-bg del-bg1 border">
                                            <img src={deleteImg} height="18px" />
                                        </span>
                                        <span className="del-bg del-bg2 border">
                                            <img src={edit} height="18px" />
                                            <input type="file" className="d-none" />
                                        </span>
                                    </div>): ""}
                                </div>
                            </div>
                            {Array.isArray(imgfile)  && imgfile.map((l: any, index: any) =>
                                <div className="col-md-6 images-gallery mb-4" key={index}>
                                    <div className="cover-img ">
                                        <div className="position-relative">
                                            <img src={`${HenceForthApi.API_FILE_ROOT_MEDIUM}${l?.url}`} alt="" className="rounded-1" style={{ width: "200px", height: "200px" }} />
                                            <span className="del-bg del-bg1 border">
                                                <img src={deleteImg} height="18px" />
                                            </span>
                                            <span className="del-bg del-bg2 border">
                                                <img src={edit} height="18px" />
                                                <input type="file" className="d-none" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="d-flex justify-content-between mt-5 border-top">
                            <Link to="/create-stall/step6">
                                <button type="button" className="btn btn-transparent font-regular my-3 px-0" >
                                    <img src={backArrow}
                                        alt=""
                                        className="pr-1" /> Back
                                </button>
                            </Link>
                            <button className="btn my-3 px-3 text-white" onClick={() => nextPage([...imgfile] , 'next')} disabled={spinner} style={{ background: "rgb(0, 164, 180)" }}> {!spinner ?   " Next" : <Spinner/>}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 px-md-0 d-none d-lg-block">
                    <div className="h-100 d-flex align-items-center px-md-5 bg-light justify-content-start">
                        <div className="border col-md-7 px-4 py-4 mb-4 bg-white">
                            <img src={lightBulb} alt="" height="32px" className="mb-4" />
                            <h6 className="font-medium-bold">Quick tips for quality photos</h6>
                            <ul className="list-unstyled">
                                <li >
                                    <span >.</span> Use high quality photos to make your listing stand out</li>
                                <li >
                                    <span >.</span> Make sure you have good lighting</li>
                                <li >
                                    <span >.</span> Show off your listing</li>
                                <li ><span >.</span> Use recent and up to date pictures </li>
                                <li ><span >.</span> Add multiple photos to attract guests</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddPhotos