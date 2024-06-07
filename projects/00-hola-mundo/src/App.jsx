import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'

export function App () {
    // otra manera de añadir al username el formato de user con @
     const formatUserName = (userName) =>`@${userName}`
    return(
        <div className='App'> 
        <TwitterFollowCard 
        // pasamos una fnc. al userName
        formatUserName={formatUserName} 
         isFollowing 
         userName="Gabo-Dev" name="Jonathan G.Orna Ponce"/>
        <TwitterFollowCard 
        formatUserName={formatUserName} 
        isFollowing={false} userName="Ramso93" name="Don Osmar"/>
        </div>
    )
}