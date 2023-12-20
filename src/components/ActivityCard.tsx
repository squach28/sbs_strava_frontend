import { Activity } from "../types/UserActivities"
import { convertToMiles } from "../utils/unitConverter"

type ActivityCardProps = Activity & {
    discordName: string,
    avatarUrl: string

}

const ActivityCard = ({ name, discordName, avatarUrl, distance }: ActivityCardProps) => {
    const miles = convertToMiles(distance)
    return (
        <li className="flex flex-col bg-gray-200 text-black rounded-lg gap-1 p-2">
            <div className="flex items-center gap-2">
                <img className="rounded-full w-10" src={avatarUrl} alt={`profile picture of ${discordName}`} />
                <p className="font-bold">{discordName}</p>
            </div>
            <p className="text-lg font-bold">{name}</p>
            <p>Distance: {miles} {miles > 1 ? 'miles' : 'mile'} </p>
        </li>
    )
}

export default ActivityCard