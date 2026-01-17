import HeaderBox from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions'
import React from 'react'

const TransactionHistory = () => {
    const loggedIn = { firstName: 'Amit', lastName: 'JSM', email: 'amit@jsm.com' }
    const accounts = [
        {
            id: '1',
            name: 'Bank of America',
            currentBalance: 1250.35,
            availableBalance: 1250.35,
            appwriteItemId: 'item1',
            officialName: 'Bank of America Standard Checking',
            mask: '1234',
            institutionId: 'ins_1',
            type: 'depository',
            subtype: 'checking',
            sharableId: 'share1'
        }
    ]

    return (
        <section className="transactions">
            <div className="transactions-header">
                <HeaderBox
                    title="Transaction History"
                    subtext="See your bank details and transactions."
                />
            </div>

            <div className="space-y-6">
                <div className="transactions-account">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-18 font-bold text-white">{accounts[0].name}</h2>
                        <p className="text-14 text-blue-25">
                            {accounts[0].officialName}
                        </p>
                        <p className="text-14 font-semibold tracking-[1.1px] text-white">
                            ●●●● ●●●● ●●●● {accounts[0].mask}
                        </p>
                    </div>

                    <div className='transactions-account-balance'>
                        <p className="text-14">Current Balance</p>
                        <p className="text-24 text-center font-bold">
                            {accounts[0].currentBalance}
                        </p>
                    </div>
                </div>

                <section className="flex w-full flex-col gap-6">
                    <RecentTransactions
                        accounts={accounts}
                        transactions={[]}
                        appwriteItemId={accounts[0].appwriteItemId}
                        page={1}
                    />
                </section>
            </div>
        </section>
    )
}

export default TransactionHistory
