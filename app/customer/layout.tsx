import Link from 'next/link'
import React from 'react'

const customerLayout = ({
    children,
}:{
    children: React.ReactNode
}) => {
  return (
    <div className='customer-layout flex'>
        <div className='slidebar w-1/4'>
            <ul>
                <li>
                    <Link href="/customer/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link href="/customer/profile">My Profile</Link>
                </li>
                <li>
                    <Link href="/customer/orders">Orders</Link>
                </li>
                <li>
                    <Link href="/customer/setting">Setting</Link>
                </li>
            </ul>
        </div>
        <div className='main-content w-3/4 p-4'>
            {children}
        </div>
    </div>
  )
}

export default customerLayout