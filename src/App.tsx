import React, {useState} from 'react';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Settings/Settings";
import st from './App.module.css';


function App() {

    const [minSetting, setMinSetting] = useState(1)
    const [maxSetting, setMaxSetting] = useState(5)
    const [numberCounter, setNumberCounter] = useState(minSetting)
    const [settings, setSettings] = useState(false)

    const OBJ = {
        imgFirst: {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCHRejAXll_LMFcQhtalY53a_cYXdFdjxpA&usqp=CAU',
            styles: st.imgFirst
        },
        imgGo:{
            image:'http://memesmix.net/media/created/dzlrpp.jpg',
            styles:st.imgGo
        },
        imgStop:{
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRShVKMNnRFIfCAWGbj9g4CCOXVnMSADdIHJA&usqp=CAU',
            styles:st.imgStop
        },
        imgSetting:{
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogkzaNlXB0nrOhHCPYopU1kqZAGt2mKHGEw&usqp=CAU',
            styles:st.imgSetting
        },
        imgStart:{
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfeEuX1gmSm_VooMfY4RT6glepmVJs6xdQw&usqp=CAU',
            styles:st.imgStart
        },
        imgError:{
            image:'http://risovach.ru/upload/2015/02/mem/pacan-s-krestom_74091890_orig_.jpg',
            styles:st.imgError
        },
        numbRed:{
            image:'https://media.tenor.com/images/2614199b4501901b307262eaef877b8b/tenor.png',
            styles:st.numbRed
        }
    }

    const [stateForImg, setStateForImg] = useState('imgFirst')
    console.log(stateForImg)
    const buttonGo = () => {
        if (numberCounter < maxSetting && settings === false) {
            setNumberCounter(numberCounter + 1)
            setStateForImg('imgGo')
        }else{setStateForImg('numbRed')}
    }


    const buttonStop = () => {
        if (settings === false) {
            setNumberCounter(minSetting)
            setStateForImg('imgStop')
        }
    }
    const buttonStart = () => {
        setSettings(false)
        setStateForImg('imgStart')
    }

    const customizationInputMin = (valueInput: number) => {
        if (valueInput >= 0 && valueInput < maxSetting) {
            setMinSetting(valueInput)
            setNumberCounter(valueInput)
            setSettings(true)
            setStateForImg('imgSetting')
        } else {
            setStateForImg('imgError')
        }
    }

    const customizationInputMax = (valueInput: number) => {
        if (valueInput >= 0 && valueInput > minSetting) {
            setMaxSetting(valueInput)
            setNumberCounter(minSetting)
            setSettings(true)
            setStateForImg('imgSetting')
        } else {
            setStateForImg('imgError')
        }
    }

    return(
        <div>
            <div className={st.screenImg}>
                <img
                    className={OBJ[stateForImg as keyof typeof OBJ].styles}
                    src={OBJ[stateForImg as keyof typeof OBJ].image}/>
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