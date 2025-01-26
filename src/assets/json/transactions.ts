type TransactionStatus = 'pending' | 'completed';

export type Transaction = {
    id: number;
    icon: {
        url: string;
        background: string;
    };
    title: string;
    description: string;
    user?: string;
    timestamp: number;
    amount: string;
    percentage?: string;
    status: TransactionStatus;
}

export const transactions: Transaction[] = [
    {
        id: 1,
        icon: {
            url: "https://cdn.simpleicons.org/apple/white",
            background: "#585858"
        },
        title: "Apple",
        description: "Card Number Used for App Store Purchase",
        user: "Diana",
        timestamp: Date.now() - 86400000,
        amount: "$14.06",
        percentage: "3%",
        status: "pending"
    },
    {
        id: 2,
        icon: {
            url: "https://cdn.simpleicons.org/apple/white",
            background: "linear-gradient(135deg, #0A84FF 0%, #6B3BF5 100%)"
        },
        title: "Payment",
        description: "From JPMorgan Chase Bank National Association",
        user: "",
        timestamp: Date.now() - (2 * 86400000),
        amount: "+$174.00",
        status: "completed"
    },
    {
        id: 3,
        icon: {
            url: "https://cdn.simpleicons.org/apple/white",
            background: "#585858"
        },
        title: "Apple",
        description: "Card Number Used for iTunes Subscription",
        user: "Diana",
        timestamp: Date.now() - (2 * 86400000),
        amount: "$3.24",
        percentage: "3%",
        status: "completed"
    },
    {
        id: 4,
        icon: {
            url: "https://cdn.simpleicons.org/apple/white",
            background: "linear-gradient(135deg, #0A84FF 0%, #6B3BF5 100%)"
        },
        title: "Payment",
        description: "From JPMorgan Chase Bank National Association",
        user: "",
        timestamp: Date.now() - (4 * 86400000),
        amount: "+$99.71",
        status: "completed"
    },
    {
        id: 5,
        icon: {
            url: "https://cdn.simpleicons.org/apple/white",
            background: "linear-gradient(135deg, #0A84FF 0%, #6B3BF5 100%)"
        },
        title: "Payment",
        description: "From JPMorgan Chase Bank National Association",
        user: "",
        timestamp: Date.now() - (6 * 86400000),
        amount: "+$73.58",
        status: "completed"
    },
    {
        id: 6,
        icon: {
            url: "https://cdn.simpleicons.org/ikea/white",
            background: "#0058AB"
        },
        title: "IKEA",
        description: "Purchase at IKEA Store in Round Rock, TX",
        user: "",
        timestamp: 1664582400000,
        amount: "$21.61",
        percentage: "2%",
        status: "completed"
    },
    {
        id: 7,
        icon: {
            url: "https://cdn.simpleicons.org/target/white",
            background: "#E31837"
        },
        title: "Target",
        description: "Purchase at Target Store in Cedar Park, TX",
        user: "",
        timestamp: 1664582400000,
        amount: "$73.58",
        percentage: "2%",
        status: "completed"
    },
    {
        id: 8,
        icon: {
            url: "https://cdn.simpleicons.org/apple/white",
            background: "linear-gradient(135deg, #0A84FF 0%, #6B3BF5 100%)"
        },
        title: "Payment",
        description: "From JPMorgan Chase Bank National Association",
        user: "",
        timestamp: Date.now() - (6 * 86400000),
        amount: "+$73.58",
        status: "completed"
    },
    {
        id: 9,
        icon: {
            url: "https://cdn.simpleicons.org/ikea/white",
            background: "#0058AB"
        },
        title: "IKEA",
        description: "Purchase at IKEA Store in Round Rock, TX",
        user: "",
        timestamp: 1664582400000,
        amount: "$21.61",
        percentage: "2%",
        status: "completed"
    },
    {
        id: 10,
        icon: {
            url: "https://cdn.simpleicons.org/target/white",
            background: "#E31837"
        },
        title: "Target",
        description: "Purchase at Target Store in Cedar Park, TX",
        user: "",
        timestamp: 1664582400000,
        amount: "$73.58",
        percentage: "2%",
        status: "completed"
    }
]; 