import './AppHeader.scss';
import logo from '../../assets/logo&favicon/LOGO.png'


function AppHeader() {

    return (
        <header className="appheader">
            <img  src={logo} className="appheader__logo" alt="logo"/>
            <nav className="appheader__nav">
                <ul className="appheader__nav__list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/presentation">Presentation</a></li>
                    <li><a href="/characters">Characters</a></li>
                    <li><a href="/quizz">Quizz</a></li>
                    <li><a href="/gameplay">Gameplay</a></li>
                    <li><a href="/map">Map</a></li>
                    <li><a href="/location">Location</a></li>
                    <li><a href="/media">Media</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;
