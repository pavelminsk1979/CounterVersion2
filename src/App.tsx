import React, {useState} from 'react';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Settings/Settings";
import st from './App.module.css';


function App() {

    const [minSetting, setMinSetting] = useState(1)
    const [maxSetting, setMaxSetting] = useState(5)
    const [numberCounter, setNumberCounter] = useState(minSetting)
    const [settings, setSettings] = useState(false)

    const imgFirst = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCHRejAXll_LMFcQhtalY53a_cYXdFdjxpA&usqp=CAU'
    const imgGo = 'http://memesmix.net/media/created/dzlrpp.jpg'
    const imgStop = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRShVKMNnRFIfCAWGbj9g4CCOXVnMSADdIHJA&usqp=CAU'
    const imgSetting = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogkzaNlXB0nrOhHCPYopU1kqZAGt2mKHGEw&usqp=CAU'
    const imgStart = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfeEuX1gmSm_VooMfY4RT6glepmVJs6xdQw&usqp=CAU'
    const imgError = 'http://risovach.ru/upload/2015/02/mem/pacan-s-krestom_74091890_orig_.jpg'
    const numbRed='https://media.tenor.com/images/2614199b4501901b307262eaef877b8b/tenor.png'

    const [stateForImg, setStateForImg] = useState(imgFirst)

    const buttonGo = () => {
        if (numberCounter < maxSetting && settings === false) {
            setNumberCounter(numberCounter + 1)
            setStateForImg(imgGo)
        }else{setStateForImg(numbRed)}
    }


    const buttonStop = () => {
        if (settings === false) {
            setNumberCounter(minSetting)
            setStateForImg(imgStop)
        }
    }
    const buttonStart = () => {
        setSettings(false)
        setStateForImg(imgStart)
    }

    const customizationInputMin = (valueInput: number) => {
        if (valueInput >= 0 && valueInput < maxSetting) {
            setMinSetting(valueInput)
            setNumberCounter(valueInput)
            setSettings(true)
            setStateForImg(imgSetting)
        } else {
            setStateForImg(imgError)
        }
    }

    const customizationInputMax = (valueInput: number) => {
        if (valueInput >= 0 && valueInput > minSetting) {
            setMaxSetting(valueInput)
            setNumberCounter(minSetting)
            setSettings(true)
            setStateForImg(imgSetting)
        } else {
            setStateForImg(imgError)
        }
    }

    let classNameIng
    if (stateForImg == imgFirst) {
        classNameIng = st.imgFirst
    }
    if (stateForImg == imgGo) {
        classNameIng = st.imgGo
    }
    if (stateForImg == imgStop) {
        classNameIng = st.imgStop
    }
    if (stateForImg == imgSetting) {
        classNameIng = st.imgSetting
    }
    if (stateForImg == imgStart) {
        classNameIng = st.imgStart
    }
    if (stateForImg == imgError) {
        classNameIng = st.imgError
    }
    if (stateForImg == numbRed) {
        classNameIng = st.numbRed
    }


    return(
        <div>
            <div className={st.screenImg}>
                <img
                    className={classNameIng}
                    src={stateForImg}/>
            </div>

            <div className={st.screenSetting}>
                <Settings
                    buttonStart={buttonStart}
                    minSetting={minSetting}
                    setMinSetting={customizationInputMin}
                    maxSetting={maxSetting}
                    setMaxSetting={customizationInputMax}
                    settings={settings}
                />
            </div>

            <div className={st.screenNumber}>
                <Counter
                    settings={settings}
                    maxSetting={maxSetting}
                    buttonStop={buttonStop}
                    buttonGo={buttonGo}
                    numberCounter={numberCounter}
                />
            </div>


        </div>
    )
}

export default App;