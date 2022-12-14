
type props = {
    state : any 
    setState : (value : any) => void
}


const DateModal = (props: props) => {
    const { state , setState } = props

   
    
    // function formatAMPM(date : any) {
    //     var hours = date.getHours();
    //     var minutes = date.getMinutes();
    //     var ampm = hours >= 12 ? 'pm' : 'am';
    //     hours = hours % 12;
    //     hours = hours ? hours : 12; // the hour '0' should be '12'
    //     minutes = minutes < 10 ? '0'+minutes : minutes;
    //     var strTime = hours + ':' + minutes + ' ' + ampm;
    //     return strTime;
    // }
    // console.log(formatAMPM(new Date));
    
    // tConvert(state.startTime) 
    function tConvert (e: any): any {
        let time = (e.target.value)
        setState({startTime: time})
        // Check correct time format and split into components
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)?$/) || [time];
      
        if (time.length > 1) { // If time format correct
            time = time.slice (1);  // Remove full string match value
            time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
         const t =  time.join (''); // return adjusted time or original string
         console.log(t);
    }
    
    
      
      
    //   console.log(state.startTime);
      
    

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex">
                            <div className="row">
                                <div className="starttime col-md-6">
                                    <input type="time" name="startStallTime" id="startStallTime" value={state.startTime}  onChange={(e: any) => {tConvert(e)}} />
                                </div>
                                <div className="endTime col-md-6">
                                    <input type="time" name="endStallTime" id="endStallTime" disabled />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DateModal