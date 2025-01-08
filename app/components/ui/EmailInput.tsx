'use client'

const EmailInput = () => {
    return (
        <div className="relative mb-8 w-[333px] xl:w-[350px] h-[60px]">
            <div className="inline-flex items-center w-full bg-white rounded-full shadow-lg overflow-hidden h-full">
                <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 px-4 py-3 rounded-l-full focus:outline-none text-gray-700"
                />
                <button className="flex items-center justify-center rounded-full bg-primary w-[50px] h-[50px] mr-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 01.09 1.32l-.083.094-5 5a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default EmailInput;