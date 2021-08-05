import { useState } from "react";
import Button from "../../Buttons/Button";
import Modal from "../../Modal/Modal";
import ResultBox from "./ResultBox";
import UserLists from "./UserLists";

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
                    modalTitle={title}
                >
                    <UserLists
                        users={users}
                        extraClass="flex flex-wrap items-center justify-between gap-4 pl-4 pr-10"
                    />
                </Modal>
            )}
        </>
    );
};

export default UserFollow;
