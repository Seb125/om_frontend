import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Footer } from '../components/landing-components';
import images from '../assets/landing-assets/images'
import authService from "../services/auth.service";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [company, setCompany] = useState("");
    const [termsChecked, setTermsChecked] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const hasValidPassword = (str) => {
            const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

            return (
                passwordRegex.test(str)
            );
        };


        if (!hasValidPassword(password)) {
            setError("Password must be at least 6 characters long, contain one special character, one uppercase letter, one lowercase letter and one digit");
            return;
        }

        if (!termsChecked) {
            setError("Please agree to the Terms and Conditions");
            return;
        }

        const requestBody = { email, password, name, company };

        authService
            .register(requestBody)
            .then(() => {
                setError("");
                navigate("/login");
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setError(errorDescription);
            });
    };
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className='w-full bg-primary-hero-bluecolor'>
            <Navbar />
            <section className="min-h-screen mt-4 flex flex-col flex-1 justify-center items-center text-center relative z-50">
                <picture className="absolute bottom-0 left-0 -z-50 w-full">
                    <source media="(min-width:375px )" srcset={images.BackgroundCurveDesktop} />
                    <img src={images.BackgroundCurveMobile} alt="background-image" />
                </picture>
                <div className="flex items-center justify-center bg-gray-50 px-8 pb-8">
                    <div className="max-w-md w-full space-y- px-5 pb-4 shadow-md rounded m-4">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                Register Opinion Magnet
                            </h2>
                        </div>
                        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
                            <div className="flex gap-4 flex-col">
                                <div className="relative w-full min-w-[200px] h-10">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        placeholder=" "
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <label
                                        htmlFor="name"
                                        className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
                                    >
                                        Name
                                    </label>
                                </div>
                                <div className="relative w-full min-w-[200px] h-10">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        placeholder=" "
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label
                                        htmlFor="email"
                                        className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
                                    >
                                        name@mail.com
                                    </label>
                                </div>
                                <div className="relative w-full min-w-[200px] h-10">
                                    <input
                                        id="password"
                                        name="password"
                                        type={passwordVisible ? "text" : "password"}
                                        required
                                        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        placeholder=" "
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label
                                        htmlFor="password"
                                        className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
                                    >
                                        Password
                                    </label>
                                    <span
                                        className="absolute right-3 top-3 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {passwordVisible ? (
                                            <svg
                                                viewBox="0 0 24 24"
                                                width="16"
                                                height="16"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="css-i6dzq1"
                                            >
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        ) : (
                                            <svg
                                                viewBox="0 0 24 24"
                                                width="16"
                                                height="16"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="css-i6dzq1"
                                            >
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                                <line x1="1" y1="1" x2="23" y2="23"></line>
                                            </svg>
                                        )}
                                    </span>
                                </div>
                                <div className="relative w-full min-w-[200px] h-10">
                                    <input
                                        id="company"
                                        name="company"
                                        required
                                        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        placeholder=" "
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                    />
                                    <label
                                        htmlFor="confpassword"
                                        className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
                                    >
                                        Company
                                    </label>
                                </div>
                                <div className="inline-flex items-center">
                                    <label
                                        className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                                        htmlFor="remember"
                                    >
                                        <input
                                            type="checkbox"
                                            onChange={(e) => setTermsChecked(e.target.checked)}
                                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                            id="remember"
                                        />
                                        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3.5 w-3.5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </label>
                                    <label
                                        className="mt-px font-light text-gray-700 cursor-pointer select-none"
                                        htmlFor="remember"
                                    >
                                        <p className="flex items-center font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                                            I agree the
                                            <a
                                                href="#"
                                                className="font-medium transition-colors hover:text-gray-900"
                                            >
                                                &nbsp;Terms and Conditions
                                            </a>
                                        </p>
                                    </label>
                                </div>
                                {error && (
                                    <div className="text-center font-sans text-sm antialiased font-normal leading-normal text-red-500 mt-2">
                                        <p>{error}</p>
                                    </div>
                                )}
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    Register
                                </button>
                                <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                                    Already have an account?
                                    <Link to={"/login"} className="font-medium text-gray-900">
                                        Log In
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Register;