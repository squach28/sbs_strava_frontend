import { UserStats } from "./UserStats"


export type Leaderboard = {
    month: string
    year: string
    users: Array<UserStats>
}