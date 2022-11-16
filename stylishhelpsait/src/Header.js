import "./Header.css";
import logo from './assets/images/logo-new.png';
import ikonVk from './assets/images/1438423986_vk_3.png'

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

        <img src={ikonVk} title="#"></img>
 <img src='https://icons8.ru/icon/HoSTAfO1xgJG/facebook' title="#"></img>
 <img src='https://icons8.ru/icon/HoSTAfO1xgJG/facebook' title="#"></img>

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