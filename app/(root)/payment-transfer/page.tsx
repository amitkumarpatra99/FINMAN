import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const PaymentTransfer = () => {
    return (
        <section className="payment-transfer">
            <HeaderBox
                title="Payment Transfer"
                subtext="Please provide any specific details or notes related to the payment transfer"
            />

            <section className="size-full pt-5">
                {/* Placeholder for Payment Transfer Form */}
                <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg bg-white">
                    <h3 className="text-lg font-semibold text-gray-900">Transfer Details</h3>
                    <p className="text-gray-600">Select source account and enter transfer details.</p>

                    {/* Mock Form Elements */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700">Source Account</label>
                        <select className="p-2 border border-gray-300 rounded-md">
                            <option>Select Bank Account</option>
                            <option>Bank of America - 1234</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700">Transfer Note (Optional)</label>
                        <textarea
                            className="p-2 border border-gray-300 rounded-md"
                            placeholder="Dear John..."
                        />
                    </div>

                    <div className="payment-transfer_btn-box">
                        <button className="payment-transfer_btn rounded-lg py-2">
                            Transfer Funds
                        </button>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default PaymentTransfer
