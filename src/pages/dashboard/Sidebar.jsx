import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.jpg'
import { DASHBOARD_SIDEBAR_LINKS } from './Navigation'
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {

  return (
    <div className='bg-gray-800 w-60 p-3 flex flex-col text-white'>
      <div className='flex items-center gap-2 px-1 py-3'>
        <img src={Logo} alt='/' className='h-10 object-cover' />
        <span className='text-orange-500 font-bold capitalize font-oswald text-lg'>arena fitness center.</span>
      </div>
      <div className='flex-1 py-8 flex flex-col gap-0.5'>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
        <div className={classNames('text-red-500', linkClasses)}>
          <span className='text-xl'>
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  )
}

function SidebarLink({ item }) {

  const { pathname } = useLocation()

  return (
    <Link to={item.path} className={classNames(pathname === item.path ? 'text-white' : 'text-neutral-400', linkClasses)}>
      <span className='text-xl'>{item.icon}</span>
      {item.label}
    </Link>
  )
}
