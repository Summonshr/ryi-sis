import { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Head } from '@inertiajs/react';
import Breadcrumbs from '@/Components/Breadcrumbs';

export default function Authenticated(props) {
    const { auth, header, children, active, breadcrumbs } = props
    const { permissions } = auth
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-[640px] bg-gray-100">
            <Head title='RYI SIS dashboard'/>
            <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
                <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
                    <div className="flex flex-shrink-0 items-center px-4">
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    </div>
                    <div className="mt-5 flex flex-grow flex-col">
                        <nav className="flex-1 space-y-1 px-2 pb-4">
                            {permissions.includes('read-programs') && <ResponsiveNavLink active={active === 'programs'} href={route('taxonomy.get', ['programs'])}>Program</ResponsiveNavLink>}
                            {permissions.includes('read-courses') && <ResponsiveNavLink active={active === 'courses'} href={route('taxonomy.get', ['courses'])}>Courses</ResponsiveNavLink>}
                            {permissions.includes('read-semesters') && <ResponsiveNavLink active={active === 'semesters'} href={route('taxonomy.get', ['semesters'])}>Semesters</ResponsiveNavLink>}
                            {permissions.includes('read-seasons') && <ResponsiveNavLink active={active === 'seasons'} href={route('taxonomy.get', ['seasons'])}>Seasons</ResponsiveNavLink>}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-col min-h-screen">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-white w-full">
                    <div className="flex justify-end h-16">
                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        {auth.permissions.includes('read-roles_and_permissions') && <Dropdown.Link href={route('roles-and-permissions.index')}>Roles & Permission</Dropdown.Link>}
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <main className="flex-1">
                    <div className="py-6">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="">
                                <div className="mb-4">
                                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                                </div>
                                <div className="relative overflow-hidden rounded-xl border bg-white border-gray-200 p-4 sm:p-6 lg:p-8">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
    );
}
