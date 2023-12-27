import { Activity } from "../types/Activity"
import { Link } from "react-router-dom"

type ActivityCardProps = Activity & {
    discordName: string,
    avatarUrl: string

}

const ActivityCard = ({ name, discordId, discordName, avatarUrl, distance, elapsed_time, sport_type, start_date, timezone }: ActivityCardProps) => {
    const time = elapsed_time / 60
    const hours = time / 60
    const minutes = time
    const date = new Date(start_date)
    const timezoneSplit = timezone.split(' ') // split strava string timezone by space, last element will contain actual timezone
    return (
        <li className="flex flex-col w-full md:w-1/3 bg-white text-black dark:bg-gray-200 dark:text-black rounded-lg gap-1 p-3 shadow-lg">
        {avatarUrl ? <div className="flex items-center gap-2">
                        <Link to={`/user/${discordId}`}><img className="rounded-full w-10 border-2 border-black" src={avatarUrl} alt={`profile picture of ${discordName}`} /></Link>
                        <Link to={`/user/${discordId}`}><p className="font-bold">{discordName}</p></Link>
                    </div> : null}
            <p className="text-xl md:text-2xl font-bold">{name} - {sport_type}</p>
            <p className="text-lg md:text-xl">{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: timezoneSplit[timezoneSplit.length - 1]})} - {date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', timeZone: timezoneSplit[timezoneSplit.length - 1]})}</p>
            <div className="flex justify-center items-center text-lg md:text-xl mt-3">
                <div className="flex flex-col flex-1 justify-center items-center">
                    <p className="font-bold">Distance</p>
                    <p>{distance} {distance > 1 ? 'miles' : 'mile'}</p>
                </div>
                <div className="flex flex-col flex-1 justify-center items-center">
                    <p className="font-bold">Time</p>
                    <p>{hours >= 1 ? `${hours}h` : ''} {minutes % 60 !== 0 ? `${minutes}m` : ''}</p>
                </div>
            </div>
        </li>
    )
}

export default ActivityCard