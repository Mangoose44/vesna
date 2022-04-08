import rosgramm from '../img/rosgramm.png';

// study onChange method on input element
// onClick method

export function TopLine ({ onChange }) {
    return (
        <div className='topLine'>
        <img src={rosgramm} /> 
        <form className='search'>
            <input
                type="text"
                onChange={(e) => onChange(e.target.value)}
                placeholder="Поиск" />
        </form>
        <button className='singInButton'><b>Войти</b> </button>
        <button className='registrationButton'><b>Зарегистрироваться</b> </button>
      </div>

    )
}


export default TopLine