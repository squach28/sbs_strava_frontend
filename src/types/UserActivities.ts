export type Activity = {
    id: number,
    name: string,
    sport_type: string,
    start_date_local: string,
    distance: number,
    elapsed_time: number
}

export type UserActivities = {
    discordName: string,
    avatarUrl: string,
    activities: Activity[]
}

