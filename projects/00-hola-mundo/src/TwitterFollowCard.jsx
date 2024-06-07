export function TwitterFollowCard({formatUserName, userName, name, isFollowing}){
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
                        <span className='tw-followCard-infoUsername'>{formatUserName(userName)}</span>
                    </div>
                </header>
                <aside>
                    <button className='tw-followCard-button'>
                        Seguir
                    </button>
                </aside>
            </article>
    )
}