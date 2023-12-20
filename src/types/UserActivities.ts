export type Activity = {
    id: number,
    name: string,
    start_type: string,
    start_date_local: string,
    distance: number
}

export type UserActivities = {
    discordName: string,
    avatarUrl: string,
    activities: Activity[]
}

