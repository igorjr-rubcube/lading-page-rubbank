import circleHalfStrokeSolid from './assets/circle-half-stroke-solid.svg'
import logo from './assets/rubbank-logo-white.svg'

function NavBar() {
    return (
        <div id='menu-bar'>
            <a id='logo' href='#'>
                <img src={logo} alt='Rubbank Logo' /></a>
            <div id='menu'>
                <button className='menu-item'>INÍCIO</button>
                <button className='menu-item'>BENEFÍCIOS</button>
                <button className='menu-item'>FEEDBACK</button>
                <button className='menu-item'>DÚVIDAS</button>
            </div>
            <a id='light-dark-btn' href="#">
                <img src={circleHalfStrokeSolid} alt='Light/Dark Mode Button' />
            </a>
        </div>
    );
}

export default NavBar;