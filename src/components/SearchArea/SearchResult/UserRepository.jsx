import { useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import Button from "../../Buttons/Button";
import Modal from "../../Modal/Modal";
import ResultBox from "./ResultBox";

const UserRepository = () => {
    let { userRepos } = useAppContext();
    const [showMoreModal, setShowMoreModal] = useState(false);

    if (userRepos.length === 0) return null;

    let fewRepos = userRepos.slice(0, 5);
    let showMore = userRepos.length > 5;

    return (
        <>
            <ResultBox title="Repositories">
                {userRepos.length > 0 && (
                    <ul>
                        {fewRepos.map((repo) => {
                            let { name, html_url } = repo;
                            return (
                                <li key={name}>
                                    <a
                                        href={html_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block text-purple-primary pt-1 pb-2 px-2 mb-2 border border-current hover:border-current rounded-md hover:bg-purple-primary hover:bg-opacity-30"
                                    >
                                        {name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                )}
                {showMore && (
                    <Button
                        text="show more"
                        extraClass="text-purple-primary border border-current mt-5 rounded-md hover:bg-purple-primary hover:bg-opacity-20"
                        onClick={() => setShowMoreModal(true)}
                    />
                )}
            </ResultBox>
            {showMoreModal && (
                <Modal
                    onClick={() => setShowMoreModal(false)}
                    modalTitle={"Repositories"}
                >
                    <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 px-3 py-3">
                        {userRepos.map((repo) => {
                            let { name, html_url } = repo;
                            return (
                                <li key={name}>
                                    <a
                                        href={html_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block text-purple-primary pt-1 pb-2 px-2 mb-2 border border-current hover:border-current rounded-md hover:bg-purple-primary hover:bg-opacity-30"
                                    >
                                        {name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </Modal>
            )}
        </>
    );
};

export default UserRepository;
