import {Input} from "../Input/Input";
import st from "./Setting.module.css";
import {Button} from "../Button/Button";

type SettingsType = {
    minSetting:number
setMinSetting:(valueInput:number)=>void
maxSetting:number
setMaxSetting:(valueInput:number)=>void
    buttonStart:()=>void
    settings:boolean

}


export function Settings(props:SettingsType) {

    return (
        <div>

                <Input
                    world={'MIN'}
                    className={st.inputMin}
                    callback={props.setMinSetting}
                    valueInput={props.minSetting}
                />

                <Input
                    world={'MAX'}
                    className={st.inputMax}
                    callback={props.setMaxSetting}
                    valueInput={props.maxSetting}
                />
          <Button
              disabled={!props.settings}
              name={'START'}
              callback={()=>props.buttonStart()}
              className={!props.settings?st.butStartDisabled:st.butStart}

          />
        </div>
    )
}