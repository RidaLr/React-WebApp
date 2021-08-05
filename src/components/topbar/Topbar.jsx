import './topbar.scss'
import {Person, Mail} from "@material-ui/icons"
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">RWApp</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+33 60 00 00 00</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>rida.laksir@yahoo.com</span>
                    </div>
                    <div className="itemContainer">
                        <GitHubIcon className="icon" />
                        <span><a href="https://github.com/RidaLr" className="git">RidaLr</a></span>
                    </div>
                </div>
                <div className="right">
                    <div className="humburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line1"></span>
                        <span className="line1"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
