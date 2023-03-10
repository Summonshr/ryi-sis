import { Link } from '@inertiajs/react';

export default function ({ links }) {
    return (
        <div className="flex flex-wrap">
            {links.map(link => <Link className={'p-2 ' + (link.active ? 'text-indigo-900' : '')} disabled={link.active} href={link.url} dangerouslySetInnerHTML={{ __html: link.label }}></Link>)}
        </div>
    );
}
