import { useState } from "react";
import ColoredButton from "../../Buttons/ColoredButton";
import ResultBox from "./ResultBox";
import UserLists from "./UserLists";
import Modal from "./../../Modal";

const UserFollow = ({ title, users }) => {
    const [showMoreModal, setShowMoreModal] = useState(false);

    if (users.length === 0) {
        return null;
    }

    let fewUsers = users.slice(0, 5);
    let showMore = users.length > 5;

    return (
        <>
            <ResultBox title={title}>
                <UserLists users={fewUsers} />
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
                    modalTitle={title}
                >
                    <UserLists
                        users={users}
                        extraClass="flex flex-wrap items-center justify-between space-x-4 pl-4 pr-10"
                    />
                </Modal>
            )}
        </>
    );
};

export default UserFollow;
