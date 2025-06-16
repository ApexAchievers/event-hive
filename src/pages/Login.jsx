

export default function Login() {
    return (
        <>
            <div className="flex min-h-screen">
                {/* Left Section - Form */}
                <div className="md:w-1/2 bg-gray-200 flex items-center justify-evenly p-8">
                    <div className="max-w-md w-full">
                        <h2 className="text-heading font-semibold text-center"> <span className="font-bold">Event</span> <span className="text-[#7848F4] font-bold">Hive</span></h2>
                        <h3 className="text-big-heading font-bold mt-6 mb-8 text-center tracking-tighter">Sign In to Event Hive</h3>

                        <form className="space-y-6">
                            <div>
                                <label className="mb-1  text-body-text">YOUR EMAIL</label>
                                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-[5px] bg-white" placeholder="Enter your mail" />
                            </div>
                            <div>
                                <label className="mb-1 text-body-text">PASSWORD</label>
                                <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-[5px] bg-white" placeholder="Enter your password" />
                                <p className="text-right mt-1">
                                    <a href="#" className="text-sm text-gray-500 hover:text-gray-800 a">Forgot your password?</a>
                                </p>
                            </div>
                            <button
                                type="submit"
                                className="flex justify-evenly text-center  items-center gap-[10px] border-[1px] w-[257px] h-[40px] ml-24 bg-[#7848F4] text-white rounded-[5px] hover:bg-purple-700 transition"
                            >
                                Sign In
                            </button>
                        </form>

                        <div className="my-4 flex justify-center mr-2 text-center text-gray-500">Or</div>

                        <button className=" border-[1px] border-gray-300 py-2 rounded-[5px] w-[371px] h-[46px] ml-8 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
                            Sign up with Google
                        </button>
                    </div>
                </div>

                {/* Right Section - Image/Message */}
                <div className="hidden md:flex w-[600px] bg-cover bg-center relative bg-[url(./assets/images/login.png)] h-screen">
                    <div className="bg-opacity-50 text-white p-10 w-full flex items-center justify-center">
                        <div className="text-center">
                            <h2 className="text-heading font-bold mb-2">Hello Friend</h2>
                            <p className="text-body-text">To keep connected with us, please login with your personal info</p>

                        </div>
                        <button className="mb-12 absolute border-white py-2 px-6 hover:bg-white hover:text-black transition flex justify-around w-[128px] h-[49px] top-[498px] left-[233.5px] border-[5px] border-none pt-[5px] pr[40px] pb-[15px] pl-[40px] gap-[10px] bg-white/40 text-[#FFFFFF] font-sans font-[16px] rounded-md items-center cursor-pointer">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>


        </>
    );
}