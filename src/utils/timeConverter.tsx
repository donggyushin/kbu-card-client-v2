export const stringTimeToMinutes = (time: string): number => {
    const hour: number = parseInt(time.substr(0, 2))
    const minute: number = parseInt(time.substr(3, 2))
    return hour * 60 + minute
}