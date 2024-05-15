import React from 'react'
import AdminNavbar from '../../components/Admin/AdminNavbar'
function AdminHome() {
    const user = {
        name: 'Tom Cook',
        email: 'tom@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }
    const navigation = [
        { name: 'Dashboard', href: '/adminHome', current: true },
        { name: 'Users', href: '/addusers', current: false },
        { name: 'Courses', href: '#', current: false },
        { name: 'Profile', href: '/adminProfile', current: false },
    ]
    const userNavigation = [
        { name: 'Your Profile', href: '#' },
        { name: 'Settings', href: '#' },
        { name: 'Sign out', href: '#' },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <div>
            <AdminNavbar />
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Admin Home</h1>
            </div>
        </div>
    )
}

export default AdminHome