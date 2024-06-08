// añadimos un hook, premite dotar a nuestros componentes de mayor funcionalidad
import { useState } from "react"

export function TwitterFollowCard({userName, name}){
    // empleamos desestructuración
    const [isFollowing, setIsFollowing] = useState(false)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 
        'tw-followCard-button is-following' : 
        'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
    
    return (
        <article className='tw-followCard'>
                <header className='tw-followCard-header'>
                    <img 
                        // src evalua toda la expresión,
                        // también podríamos usar una const y que la evalue
                        src={`https://unavatar.io/github/${userName}`} 
                        alt= {`El avatar de ${userName}`} 
                        className='tw-followCard-avatar' />
                    <div className='tw-followCard-info'>
                        <strong>{name}</strong>
                        <span className='tw-followCard-infoUsername'>@{userName}</span>
                    </div>
                </header>
                <aside>
                    <button className={buttonClassName} onClick={handleClick}>
                        {text}
                    </button>
                </aside>
            </article>
    )
}