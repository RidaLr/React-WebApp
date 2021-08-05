import './intro.scss'

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/avatar.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There <span>&#128075;</span>, I'm</h2>
                    <h1>Rida Lr</h1>
                    <h3>FullStack developer<span>&#128187;</span></h3>
                    <a href="#portfolio">
                        <img className="down" src="assets/down.png" alt="" />
                    </a>
                </div>
                
            </div>
          
        </div>
    )
}
