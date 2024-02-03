import { BiSend } from "react-icons/bi";
import { useForm } from "react-hook-form";

const fields = [
    { name: "fullName", label: "Full Name", type: "text", required: true },
    {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        pattern: /^\S+@\S+$/i,
    },
    { name: "message", label: "Message", type: "textarea", required: true },
];

function HelpCenter() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        // Handle form submission logic here
        console.log(data);
    };

    return (
        <div>
            <div className="p-3 max-w-7xl m-auto">
                {/* <div className="title-banner my-6 py-4 bg-rose-400 text-center rounded-lg sm:my-10 w-max">
                    <h1 className="text-xl font-bold text-white mx-6 md:text-xl sm:text-xl">
                        24/7 Full Support
                    </h1>
                </div> */}
                <h1 className="mt-8 text-3xl font-bold text-black text-center sm:text-left sm:text-4xl">
                    Get in touch with us
                </h1>
                <p className="my-5 text-gray-600 text-md leading-9 text-justify sm:text-left">
                    Explore the comprehensive support offerings on our website, where
                    our dedicated team stands ready to assist you around the clock,
                    24/7. Whether you have questions, need guidance, or encounter any
                    issues, our robust online support section ensures that you can
                    access the help you need at any time. Visit our website to
                    experience uninterrupted assistance and a seamless support journey,
                    making your interaction with our services convenient and reliable,
                    day or night.
                </p>
                <form
                    className="my-10 flex flex-col justify-start items-center max-w-xl"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {fields.map((field) => (
                        <div
                            key={field.name}
                            className={`${field.type === "textarea"
                                ? "mb-6"
                                : "grid grid-cols-1 mb-6 gap-3"
                                } w-full`}
                        >
                            <div className="text-left flex flex-col  gap-2 w-full">
                                <label className="font-semibold">{field.label}</label>
                                {field.type === "textarea" ? (
                                    <textarea
                                        {...register(field.name, { required: field.required })}
                                        className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 pb-16 px-4 md:py-3 md:pb-16 md:px-4 md:mb-0 focus:border-red-500"
                                        placeholder={`Type ${field.label.toLowerCase()}...`}
                                    ></textarea>
                                ) : (
                                    <input
                                        {...register(field.name, {
                                            required: field.required,
                                            pattern: field.pattern,
                                        })}
                                        className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                                        type={field.type}
                                        placeholder={`Enter ${field.label.toLowerCase()}`}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                    <div className="w-full text-left">
                        <button
                            className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-rose-400 text-white text-sm font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:w-max md:px-6"
                            title="Send"
                            type="submit"
                        >
                            <span>Send</span>
                            <BiSend />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HelpCenter

