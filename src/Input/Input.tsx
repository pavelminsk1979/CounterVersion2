import {ChangeEvent} from "react";
import st from '../Settings/Setting.module.css';


type InputType = {
    callback: (valueInput: number) => void
    valueInput: number
    className: string
    world:string
}

export function Input({callback, valueInput,className,world}: InputType) {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

        callback(Math.round(Number(event.currentTarget.value)))

    }

    return (
        <div className={st.worldMin}>
            {world}
        <input
            value={valueInput}
            className={className}
               onChange={onChangeHandler}
               type="number"
        />
</div>
    )
}