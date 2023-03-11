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
            <Head title='RYI SIS dashboard' />
            <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
                <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
                    <div className="flex flex-shrink-0 items-center px-4">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="40 100 400.000000 80.000000" preserveAspectRatio="xMidYMid meet" colorInterpolationFilters="sRGB" style={{ margin: 'auto' }}>   <g fill="#333" className="iconblsvg-g iconsvg" transform="translate(50.34614562988281,99.14029312133789)"><g className="tp-name"><g data-gra="path-name" transform="translate(0, 4.310405249131016)"><g transform="scale(1)"><path d="M8.8 0L8.8 0Q7.12 0 5.81-1.05 4.49-2.1 4.49-3.65L4.49-3.65 4.49-38.25Q4.49-39.81 5.54-40.85 6.58-41.9 8.14-41.9L8.14-41.9 25.38-41.9Q28.49-41.9 31.22-40.26 33.94-38.61 35.62-35.71 37.29-32.8 37.29-29.03L37.29-29.03Q37.29-26.76 36.37-24.6 35.44-22.45 33.85-20.71 32.26-18.98 30.29-18.02L30.29-18.02 30.35-19.39Q32.03-18.5 33.13-17.27 34.24-16.04 34.87-14.64 35.5-13.23 35.62-11.61L35.62-11.61Q35.86-10.12 35.95-8.98 36.04-7.84 36.31-7.06 36.57-6.29 37.35-5.87L37.35-5.87Q38.67-5.09 39-3.62 39.33-2.15 38.31-1.02L38.31-1.02Q37.65-0.24 36.63-0.03 35.62 0.18 34.6-0.03 33.58-0.24 32.92-0.6L32.92-0.6Q31.91-1.2 30.89-2.36 29.87-3.53 29.24-5.51 28.61-7.48 28.61-10.6L28.61-10.6Q28.61-11.61 28.25-12.48 27.89-13.35 27.24-13.98 26.58-14.61 25.56-14.94 24.54-15.26 23.17-15.26L23.17-15.26 11.07-15.26 11.97-16.64 11.97-3.65Q11.97-2.1 11.13-1.05 10.3 0 8.8 0ZM11.97-19.99L11.13-21.43 25.08-21.43Q26.16-21.43 27.18-22.42 28.19-23.41 28.85-25.11 29.51-26.82 29.51-28.85L29.51-28.85Q29.51-31.49 28.1-33.25 26.7-35.02 25.08-35.02L25.08-35.02 11.25-35.02 11.97-36.93 11.97-19.99ZM71.11-42.08L71.11-42.08Q72.49-42.08 73.6-41.03 74.71-39.99 74.71-38.37L74.71-38.37Q74.71-37.83 74.56-37.26 74.41-36.69 74.05-36.16L74.05-36.16 60.46-16.7 61.54-20.83 61.54-3.65Q61.54-2.1 60.49-1.05 59.44 0 58.06 0L58.06 0Q56.57 0 55.52-1.05 54.47-2.1 54.47-3.65L54.47-3.65 54.47-20.35 54.95-18.44 42.02-35.62Q41.42-36.4 41.18-37.11 40.94-37.83 40.94-38.43L40.94-38.43Q40.94-40.05 42.2-41.06 43.46-42.08 44.78-42.08L44.78-42.08Q46.45-42.08 47.71-40.41L47.71-40.41 59.2-24.54 57.53-24.78 68.12-40.29Q69.38-42.08 71.11-42.08ZM87.58-38.25L87.58-3.65Q87.58-2.1 86.44-1.05 85.3 0 83.8 0L83.8 0Q82.13 0 81.11-1.05 80.09-2.1 80.09-3.65L80.09-3.65 80.09-38.25Q80.09-39.81 81.17-40.85 82.25-41.9 83.92-41.9L83.92-41.9Q85.36-41.9 86.47-40.85 87.58-39.81 87.58-38.25L87.58-38.25Z" transform="translate(-4.489999771118164, 42.5)"></path></g></g> <g transform="translate(91.09000396728516, 0)"><g><g className="imagesvg"><g><rect fill="#333" fillOpacity="0" strokeWidth="2" x="0" y="0" width="57.06771704239586" height="51.71941258679536" className="image-rect"></rect> <svg x="0" y="0" width="57.06771704239586" height="51.71941258679536" filtersec="colorsb9583159803" className="image-svg-svg primary" style={{ overflow: 'visible' }}><svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="-0.0005909661413170397 0 110.3411865234375 100"><defs><linearGradient id="ae8194c03-b976-4110-a715-bc6a7dcd8efe" x1="127.09" y1="100.34" x2="11.24" y2="19.22" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fad5a5"></stop><stop offset="1" stopColor="#f06c68"></stop></linearGradient><linearGradient id="b74247629-084e-4695-a572-5323a7fe49da" x1="12.79" y1="-21.54" x2="83.81" y2="101.47" href="#ae8194c03-b976-4110-a715-bc6a7dcd8efe"></linearGradient></defs><path d="M108.13 58.27L88.82 91.72A16.56 16.56 0 0 1 74.49 100H35.86a16.54 16.54 0 0 1-8.72-2.49C86.56 97.51 82.65 50 82.65 50a8.59 8.59 0 0 0-2.52-6.09L61.26 25a8.62 8.62 0 0 0-12.18 0L30.22 43.91a8.51 8.51 0 0 0-2.41 4.69c-.06-8.11 2.5-46 55.56-46a16.43 16.43 0 0 1 5.43 5.68l19.31 33.45a16.51 16.51 0 0 1 .02 16.54z" fill="url(#ae8194c03-b976-4110-a715-bc6a7dcd8efe)"></path><path d="M27.81 48.6a8.61 8.61 0 0 0 2.41 7.49L49.08 75a8.62 8.62 0 0 0 12.18 0l18.87-18.91A8.59 8.59 0 0 0 82.65 50s3.91 47.51-55.51 47.51a16.48 16.48 0 0 1-5.61-5.79L2.22 58.27a16.51 16.51 0 0 1 0-16.54L21.53 8.28A16.56 16.56 0 0 1 35.86 0h38.63a16.54 16.54 0 0 1 8.9 2.6c-53.08 0-55.64 37.89-55.58 46z" fill="url(#b74247629-084e-4695-a572-5323a7fe49da)"></path></svg></svg>
                        </g></g></g></g> <g fill="#333" transform="translate(156.15772247314453, 4.310405249131016)"><g transform="scale(1)"><path d="M17.96 0.6L17.96 0.6Q13.77 0.6 10.42-0.45 7.06-1.5 4.01-4.13L4.01-4.13Q3.23-4.79 2.81-5.63 2.39-6.46 2.39-7.3L2.39-7.3Q2.39-8.68 3.38-9.73 4.37-10.77 5.87-10.77L5.87-10.77Q7-10.77 7.9-10.06L7.9-10.06Q10.18-8.2 12.42-7.24 14.67-6.29 17.96-6.29L17.96-6.29Q20.17-6.29 22.03-6.97 23.88-7.66 25.02-8.83 26.16-10 26.16-11.49L26.16-11.49Q26.16-13.29 25.08-14.55 24-15.8 21.79-16.67 19.57-17.54 16.16-18.02L16.16-18.02Q12.93-18.5 10.48-19.48 8.02-20.47 6.38-22 4.73-23.53 3.89-25.59 3.05-27.66 3.05-30.23L3.05-30.23Q3.05-34.12 5.06-36.87 7.06-39.63 10.48-41.06 13.89-42.5 18.02-42.5L18.02-42.5Q21.91-42.5 25.23-41.33 28.55-40.17 30.65-38.37L30.65-38.37Q32.38-36.99 32.38-35.2L32.38-35.2Q32.38-33.88 31.37-32.8 30.35-31.73 28.97-31.73L28.97-31.73Q28.07-31.73 27.36-32.26L27.36-32.26Q26.4-33.1 24.78-33.85 23.17-34.6 21.37-35.11 19.57-35.62 18.02-35.62L18.02-35.62Q15.44-35.62 13.68-34.96 11.91-34.3 11.01-33.16 10.12-32.03 10.12-30.53L10.12-30.53Q10.12-28.73 11.16-27.57 12.21-26.4 14.19-25.71 16.16-25.02 18.92-24.48L18.92-24.48Q22.51-23.82 25.23-22.93 27.95-22.03 29.75-20.62 31.55-19.22 32.44-17.09 33.34-14.97 33.34-11.91L33.34-11.91Q33.34-8.02 31.19-5.21 29.03-2.39 25.53-0.9 22.03 0.6 17.96 0.6ZM47.71-38.25L47.71-3.65Q47.71-2.1 46.57-1.05 45.43 0 43.94 0L43.94 0Q42.26 0 41.24-1.05 40.23-2.1 40.23-3.65L40.23-3.65 40.23-38.25Q40.23-39.81 41.3-40.85 42.38-41.9 44.06-41.9L44.06-41.9Q45.49-41.9 46.6-40.85 47.71-39.81 47.71-38.25L47.71-38.25ZM70.16 0.6L70.16 0.6Q65.97 0.6 62.61-0.45 59.26-1.5 56.21-4.13L56.21-4.13Q55.43-4.79 55.01-5.63 54.59-6.46 54.59-7.3L54.59-7.3Q54.59-8.68 55.58-9.73 56.57-10.77 58.06-10.77L58.06-10.77Q59.2-10.77 60.1-10.06L60.1-10.06Q62.37-8.2 64.62-7.24 66.86-6.29 70.16-6.29L70.16-6.29Q72.37-6.29 74.23-6.97 76.08-7.66 77.22-8.83 78.36-10 78.36-11.49L78.36-11.49Q78.36-13.29 77.28-14.55 76.2-15.8 73.99-16.67 71.77-17.54 68.36-18.02L68.36-18.02Q65.13-18.5 62.67-19.48 60.22-20.47 58.57-22 56.93-23.53 56.09-25.59 55.25-27.66 55.25-30.23L55.25-30.23Q55.25-34.12 57.26-36.87 59.26-39.63 62.67-41.06 66.09-42.5 70.22-42.5L70.22-42.5Q74.11-42.5 77.43-41.33 80.75-40.17 82.85-38.37L82.85-38.37Q84.58-36.99 84.58-35.2L84.58-35.2Q84.58-33.88 83.57-32.8 82.55-31.73 81.17-31.73L81.17-31.73Q80.27-31.73 79.55-32.26L79.55-32.26Q78.6-33.1 76.98-33.85 75.36-34.6 73.57-35.11 71.77-35.62 70.22-35.62L70.22-35.62Q67.64-35.62 65.88-34.96 64.11-34.3 63.21-33.16 62.31-32.03 62.31-30.53L62.31-30.53Q62.31-28.73 63.36-27.57 64.41-26.4 66.39-25.71 68.36-25.02 71.11-24.48L71.11-24.48Q74.71-23.82 77.43-22.93 80.15-22.03 81.95-20.62 83.74-19.22 84.64-17.09 85.54-14.97 85.54-11.91L85.54-11.91Q85.54-8.02 83.39-5.21 81.23-2.39 77.73-0.9 74.23 0.6 70.16 0.6Z" transform="translate(-2.390000104904175, 42.5)"></path></g></g></g></g><defs v-gra="od"></defs></svg>
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
