import { useState } from "react"

export function TwitterFollowCard({children, userName, initialIsFollowing}){
    //Uso de hooks
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    //Renderizado condicional
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = text === 'Seguir' ? 
    'tw-followCard-button'
    : 'tw-followCard-button is-following'
    const hadleClick = () => {
        setIsFollowing(!isFollowing)
    }

    //Renderizado de imagen
    const srcImg = `https://unavatar.io/${userName}`
    const avatarName = `avatar de ${children}`

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar' 
                    src={srcImg} 
                    alt={avatarName} 
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoAddres'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button 
                    className={buttonClassName}
                    onClick={()=>{hadleClick()}}
                >
                    <span className="tw-followCard-btn">{text}</span>
                    <span className="tw-followCard-stopFollow">No seguir</span>
                </button>
            </aside>
        </article>
    )
}