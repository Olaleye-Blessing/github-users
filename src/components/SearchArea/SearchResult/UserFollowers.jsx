import { useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import Button from "../../Buttons/Button";
import Modal from "../../Modal/Modal";
import ResultBox from "./ResultBox";
import UserLists from "./UserLists";

console.clear();
const UserFollowers = () => {
    let { userFollowers } = useAppContext();
    console.log(userFollowers);

    let fewFollowers = userFollowers.slice(0, 6);
    let showMore = userFollowers.length > 5;
    const [showMoreModal, setShowMoreModal] = useState(false);
    return (
        <>
            <ResultBox title="Followers">
                <UserLists users={fewFollowers} />
                {showMore && (
                    <Button
                        text="show more"
                        extraClass="text-purple-primary border border-current mt-5 rounded-md hover:bg-purple-primary hover:bg-opacity-20"
                        onClick={() => setShowMoreModal(true)}
                    />
                )}
            </ResultBox>
            {showMoreModal && (
                <Modal onClick={() => setShowMoreModal(false)}>
                    <UserLists
                        users={userFollowers}
                        extraClass="flex flex-wrap items-center justify-around gap-4"
                    />
                </Modal>
            )}
        </>
    );
};

export default UserFollowers;
