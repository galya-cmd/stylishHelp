import form from './assets/images/form.jpg'
import './Main.css';
import book from './assets/images/book.png';
import photo1 from './assets/images/stylishhelpchat1.jpg';
import photo2 from './assets/images/helpchat2.jpg';
import photo3 from './assets/images/helpchat3.jpg';
import photo4 from './assets/images/helpchat4.jpg';

function Main (){
    return (
        <>
        <h2>СКОРАЯ СТИЛЬНАЯ ПОМОЩЬ</h2>

        <h3>Онлайн консультация стилиста в вашем мобильном телефоне когда вам нужно на шоппинге,во время разбора гардероба, когда подбираете комплект, просто когда нужен совет</h3>
        <img src={form} />
<h2>Как все происходит</h2>
<p>После оплаты мы подключаем вас в канал Telegram с нашим стилистом</p>
<p>Подключение происходит в рабочее время ПН-ПТ с 10 до 19 МСК</p>
<p>Сразу же вы можете писать свои вопросы</p>
<p>Ответы будут в пределах часа в рабочее время</p>
<p>Усли мы не получаете ответ за 1час, мы продлеваем время действия услуги на 24 часа</p>
<p>А если нужна помощь в выходной день?</p>
<p className='main__blok'>
Напишите об этом как можно раньше, но не менее , чем за 24 часа. Получите подтверждение стилиста. Если вы отправляетесь, к примеру, на шопинг в выходной день и вам нужно чтобы стилист был с вами на связи, такой вариант возможен по предварительной договоренности со стилистом.
</p>

<table>
   <tr>
   <th colSpan={3}> Записывайтесь прямо сейча</th>
    {/* <th rowSpan={3}>Записывайтесь прямо сейчас</th> */}
   </tr>
    <tr>
        <th>Пакет "Попробовать"</th>
        <th>Пакет 1 день</th>
        <th>Пакет 1 месяц</th>
    </tr>
    <tr>
        <td>5 ваших луков или 5 вопросов в пределах 24 часов</td>
        <td>Советы стилистов в пределах 24 часов</td>
        <td>Советы стилистов в течении месяца</td>
    </tr>
    <tr>
        <td>5 вопросов/ комплектов на оценку</td>
        <td>до 100 вопросов/ комплектов на оценку </td>
        <td>неограниченно вопросов/ комплектов на оценку</td>
    </tr>
    <tr>
        <td>499 рублей</td>
        <td>2900 рублей</td>
        <td>9900 рублей</td>
    </tr>
    <tr>
        <td><button>Заказать</button></td>
        <td><button>Заказать</button></td>
        <td><button>Заказать</button></td>
    </tr>


</table>
<div>
<img src={book} alt='book'></img>
</div>
<h2>Пакет услуг</h2>

<div className='price'>
    <div className='price__list'>
    <p>Пакет</p>
        <h3>"Попробовать"</h3>
        <span>Срок:</span>
        <strong>В пределах 24 часов</strong>
        <p>  Вопросов/комплектов на оценку:</p>
      <p> <strong>5 ваших луков или 5 вопросов</strong></p>
       
       <span>890р.</span>
        <p><strong>499р.</strong></p>
        <button className='price__button'>Заказать</button>
       
    
    </div>
    <div className='price__list'>
    <p>Пакет</p>
        <h3>" 1 день"</h3>
        <span>Срок:</span>
        <strong>В пределах 24 часов</strong>
        <p>  Вопросов/комплектов на оценку:</p>
      <p> <strong>до 100</strong></p>
       
        <span>3900р.</span>
        <p><strong>2900р.</strong></p>
        <button className='price__button'>Заказать</button>
        </div>
    <div className='price__list'>
        <p>Пакет</p>
        <h3>" 1 месяц"</h3>
        <span>Срок:</span>
        <strong>В течение месяца</strong>
        <span>  Вопросов/комплектов на оценку:</span>
       <strong>неограниченно</strong>
       
        <span>11900р.</span>
        <p><strong>9900р.</strong></p>
        <button className='price__button'>Заказать</button>
        </div>
        
</div>

<h2>Как все происходит</h2>

<div className='forum__container'>
    <div className='forum__container-list'>
        <img src={photo1} alt='photo-chat'></img>
        <p>Клиентка просит стилиста помочь выбрать одну из курток милитари</p>
    </div>
    <div className='forum__container-list'>
    <img src={photo2} alt='photo-chat'></img>
    <p>Стилист запрашивант дополнительные фотографии, для того чтобы выбор был 100% удачным</p>
    </div>
    <div className='forum__container-list'>
    <img  src={photo3} alt='photo-chat'></img>
    <p>Стилист анализирует вещи с учетом уже имеющихся вещей клиентки и помогает сделать правильный выбор</p>
    </div>
    <div className='forum__container-list'>
    <img src={photo4} alt='photo-chat'></img>
    <p>Бдагодарная клиентка делится впечатлениями от полученной услуги и радостью удачных покупок</p>
    </div>
</div>
        </>
    )
}
export default Main;