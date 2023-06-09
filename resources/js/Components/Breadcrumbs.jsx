import { HomeIcon } from '@heroicons/react/20/solid'
import NavLink from './NavLink'


export default (props) => {
    const pages = props.breadcrumbs

    if (!pages) {
        return <div></div>
    }
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex space-x-4 rounded-md bg-white px-6 shadow">
                <li className="flex">
                    <div className="flex items-center">
                        <NavLink href={route('dashboard')} className="text-gray-400 hover:text-gray-500">
                            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                            <span className="sr-only">Home</span>
                        </NavLink>
                    </div>
                </li>
                {pages.map((page) => (
                    <li key={page.name} className="flex">
                        <div className="flex items-center">
                            <svg
                                className="h-full w-6 flex-shrink-0 text-gray-200"
                                viewBox="0 0 24 44"
                                preserveAspectRatio="none"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                            </svg>
                            <NavLink
                                href={page.href}
                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                aria-current={page.current ? 'page' : undefined}
                            >
                                {page.name}
                            </NavLink>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
}
