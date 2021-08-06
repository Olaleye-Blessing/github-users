import { GoRepo } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { BsPersonPlus } from "react-icons/bs";
import { GiDiscussion } from "react-icons/gi";
import { useAppContext } from "../../../context/AppContext";

const ResultHeader = () => {
    let { userDetail } = useAppContext();

    let {
        followers,
        following,
        public_repos: repos,
        public_gists: gists,
    } = userDetail;

    let data = [
        {
            text: "Repos",
            value: repos,
            className: "bg-red-lighter bg-opacity-60 text-red-darker",
            icon: <GoRepo />,
        },
        {
            text: "Followers",
            value: followers,
            className: "bg-green-primary bg-opacity-20 text-green-primary",
            icon: <IoPeopleOutline />,
        },
        {
            text: "Following",
            value: following,
            className: "bg-purple-primary bg-opacity-60 text-purple-bright",
            icon: <BsPersonPlus />,
        },
        {
            text: "Gists",
            value: gists,
            className: "bg-cyan-light bg-opacity-40 text-cyan-light",
            icon: <GiDiscussion />,
        },
    ];

    return (
        <header className=" flex flex-wrap items-center justify-center space-x-5">
            {data.map((dat) => (
                <div key={dat.text} className="box mt-5">
                    <div className=" flex items-center justify-center space-x-5 pl-4 pr-9 pt-1 pb-2">
                        <figure className={`p-3 rounded-full ${dat.className}`}>
                            {dat.icon}
                        </figure>
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-lg font-bold">
                                {dat.value}
                            </span>
                            <span className="text-white-primary text-opacity-40 text-sm">
                                {dat.text}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </header>
    );
};

export default ResultHeader;
