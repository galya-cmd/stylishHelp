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
            <li><a href="/">Главная</a></li>
            <li><a href="/blog">Блог</a></li>
            <li><a href="/isfree">Бесплатно</a></li>
            <li><a href="/seminars">Семинары</a></li>
            <li><a href="/trainings">Тренинги</a></li>
            <li><a href="/services">Услуги</a></li>
            <li><a href="/reviews">Отзывы</a></li>
            <li><a href="/
contacts">Контакты</a></li>
    </ul>
    
        </nav>
        <div className="nav__blok-nav2">
        <div>
  <p>8(800)7070513<br></br>
  7(499)3502335
  </p>
  {/* <p>+7(499)3502335</p> */}
 </div>

        <a href="#"><FontAwesomeIcon icon={faInstagram} className='icon'/><a/>
</a>
<a href="#"><FontAwesomeIcon icon={faVk} className='icon'/></a>
<a href="#"><FontAwesomeIcon icon={faFacebook} className='icon'/></a>
 

        </div>
        <img src={logo} alt='logo' className="nav__blok-logo"></img>
        <div className="nav__blok-logo-a" >
    Наша миссия: <br></br>
        <a href="#">Миллион красиво одетых женщин</a>
        </div>
     
        
     
        </div>
        
    )
 }
 export default Header;