import { BiSearch } from "react-icons/bi";
// import Button from "../Buttons/Button";
import ColoredButton from "../Buttons/ColoredButton";

const FormSubmit = () => {
    return (
        <div className="flex items-center justify-center mt-8">
            <ColoredButton
                text="SEARCH"
                type="submit"
                extraClass="flex items-center justify-center px-6 pt-1 pb-2 group"
            >
                <span className="pt-1 pl-3">
                    <BiSearch className="group-hover:text-white-primary" />
                </span>
            </ColoredButton>
        </div>
    );
};

export default FormSubmit;
