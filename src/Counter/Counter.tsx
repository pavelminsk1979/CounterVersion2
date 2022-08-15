import {Button} from "../Button/Button";
import st from './Counter.module.css';


type CounterType={
    numberCounter:number
    buttonStop:()=>void
    buttonGo:()=>void
    maxSetting:number
    settings:boolean
}

export function Counter ({numberCounter,buttonGo,buttonStop,maxSetting,settings}:CounterType) {




    return(
        <div>
             <div className={numberCounter===maxSetting?st.numberRed:st.number}>{numberCounter}</div>

            <Button
                disabled={settings}
                className={settings?st.butGoDisabled:st.butGo}
                name={'GO!'}
                callback={() => buttonGo()}/>
            <Button
                disabled={settings}
                className={settings?st.butStopDisabled:st.butStop}
                name={'STOP'}
                callback={() => buttonStop()}/>

        </div>
    )
}