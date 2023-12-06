import { MdOutlinePayment } from "react-icons/md";
import { HiOutlineUsers, HiOutlineViewGrid } from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'members',
        label: 'Members',
        path: '/members',
        icon: <HiOutlineUsers />
    },
    {
        key: 'payment',
        label: 'Payment',
        path: '/payment',
        icon: <MdOutlinePayment />
    },
]
