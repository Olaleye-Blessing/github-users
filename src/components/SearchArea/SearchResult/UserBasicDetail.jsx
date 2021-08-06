import { VscLocation } from "react-icons/vsc";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";

import { useAppContext } from "../../../context/AppContext";
import Avatar from "../../Avatar";
import IconText from "../../IconText";
import NameAndUserName from "../../NameAndUserName";
import ResultBox from "./ResultBox";

const UserBasicDetail = () => {
    let { userDetail } = useAppContext();

    let {
        name,
        login,
        avatar_url,
        bio,
        blog,
        company,
        location,
        twitter_username: twitter,
        html_url,
    } = userDetail;

    let blogUrl = blog;
    if (blogUrl.indexOf(`https://`) === -1) {
        blogUrl = `https://${blog}`;
    }

    return (
        <ResultBox title="User">
            <div className="">
                <a
                    className="flex space-x-3 hover:text-purple-primary"
                    href={html_url}
                    rel="noreferrer"
                    target="_blank"
                >
                    <Avatar src={avatar_url} alt={`${name} profile pic`} />
                    <NameAndUserName name={name} username={login} />
                </a>
                <p className="mt-1 mb-3">{bio || "No Bio"}</p>
                {location && (
                    <div className="mb-2">
                        <IconText icon={<VscLocation />} text={location} />
                    </div>
                )}
                {company && (
                    <div className="mb-2">
                        <IconText
                            icon={<HiOutlineOfficeBuilding />}
                            text={company}
                        />
                    </div>
                )}
                {blog && (
                    <a
                        href={blogUrl}
                        target="_blank"
                        rel="noreferrer"
                        className=" text-purple-primary group mb-2 block"
                    >
                        <IconText
                            icon={
                                <AiOutlineLink className="group-hover:text-opacity-50 duration-200 transition-colors group-hover:text-purple-primary" />
                            }
                            text={blog}
                        />
                    </a>
                )}
                {twitter && (
                    <a
                        href={`https://twitter.com/${twitter}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-primary group mb-2 block"
                    >
                        <IconText
                            icon={
                                <FiTwitter className="group-hover:text-blue-primary group-hover:text-opacity-50 duration-200 transition-colors" />
                            }
                            text={twitter}
                        />
                    </a>
                )}
            </div>
        </ResultBox>
    );
};

export default UserBasicDetail;
