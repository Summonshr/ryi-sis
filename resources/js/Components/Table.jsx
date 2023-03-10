import Pagination from "./Pagination";

export default function Table({ children, data }) {

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
            <div className="w-full flex flex-wrap justify-between mt-2 items-center">
                <Pagination links={data.links} />
                <span>
                    Total Records: {data.total}
                </span>
            </div>
        </div>
    );
}
