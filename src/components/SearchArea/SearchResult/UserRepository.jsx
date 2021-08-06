import { useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import ColoredButton from "../../Buttons/ColoredButton";
import RepoBtnLink from "../../Buttons/RepoBtnLink";
import Modal from "./../../Modal";
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
                                    <RepoBtnLink text={name} href={html_url} />
                                </li>
                            );
                        })}
                    </ul>
                )}
                {showMore && (
                    <ColoredButton
                        text="show more"
                        extraClass="px-3 pt-1 pb-2"
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
                                    <RepoBtnLink text={name} href={html_url} />
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
