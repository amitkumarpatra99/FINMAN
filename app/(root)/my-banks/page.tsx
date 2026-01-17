import HeaderBox from '@/components/HeaderBox'
import BankCard from '@/components/BankCard'
import React from 'react'

const MyBanks = () => {
    const loggedIn = { firstName: 'Amit', lastName: 'JSM' }
    const accounts = [
        {
            id: '1',
            name: 'Bank of America',
            currentBalance: 1250.35,
            availableBalance: 1250.35,
            mask: '1234',
            appwriteItemId: 'item1',
            officialName: 'Bank of America Standard Checking',
            institutionId: 'ins_1',
            type: 'depository',
            subtype: 'checking',
            sharableId: 'share1'
        },
        {
            id: '2',
            name: 'Chase Bank',
            currentBalance: 500.50,
            availableBalance: 500.50,
            mask: '5678',
            appwriteItemId: 'item2',
            officialName: 'Chase Bank Checking',
            institutionId: 'ins_2',
            type: 'depository',
            subtype: 'checking',
            sharableId: 'share2'
        }
    ]

    return (
        <section className='flex'>
            <div className='my-banks'>
                <HeaderBox
                    title="My Bank Accounts"
                    subtext="Effortlessly manage your banking activities."
                />

                <div className="space-y-4">
                    <h2 className="header-2">
                        Your Cards
                    </h2>
                    <div className="flex flex-wrap gap-6">
                        {accounts && accounts.map((a: any) => (
                            <BankCard
                                key={a.id}
                                account={a}
                                userName={loggedIn?.firstName}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyBanks
