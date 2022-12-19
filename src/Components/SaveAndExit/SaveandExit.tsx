const SaveAndExit = ({saveAndExit}:any) => {


    return (
        <>
            <div className="saveAndExit" id="Hello">
                <button className='btn btn-outline' style={{ background: "#00A4B4" }} onClick={()=> saveAndExit(Math.random())}>
                    Save And Exit
                </button>
            </div>
        </>
    )
}
export default SaveAndExit