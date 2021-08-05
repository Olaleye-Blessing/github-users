import { useAppContext } from "../../../context/AppContext";
import Button from "../../Buttons/Button";
import ResultBox from "./ResultBox";
import UserLists from "./UserLists";

console.clear();
const UserFollowing = () => {
    let { userFollowing } = useAppContext();
    console.log(userFollowing);

    let fewFollowers = userFollowing.slice(0, 6);
    let showMore = userFollowing.length > 5;
    return (
        <>
            <ResultBox title="Following">
                <UserLists users={fewFollowers} />
                {showMore && (
                    <Button
                        text="show more"
                        extraClass="text-purple-primary border border-current mt-5 rounded-md hover:bg-purple-primary hover:bg-opacity-20"
                    />
                )}
            </ResultBox>
        </>
    );
};

export default UserFollowing;
