import "./topbar.scss"
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Portfolio</a>
                    <div className="itemContainer">
                        <CallIcon className="icon"/>
                        <span>+91 7990310815</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className="icon"/>
                        <span>ujeshnada96@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
