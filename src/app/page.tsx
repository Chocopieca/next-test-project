import Link from 'next/link';
import { transactions } from '@/assets/json/transactions';
import type { Transaction } from '@/assets/json/transactions';
import { formatTransactionDate } from '@/utils/dateFormatter';
import { calculateDailyPoints } from '@/utils/pointsCalculator';

const calculateBalance = (transactions: Transaction[]): number => {
    return transactions.reduce((acc, transaction) => {
        const amount = parseFloat(transaction.amount.replace(/[^0-9.-]+/g, ""));
        return transaction.amount.startsWith('+') ? acc + amount : acc - amount;
    }, 0);
};

const calculateAvailable = (balance: number): number => {
    return 1500 - balance;
};

export default function Wallet() {
    const balance = calculateBalance(transactions);
    const available = calculateAvailable(balance);
    const dailyPoints = calculateDailyPoints();

    return (
        <div className="max-w-[430px] mx-auto p-5 font-[-apple-system,BlinkMacSystemFont,system-ui] bg-[#F5F5F7]">
            <div className="flex justify-between gap-4">
                <div className="flex-1">
                    <div className="bg-white rounded-xl p-4 py-2 mb-4">
                        <h2 className="text-[15px] text-gray-800 font-semibold leading-none">Card Balance</h2>
                        <p className="text-[34px] text-gray-800 font-bold leading-none my-1">${balance.toFixed(2)}</p>
                        <p className="text-[15px] text-gray-500 tabular-nums">${available.toFixed(2)} Available</p>
                    </div>

                    <div className="bg-white rounded-xl p-4 py-2">
                        <h2 className="text-[15px] text-gray-800 font-semibold">Daily Points</h2>
                        <p className="text-[15px] text-gray-500 tabular-nums">{dailyPoints}</p>
                    </div>
                </div>

                <div className="flex justify-between flex-col bg-white rounded-xl p-4 py-2 w-[180px]">
                    <div>
                        <div className="flex items-center gap-1">
                            <p className="text-[15px] text-gray-800 font-semibold">No Payment Due</p>
                        </div>
                        <p className="text-[15px] text-gray-500">You've paid your September balance.</p>
                    </div>
                    
                    <div className="flex justify-end">
                        <div className="p-4 bg-gray-100 rounded-full">
                            <svg width="25" height="25" viewBox="0 0 12 12" fill="none">
                                <path d="M10 3L4.5 8.5L2 6" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h2 className="text-[22px] text-gray-800 font-bold mb-2">Latest Transactions</h2>
                <div className="bg-white rounded-xl divide-y divide-gray-100">
                    {transactions.map((transaction) => (
                        <Link 
                            key={transaction.id}
                            href={`/transactions/${transaction.id}`}
                            className="block"
                        >
                            <div className="p-2 px-3 flex items-center cursor-pointer hover:bg-gray-50 transition-colors">
                                <div 
                                    className="flex items-center justify-center w-[42px] h-[42px] rounded-[10px] mr-3 flex-shrink-0" 
                                    style={{ background: transaction.icon.background }}
                                >
                                    <img src={transaction.icon.url} width="20" height="20" alt={transaction.title} />
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex justify-between w-full">
                                        <div>
                                            <p className="text-[16px] text-gray-800 font-semibold leading-none mb-1">{transaction.title}</p>
                                            <p className="text-[14px] text-gray-500 leading-tight truncate max-w-[200px]">
                                                {transaction.status === "pending" && "Pending - "}{transaction.description}
                                            </p>
                                            <p className="text-[14px] text-gray-500 leading-tight">
                                                {transaction.user && `${transaction.user} - `}{formatTransactionDate(transaction.timestamp)}
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="text-right">
                                                <p className={`text-[16px] leading-none mb-1 ${
                                                    transaction.amount.startsWith('+') ? 'text-green-600' : 'text-gray-800'
                                                }`}>{transaction.amount}</p>
                                                {transaction.percentage && (
                                                    <span className="text-[13px] text-gray-500 leading-none bg-gray-100 rounded-[4px] px-1">{transaction.percentage}</span>
                                                )}
                                            </div>
                                            <svg className="ml-4 mt-1 text-gray-400" width="10" height="14" viewBox="0 0 8 12" fill="none">
                                                <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
