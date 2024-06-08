import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'

export function App () {
    return(
        <div className='App'> 
        <TwitterFollowCard 
         isFollowing 
         userName="Gabo-Dev" name="Jonathan G.Orna Ponce"/>
        <TwitterFollowCard 
        isFollowing={false} userName="Ramso93" name="Don Osmar"/>
        </div>
    )
}