import { transactions } from '@/assets/json/transactions';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { format } from 'date-fns';

export default function TransactionDetails({ params }: { params: { id: string } }) {
    const transaction = transactions.find(t => t.id === parseInt(params.id));

    if (!transaction) {
        notFound();
    }

    return (
        <div className="max-w-[430px] mx-auto bg-[#F5F5F7] min-h-screen pt-5">
            <div className="p-4">
                <Link href="/" className="text-blue-500 flex items-center gap-1">
                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
            </div>

            <div className="px-5 pt-4">
                <p className="text-[45px] text-gray-800 font-semibold leading-none text-center">{transaction.amount}</p>
                <div className="text-[14px] text-gray-500 mb-6 text-center">
                    <p>{transaction.title}</p>
                    <p>{format(new Date(transaction.timestamp), 'M/d/yy, HH:mm')}</p>
                </div>

                <div className="bg-white rounded-xl p-4">
                    <p className="text-gray-800 font-semibold">Status: {transaction.status === 'completed' ? 'Approved' : 'Pending'}</p>
                    <p className="text-gray-500">{transaction.description}</p>
                    <div className="h-[1px] bg-gray-100 my-4" />
                    <div className="flex justify-between items-center font-semibold">
                        <p className="text-gray-800">Total</p>
                        <p className="text-gray-800">{transaction.amount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 