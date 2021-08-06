import { AiOutlineClose } from "react-icons/ai";
import Button from "./Buttons/Button";
import ScreenOverlay from "./ScreenOverlay";

const Modal = ({ children, onClick, modalTitle }) => {
    return (
        <ScreenOverlay extraClass="">
            <div
                className="bg-black-dark max-w-2xl relative px-3 w-full mx-3 rounded-md"
                style={{ height: "80%" }}
            >
                <header className="absolute top-0 left-0 right-0 flex items-center justify-end pt-3 pb-4 px-3 border-b border-white-primary border-opacity-30">
                    {modalTitle && <h2 className="mr-auto">{modalTitle}</h2>}
                    <Button
                        extraClass="text-2xl"
                        onClick={onClick}
                        children={
                            <AiOutlineClose className="text-white-primary text-opacity-50 hover:text-red-darker hover:text-opacity-80 transition-colors duration-200" />
                        }
                    />
                </header>
                <div className="absolute left-0 right-0 bottom-0 overflow-auto top-16">
                    {children}
                </div>
            </div>
        </ScreenOverlay>
    );
};

export default Modal;
