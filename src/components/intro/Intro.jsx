import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Intro() {
    const textRef = useRef();
    useEffect(() =>{
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Software Developer', 'Freelancer', 'Youtuber', 'Blogger' ] 
        })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Ujesh Nada</h1>
                    <h3>And I'm a <span ref={textRef}></span></h3>
                </div>
                <a href="#about">
                    <KeyboardDoubleArrowDownIcon className="arrowDown"/>
                </a>
            </div>
        </div>
    )
}
