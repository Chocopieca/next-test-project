import { format, isThisWeek, parseISO } from 'date-fns';

export const formatTransactionDate = (timestamp: number): string => {
    const date = new Date(timestamp);
    
    if (isThisWeek(date, { weekStartsOn: 1 })) {
        return format(date, 'EEEE'); // Monday, Tuesday, etc.
    }
    
    return format(date, 'dd/MM/yy');
}; 