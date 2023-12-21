import { Stats } from "../types/Stats"
import { Fragment } from "react"

type StatsTableProps = {
    stats: Stats[]
}

const StatsTable = (stats: StatsTableProps) => {
    console.log(stats.stats)
    return (
        <div className="grid grid-cols-3 content-center">
            <p className="font-bold">Category</p>
            <p className="font-bold">Activities</p>
            <p className="font-bold">Distance</p>
            {stats.stats.map(stat => {
                return(
                    <Fragment key={stat.category}>
                        <p>{stat.category}</p>
                        <p className="content-end">{stat.numOfActivities}</p>
                        <p>{stat.distance}</p>
                    </Fragment>
                )
            })}
        </div>
    )
}

export default StatsTable