

export function UsernameButton ({ name }) {
    return (
    <div className="downpartHeader">
        <div className='leader'>
            <p><b>{name}</b></p>
        </div> 
        <div className='suscribeButton'>
            <button className='suscribeButton'><b>Подписаться</b> </button>
        </div> 
    </div>
    )
}

export default UsernameButton