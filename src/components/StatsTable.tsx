import { Stats } from "../types/Stats"
import { Fragment } from "react"

type StatsTableProps = {
    stats: Stats[]
}

const StatsTable = (stats: StatsTableProps) => {
    const totalNumOfActivities = stats.stats.reduce((acc, curr) => {
        return acc += curr.numOfActivities
    }, 0)
    const totalDistance = stats.stats.reduce((acc, curr) => {
        return acc += curr.distance
    }, 0)
    return (
        <div className="grid grid-cols-3 content-center bg-gray-600 text-white text-lg">
            <p className="font-bold border-[1px] p-2">Category</p>
            <p className="font-bold grid place-content-center border-[1px] p-2">Activities</p>
            <p className="font-bold grid place-content-center border-[1px] p-2">Distance</p>
            {stats.stats.map(stat => {
                return(
                    <Fragment key={stat.category}>
                        <p className="w-full border-[1px] p-2">{stat.category}</p>
                        <p className="w-full grid place-content-center border-[1px] p-2 ">{stat.numOfActivities}</p>
                        <p className="w-full grid place-content-center border-[1px] justify-self-end p-2">{stat.distance} mi</p>
                    </Fragment>
                )
            })}
            <p className="font-bold border-[1px] p-2">Total</p>
            <p className="font-bold grid place-content-center border-[1px] p-2">{totalNumOfActivities}</p>
            <p className="font-bold grid place-content-center border-[1px] p-2">{totalDistance} mi</p>
        </div>
    )
}

export default StatsTable