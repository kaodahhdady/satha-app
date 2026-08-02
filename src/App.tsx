import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SelectTow from './pages/SelectTow'
import SelectLocation from './pages/SelectLocation'
import ConfirmRequest from './pages/ConfirmRequest'
import Searching from './pages/Searching'
import DriverFound from './pages/DriverFound'
import LiveTracking from './pages/LiveTracking'
import Completed from './pages/OrderCompleted'
import History from './pages/OrderHistory'
import Wallet from './pages/Wallet'
import Account from './pages/Account'
import Emergency from './pages/Emergency'
import DriverHome from './pages/DriverHome'
import DriverRequests from './pages/DriverRequests'
import DriverWallet from './pages/DriverWallet'
import DriverAccount from './pages/DriverAccount'
import BottomNavigation from './components/BottomNavigation'

export default function App() {
  return (
    <div className="min-h-screen pb-24" dir="rtl">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/select-tow" element={<SelectTow />} />
        <Route path="/select-location" element={<SelectLocation />} />
        <Route path="/confirm" element={<ConfirmRequest />} />
        <Route path="/searching" element={<Searching />} />
        <Route path="/driver-found" element={<DriverFound />} />
        <Route path="/tracking" element={<LiveTracking />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/history" element={<History />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/account" element={<Account />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/driver/home" element={<DriverHome />} />
        <Route path="/driver/requests" element={<DriverRequests />} />
        <Route path="/driver/wallet" element={<DriverWallet />} />
        <Route path="/driver/account" element={<DriverAccount />} />
      </Routes>

      {/* Floating bottom nav */}
      <BottomNavigation />
    </div>
  )
}
