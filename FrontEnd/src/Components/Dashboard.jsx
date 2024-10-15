import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Home, User, Settings, Menu, X, ChevronDown} from 'lucide-react';
import SettingsContent from './Settings';
import ProfileContent from './Profile';
import ChartComponent from './ChartComponent';
import Todo from './Todo';

const Sidebar = ({ isOpen, toggleSidebar, setCurrentPage }) => (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-purple-700 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static`}>
        <div className="flex items-center justify-between p-4">
            <h1 className="text-2xl font-bold">MyDash</h1>
            <button onClick={toggleSidebar} className="lg:hidden p-2 rounded-md hover:bg-purple-600">
                <X className="h-6 w-6" />
            </button>
        </div>
        <nav className="mt-8">
            <SidebarItem icon={<Home />} label="Dashboard" onClick={() => { setCurrentPage('dashboard'); toggleSidebar(); }} />
            <SidebarItem icon={<User />} label="Profile" onClick={() => { setCurrentPage('profile'); toggleSidebar(); }} />
            <SidebarItem icon={<Settings />} label="Settings" onClick={() => { setCurrentPage('settings'); toggleSidebar(); }} />
        </nav>
    </div>
);

const SidebarItem = ({ icon, label, onClick }) => (
    <div className="flex items-center px-4 py-3 text-gray-100 hover:bg-purple-600 cursor-pointer" onClick={onClick}>
        {icon}
        <span className="ml-3">{label}</span>
    </div>
);

const Header = ({ toggleSidebar, toggleDropdown, isDropdownOpen, username, email }) => (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center">
            <button onClick={toggleSidebar} className="mr-2 lg:hidden p-2 rounded-md hover:bg-gray-100">
                <Menu className="h-6 w-6" />
            </button>
            <h2 className="text-xl font-semibold text-gray-800">Destion Innovation</h2>
        </div>
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none"
            >
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                    <User className="text-white h-5 w-5" />
                </div>
                <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <div className="px-4 py-2 text-sm text-gray-700">
                        <div className="font-semibold">{username}</div>
                        <div className="text-gray-500">{email}</div>
                    </div>
                    <hr className="my-1" />
                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                </div>
            )}
        </div>
    </header>
);

const DashboardContent = () => (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Total Users</h3>
                <p className="text-3xl font-bold">1,234</p>
            </div>
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Revenue</h3>
                <p className="text-3xl font-bold">$12,345</p>
            </div>
            <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Active Projects</h3>
                <p className="text-3xl font-bold">42</p>
            </div>
        </div>
        <div className="flex-grow flex flex-col">
            <div className="flex-grow overflow-auto">
                <Todo />
            </div>
            <div className="flex-grow overflow-auto mt-4">
                <ChartComponent />
            </div>
        </div>
    </>
);

const Dashboard = () => {
    const location = useLocation();
    const { username, email } = location.state || { username: "Guest", email: "Not Provided" };


    const [currentPage, setCurrentPage] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const renderContent = () => {
        switch (currentPage) {
            case 'profile':
                return <ProfileContent username={username} email={email} />;
            case 'settings':
                return <SettingsContent />;
            default:
                return <DashboardContent />;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} setCurrentPage={setCurrentPage} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header
                    toggleSidebar={toggleSidebar}
                    toggleDropdown={toggleDropdown}
                    isDropdownOpen={isDropdownOpen}
                    username={username}
                    email={email}
                />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    {renderContent()}
                </main>

            </div>
        </div>
    );
};

export default Dashboard;
