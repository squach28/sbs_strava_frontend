import { Activity } from "../types/UserActivities"

type ActivityCardProps = Activity & {
    discordName: string,
    avatarUrl: string

}

const ActivityCard = ({ name, discordName, avatarUrl }: ActivityCardProps) => {
    return (
        <li className="flex flex-col bg-gray-200 text-black rounded-lg gap-1 p-2">
            <div className="flex items-center gap-2">
                <img className="rounded-full w-10" src={avatarUrl} alt={`profile picture of ${discordName}`} />
                <p className="font-bold">{discordName}</p>
            </div>
            <p className="text-lg font-bold">{name}</p>
        </li>
    )
}

export default ActivityCard