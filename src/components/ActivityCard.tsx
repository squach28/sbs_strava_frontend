import { Activity } from "../types/Activity"
import { Link } from "react-router-dom"
import RunIcon from '../assets/icons/run.svg'
import PaddleIcon from '../assets/icons/paddles.svg'
import WalkIcon from '../assets/icons/walk.svg'

type ActivityCardProps = Activity & {
    discordName: string,
    avatarUrl: string
}

const ActivityCard = ({ name, discordId, discordName, avatarUrl, distance, elapsedTime, category, startDate, timezone }: ActivityCardProps) => {
    const time = elapsedTime
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time / 60) - (hours * 60))
    const seconds = time - (hours * 3600) - (minutes * 60)
    const date = new Date(startDate)
    const timezoneSplit = timezone.split(' ') // split strava string timezone by space, last element will contain actual timezone
    const categoryIcon = (category: string): JSX.Element | null => {
        switch(category) {
            case 'run':
                return <img className="object-contain w-8 h-8" src={RunIcon} />
            case ('canoeing' || 'paddle'):
                return <img className="object-contain w-8 h-8" src={PaddleIcon} />
            case 'walk':
                return <img className="object-contain w-8 h-8" src={WalkIcon} />
            default:
                return null
        }
    }
    return (
        <li className="flex flex-col w-full bg-white text-black dark:bg-gray-200 dark:text-black rounded-lg gap-1 p-3 shadow-lg md:w-1/2">
        {avatarUrl ? <div className="flex items-center gap-2">
                        <Link to={`/user/${discordId}`}><img className="rounded-full w-10 border-2 border-black" src={avatarUrl} alt={`profile picture of ${discordName}`} /></Link>
                        <Link to={`/user/${discordId}`}><p className="font-bold">{discordName}</p></Link>
                    </div> : null}
            <div className="flex gap-2 items-center">
                <p className="text-xl md:text-2xl font-bold">{name}</p>
                {categoryIcon(category)}
            </div>
            <p className="text-lg md:text-xl">{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: timezoneSplit[timezoneSplit.length - 1]})} - {date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', timeZone: timezoneSplit[timezoneSplit.length - 1]})}</p>
            <div className="flex justify-center items-center text-lg md:text-xl mt-3">
                <div className="flex flex-col flex-1 justify-center items-center">
                    <p className="font-bold">Distance</p>
                    <p>{distance} {distance > 1 ? 'miles' : 'mile'}</p>
                </div>
                <div className="flex flex-col flex-1 justify-center items-center">
                    <p className="font-bold">Time</p>
                    <p>{hours >= 1 ? `${hours.toFixed(0)}h` : ''} {minutes > 0 ? `${minutes.toFixed(0)}m` : ''} {seconds > 0 ? `${seconds}s` : ''}</p>
                </div>
            </div>
        </li>
    )
}

export default ActivityCard