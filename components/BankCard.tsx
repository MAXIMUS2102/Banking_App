import { formatAmount } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const BankCard = ({account, userName, showBalance = true}: CreditCardProps) => {
  return (
    <div className='flex flex-col'>
        <Link href="/" className='bank-card'>
            <div className='bank-card_content'>
                <div>
                    <h1 className='text-16 font-semibold text-white'>
                        {account.name || 'Swapnil Mohanty'}
                    </h1>
                    <p className='font-ibm-plex-serif font-black text-white'>
                        {formatAmount(account.currentBalance)}
                    </p>
                </div>
                <article className='flex flex-col gap-2'>
                    <div className='flex justify-between'>
                        <h1>
                            {/* {userName} */}
                            {'Swapnil'}
                        </h1>
                        <h2 className='text-12 font-semibold text-white'>●●/●●</h2>
                        <p className='text-32 font-semibold tracking-[1.1px] text-white'>
                            <br />
                            ●●●● ●●●● ●●●● <span className='text-16'>1234</span>
                        </p>
                    </div>
                </article>
            </div>

            <div className='bank-card_icon'>
                <Image
                    src="/icons/Paypass.svg"
                    width={20}
                    height={24}
                    alt='pay'
                />
                <Image
                    src="/icons/mastercard.svg"
                    height={45}
                    width={32}
                    alt='mastercard'
                    className='ml-5'
                />
            </div>
            <Image
                src='/icons/lines.png'
                width={316}
                height={190}
                className='absolute top-0 left-0'
            />
        </Link>
        {/* {copy} */}
    </div>
  )
}

export default BankCard