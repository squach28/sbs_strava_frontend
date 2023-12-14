import { UserStats } from "../types/UserStats"

type LeaderboardListItemProps = UserStats & {
    place: number
}

const LeaderboardListItem = ({ discordId, discordName, stravaId, numOfActivities, distance, avatarUrl, place }: LeaderboardListItemProps) => {
    const listBackgroundColor = () => {
        switch(place) {
            case 1:
                return 'bg-[#FFD700] text-black'
            case 2:
                return 'bg-gray-300'
            case 3:
                return 'bg-brown-300'
            default:
                return 'bg-gray-500'

        }
    }

    return (
        <li className={`flex gap-3 ${listBackgroundColor()} px-4 py-3 rounded-md items-center`}>
            <p>{place}</p>
            <img width={50} className="bg-white rounded-full" src={avatarUrl} alt="person" />
            <div className="flex flex-col">
                <p className="font-bold">{discordName}</p>
                <div className="flex">
                    <p>{distance} mi</p>
                </div>
            </div>
        </li>
    )
    }

export default LeaderboardListItem