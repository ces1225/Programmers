import React, {useState} from 'react';
import { Button } from 'react-bootstrap';


const Clock : React.FC = () => {
    const [time, setTime] = useState(new Date());

    setInterval(()=>{
        setTime(new Date())
    }, 1000);
    return (
        <div>
            현재 시간 : {time.toLocaleTimeString()}
        </div>
    )
}

export default Clock;