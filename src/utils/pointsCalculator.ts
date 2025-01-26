import { getMonth } from 'date-fns';

const SEASONS = {
    WINTER: [11, 0, 1],  // Dec, Jan, Feb
    SPRING: [2, 3, 4],   // Mar, Apr, May
    SUMMER: [5, 6, 7],   // Jun, Jul, Aug
    AUTUMN: [8, 9, 10]   // Sep, Oct, Nov
};

const SEASON_START_MONTHS = {
    WINTER: 11,  // December
    SPRING: 2,   // March
    SUMMER: 5,   // June
    AUTUMN: 8    // September
};

export const calculateDailyPoints = (): string => {
    const today = new Date();
    const month = getMonth(today);
    
    let seasonStartMonth;
    if (SEASONS.WINTER.includes(month)) {
        seasonStartMonth = SEASON_START_MONTHS.WINTER;
    } else if (SEASONS.SPRING.includes(month)) {
        seasonStartMonth = SEASON_START_MONTHS.SPRING;
    } else if (SEASONS.SUMMER.includes(month)) {
        seasonStartMonth = SEASON_START_MONTHS.SUMMER;
    } else {
        seasonStartMonth = SEASON_START_MONTHS.AUTUMN;
    }

    const currentYear = today.getFullYear();
    const seasonStart = new Date(
        seasonStartMonth === 11 && month < 11 ? currentYear - 1 : currentYear,
        seasonStartMonth,
        1
    );

    const dayOfSeason = Math.floor((today.getTime() - seasonStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    
    let points = 0;
    if (dayOfSeason === 1) {
        points = 2;
    } else if (dayOfSeason === 2) {
        points = 3;
    } else {
        let prevDayPoints = 3;
        let prevPrevDayPoints = 2;
        
        for (let i = 3; i <= dayOfSeason; i++) {
            points = prevPrevDayPoints + (prevDayPoints * 0.6);
            prevPrevDayPoints = prevDayPoints;
            prevDayPoints = points;
        }
    }
    
    points = Math.round(points);
    return points >= 1000 ? `${Math.round(points/1000)}k` : points.toString();
}; 