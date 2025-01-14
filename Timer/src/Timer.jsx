import { useEffect, useState } from "react";
import "./Timer.css"
const Timer = ({ h, m, s }) => {

    const [hours, setHours] = useState(h);
    const [minutes, setMinutes] = useState(m);
    const [seconds, setSeconds] = useState(s);
    const [isrun, setisrun] = useState(false);

    let time;

    useEffect(() => {
        if (isrun) {
            time = setInterval(() => {

                setSeconds(prevSeconds => {
                    if (prevSeconds === 59) {
                        setMinutes(prevMinutes => {
                            if (prevMinutes === 59) {
                                setHours(prevHours => (prevHours === 23 ? 0 : prevHours + 1));
                                return 0;
                            }
                            return prevMinutes + 1;
                        });
                        return 0;
                    }
                    return prevSeconds + 1;
                });

            }, 1000);
        } else {
            clearInterval(time);
        }
        return () => clearInterval(time);
    }, [isrun]);

    const handlebtn = () => {
        setisrun(!isrun);
    };

    const format = (time) => {
        return (time < 10) ? `0${time}` : time;
    };

    const period = (hours) => {
        return (hours >= 12) ? 'PM' : 'AM';
    }

    return (
        <>
            <div className="clock-content clock">
                <h1>Digital Clock Timer</h1>
                <h1 className="h1">{format(hours)}:{format(minutes)}:{format(seconds)} <span style={{ fontSize: "30px" }}>{period(hours)}</span></h1>
                <button className="btn" onClick={handlebtn}>{isrun ? `Pause` : `Resume`}</button>
            </div>
        </>
    );
};

export default Timer;