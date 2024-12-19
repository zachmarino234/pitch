import { Outlet } from 'react-router';
import { Header } from '../pages/Header';
import '../styles/layout.css'

const Layout: React.FC = () => {
    return (
        <div className='layoutContainer'>
            <Header />

            <main className='main'>
                <div>
                    <Outlet />
                </div>
            </main>
        </div>
    )
};

export default Layout;