import { Outlet } from 'react-router';
import { Header } from '../pages/Header';
import { Analytics } from "@vercel/analytics/react"
import '../styles/layout.css'

const Layout: React.FC = () => {
    return (
        <div className='layoutContainer'>
            <Header />

            <main className='main mx-4'>
                <div>
                    <Outlet />
                    <Analytics />
                </div>
            </main>
        </div>
    )
};

export default Layout;