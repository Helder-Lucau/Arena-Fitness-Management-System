import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Members from './members/Members'
import Payment from './payment/Payment'

export default function DashboardRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/members' element={<Members />} />
                <Route path='/payment' element={<Payment />} />
            </Routes>
        </BrowserRouter>
    )
}
