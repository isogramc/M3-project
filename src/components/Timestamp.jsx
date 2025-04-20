import React, { use, useState, useEffect } from 'react';

function timestamp(props){

    const timestamp = new Date(props.time);
    const now = new Date();

    const [t1, setT1] = useState(timestamp);
    const [t2, setT2] = useState(now);

    const [timeObject, setTimeObject] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });


    useEffect(() => {
        timeDifference(t2, t1);
    }, [t1, t2]);

  function timeDifference(date1, date2) {

    var difference = date1.getTime() - date2.getTime();
    //console.log('difference = ', difference);

    var daysDifference = Math.floor(Math.round(difference/1000/60/60/24));

    var hoursDifference = Math.floor(Math.round(difference/1000/60/60));

    var minutesDifference = Math.floor(Math.round(difference/1000/60));

    var secondsDifference = Math.floor(Math.round(difference/1000));

    // console.log('difference = ' + 
    //   daysDifference + ' days ' + 
    //   hoursDifference + ' hours ' + 
    //   minutesDifference + ' minutes ' + 
    //   secondsDifference + ' seconds ');

    setTimeObject({
        days: daysDifference,
        hours: hoursDifference,
        minutes: minutesDifference,
        seconds: secondsDifference 
    });

}

    function formatFunct() {
        if (timeObject.days > 0) {
            return timeObject.days + ' days';
        } else if (timeObject.hours > 0) {
            return timeObject.hours + ' hours';
        } else if (timeObject.minutes > 0) {
            return timeObject.minutes + ' minutes';
        } else if (timeObject.seconds > 0) {
            return timeObject.seconds + ' seconds';
        } else {
            return 'just now';
        }
    }


    return (
        <>
            <p key={props.id} className="timestamp">{formatFunct()} ago</p>
        </>
    );
}
export default timestamp