import { Link } from "react-router-dom"

const CompletedSteps = (props: any) => {

    const {stepName , url}= props
    return (
        <>
            <div className="d-flex align-items-center justify-content-between ng-star-inserted">
                <p className="font-medium-bold text-black text-underline d-flex align-items-center cursor-pointer my-2" tabIndex={0} >
                    <img src="https://horsebnb.com/assets/img/check-circle-primary.svg" className="pr-2 ng-star-inserted" />
                    <Link to={`/create-stall/${url}`}>{stepName}</Link>
                </p>
            </div>
        </>
    )
}

export default CompletedSteps