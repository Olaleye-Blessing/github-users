import { useAuth0 } from "@auth0/auth0-react";
import ColoredButton from "../components/Buttons/ColoredButton";
import loginImg from "./../images/login.svg";

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <main className="min-h-screen flex flex-wrap flex-col items-center px-3">
            <header className="w-full max-w-xs mt-auto">
                <figure>
                    <img src={loginImg} alt="login svg" />
                </figure>
            </header>
            <section className="mt-1 text-center  mb-auto">
                <header>
                    <h1>WAUSER</h1>
                </header>
                <div className="mt-2">
                    <ColoredButton
                        text="Login / Sign Up"
                        onClick={loginWithRedirect}
                        extraClass="px-8 pb-3 pt-2"
                    />
                </div>
            </section>
        </main>
    );
};

export default Login;
