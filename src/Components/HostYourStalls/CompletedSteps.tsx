import { Link } from "react-router-dom"
import checkImg from "../Images/check-circle-primary.svg"
import errorImg from "../Images/error.png"

type props = {
    stepName : string , 
    url: string ,
    stepsArray: Array<number> ,
    stepNumber: number

}


const CompletedSteps = (props: props) => {
    const { stepName, url, stepsArray, stepNumber } = props

    return (
        <>
            <div className="d-flex align-items-center justify-content-between ng-star-inserted">
                <p className="font-medium-bold text-black text-underline d-flex align-items-center cursor-pointer my-2" tabIndex={0} >
                          <img src={stepsArray.includes(stepNumber) ? checkImg : errorImg} className="pr-2 ng-star-inserted pe-1" alt=""  /> 
                    <Link to={`/${url}`}>{stepName}</Link>
                </p>
            </div>
        </>
    )
}

export default CompletedSteps