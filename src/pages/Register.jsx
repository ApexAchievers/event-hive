import googleIcon from '../assets/images/google-icon.png';

export default function Register() {
    return (
        <>


            <div className="flex bg-gray-200 w-full h-[900px] rounded-b-lg">
                <div className="bg-[url(./assets/images/register.png)] bg-cover w-[680px] h-[850px] rounded-bl-md rounded-tl-md">
                    <div className="flex justify-center items-center text-white">
                        <h2 className="absolute font-sans font-body-text text-[40px] text-center text-[#FFFFFF] leading-[100%] items-center w-[280px] h-[49px] top-[350px] left-[160px]">Welcome back</h2>
                        <p className=" absolute w-[412px] h-[19px] top-[439px] left-[94px] text-body-text font-sans font-normal leading-px text-center text-[#FFFFFF] tracking-tight">To keep connected with us provide us with your information </p>
                        <button className=" absolute flex w-[128px] h-[49px] top-[498px] left-[233.5px] border-[5px] border-none pt-[5px] pr[40px] pb-[15px] pl-[40px] gap-[10px] bg-white/40 text-[#FFFFFF] font-sans font-[16px] rounded-md items-center cursor-pointer">Signin</button>
                    </div>

                </div>

                <div className="flex flex-row justify-around items-center w-[840px] h-[900px] top-[11px] left-[493px] bg-gray-200">
                    <div className="w-[578px] h-[669px] top-[96px] left-[731px] border-0">
                        <div className="max-w-md w-full space-y-6">
                            <h3 className="flex flex-row justify-center">Event <span className="text-[#7848F4]">Hive</span></h3>
                            <h3 className="text-big-heading font-sans text-[#000000] text-center font-bold text-4xl tracking-tight h-[44px] mb-4">Sign Up to Event Hive</h3>
                        </div>

                        <form className="relative space-y-4">
                            <label htmlFor="" className="font-sans font-normal text-base items-center leading-[100%] w-[578px] h-[19px] tracking-tight">YOUR NAME</label>
                            <input type="text" placeholder="Enter your name" className="flex w-[578px] h-[46px] p-[10px] border border-gray-200 bg-white rounded-[5px] gap-[10px]" />
                            <label htmlFor="" className="font-sans font-normal text-base items-center leading-[100%] w-[578px] h-[19px] tracking-tight ">YOUR NAME</label>
                            <input type="text" placeholder="Enter your name" className="flex w-[578px] h-[46px] p-[10px] border  border-gray-200 bg-white rounded-[5px] gap-[10px]" />
                            <label htmlFor="" className="font-sans font-normal text-base items-center leading-[100%] w-[578px] h-[19px] tracking-tight">PASSWORD</label>
                            <input type="password" placeholder="Enter your password" className="flex w-[578px] h-[46px] p-[10px] bg-white  border-gray-200 rounded-[5px] gap-[10px]" />
                            <label htmlFor="" className="font-sans font-normal text-base items-center leading-[100%] w-[578px] h-[19px] tracking-tight ">CONFIRM YOUR PASSWORD</label>
                            <input type="password" placeholder="Enter your password" className="flex bg-white  w-[578px] h-[46px] p-[10px]  border-gray-200 rounded-[5px] gap-[10px]" />
                        </form>

                        <button className="flex justify-center flex-col text-center w-[257px] h-[40px] top-[690px] left-[892px] ml-38 border gap-[10px] bg-[#7848F4] mt-8 pr-[40px] pb-[15px] pl-[40px] text-body-text text-[#FFFFFF] rounded-[5px]">Sign Up</button> <div className="my-4 flex justify-center mr-2 text-center text-gray-500">Or</div>

                        <button className=" border-[1px] border-gray-300 py-2 rounded-[5px] w-[471px] h-[46px] ml-12 flex items-center justify-center gap-2 hover:bg-gray-50 transition bg-white">
                            <img src={googleIcon} alt="Google" className="w-5 h-5" />
                            <span>Sign up with Google</span>
                        </button>
                    </div>


                </div>


            </div>




        </>

    );
}