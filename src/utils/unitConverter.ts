export const convertToMiles = (distance: number) => {
    const meterToMileConversion = 0.0006213712
    return Math.round(distance * meterToMileConversion)
}