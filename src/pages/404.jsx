import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <main className="h-screen px-4 text-center">
            <div className="h-full flex flex-col justify-center items-center">
                <h1 className="error text-7xl tracking-widest text-purple-primary">
                    4<span>0</span>4
                </h1>
                <div className="page my-6 text-lg text-opacity-60 text-white-primary">
                    Ooops!!! The page you are looking for is not found
                </div>
                <Link
                    to="/"
                    className="back-home border px-4 pt-2 pb-3 rounded-md text-purple-dark bg-white-primary font-semibold hover:bg-opacity-70 focus:bg-transparent focus:text-white-primary"
                >
                    Back to home
                </Link>
            </div>
        </main>
    );
};

export default NotFound;
