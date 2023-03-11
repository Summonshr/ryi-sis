import Pagination from "./Pagination";

export default function Table({ children, data, pagination }) {

    if (data.total === 0) {
        return (
            <div className="px-8 py-4 border-l-4 border-l-indigo-500 bg-indigo-100">
                No records found.
            </div>
        );
    }

    return (
        <div className="table">
            <table>
                {children}
            </table>
            {pagination !== false && <div className="w-full px-2 flex flex-wrap justify-between items-center">
                <Pagination links={data.links} />
                <span>
                    Total Records: {data.total}
                </span>
            </div>}
        </div>
    );
}
