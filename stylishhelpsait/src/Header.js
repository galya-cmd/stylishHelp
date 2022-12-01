import "./Header.css";
import logo from './assets/images/logo-new.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';




function Header (){
    return(
        <div className="nav">
        <nav className="nav_blok">
    <ul className="nav__blok-nav">
            <li className="nav__blok-nav-list"><a href="/">Главная</a></li>
            <li className="nav__blok-nav-list"><a href="/blog">Блог</a></li>
            <li className="nav__blok-nav-list"><a href="/isfree">Бесплатно</a></li>
            <li className="nav__blok-nav-list"><a href="/seminars">Семинары</a></li>
            <li className="nav__blok-nav-list"><a href="/trainings">Тренинги</a></li>
            <li className="nav__blok-nav-list"><a href="/services">Услуги</a></li>
            <li className="nav__blok-nav-list"><a href="/reviews">Отзывы</a></li>
            <li className="nav__blok-nav-list"><a href="/
contacts">Контакты</a></li>
<ul/>

<ul className="nav__icon">
<li className="nav__blok-nav-list" ><a href="#"><FontAwesomeIcon icon={faInstagram} className='icon'/><a/>
</a></li>
<li className="nav__blok-nav-list"><a href="#"><FontAwesomeIcon icon={faVk} className='icon'/></a></li>
<li className="nav__blok-nav-list"><a href="#"><FontAwesomeIcon icon={faFacebook} className='icon'/></a></li>
</ul>

<ul className="nav__blok-tel"></ul>
<li  className="nav__tel"><a href="+78007070513" >8(800)7070513</a>
<li  className="nav__tel"><a href="+74993502335" >8(499)3502335</a></li>
  
  </li>

    </ul>
    
        </nav>
        <div className="nav__blok-container">
        <img src={logo} alt='logo' className="nav__blok-logo"></img>
        <div className="nav__blok-logo-a" >
    Наша миссия: <br></br>
        <a href="#">Миллион красиво одетых женщин</a>
        </div>
        </div>
        
     
        </div>
        
    )
 }
 export default Header;