import rosgramm from '../img/rosgramm.png';


export function TopLine () {
    return (
        <div className='topLine'>
        <img src={rosgramm} /> 
        <form className='search'>
        <input type="text" placeholder="Поиск"></input>
        </form>
        <button className='singInButton'><b>Войти</b> </button>
        <button className='registrationButton'><b>Зарегистрироваться</b> </button>
      </div>

    )
}


export default TopLine