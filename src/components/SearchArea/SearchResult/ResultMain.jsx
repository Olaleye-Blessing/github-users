import { useAppContext } from "../../../context/AppContext";
import UserBasicDetail from "./UserBasicDetail";
import UserFollow from "./UserFollow";
import UserRepository from "./UserRepository";

const ResultMain = () => {
    let { userFollowing, userFollowers } = useAppContext();
    return (
        <>
            <section className="flex flex-wrap gap-x-4">
                <UserBasicDetail />
                <UserFollow title="Followers" users={userFollowers} />
                <UserFollow title="Following" users={userFollowing} />
                <UserRepository />
            </section>
        </>
    );
};

export default ResultMain;
