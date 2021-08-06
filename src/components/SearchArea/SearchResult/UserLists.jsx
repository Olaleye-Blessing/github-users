import { useAppContext } from "../../../context/AppContext";
import Avatar from "../../Avatar";
import Button from "../../Buttons/Button";
import NameAndUserName from "../../NameAndUserName";

const UserLists = ({ users, extraClass }) => {
    let { setShowSearch, handleSearchChange } = useAppContext();
    return (
        <ul className={`${extraClass}`}>
            {users.map((user) => {
                return (
                    <li key={user.id} className="my-4">
                        <Button
                            extraClass="flex gap-2 hover:text-green-primary"
                            onClick={() => {
                                setShowSearch(true);
                                handleSearchChange(user.login);
                            }}
                        >
                            <Avatar
                                src={user.avatar_url}
                                alt={`${user.login} profile pic`}
                            />
                            <NameAndUserName
                                name={user.login}
                                username={user.html_url}
                                extraClass="text-left"
                            />
                        </Button>
                    </li>
                );
            })}
        </ul>
    );
};

UserLists.defaultProps = {
    extraClass: "",
};

export default UserLists;
