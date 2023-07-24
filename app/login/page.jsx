import React from "react";

const Register = () => {

    return (
        <div className="container mx-auto">

            <div className="flex justify-center items-center h-screen">
                <div className="p-10 px-7 bg-white shrink-0 h-auto w-[35%] min-w-max">
                    <div className="title flex flex-col items-center pb-4">
                        <h4 className="text-3xl font-Playfair font-semibold">Smart Tailor & Cloth</h4>
                    </div>

                    <form className="py-1">
                        <div className="textbook flex flex-col items-center gap-6">
                            <input type="Email" placeholder="Email" className="border-[1px] border-black bg-transparent w-3/4 text-sm p-2 focus:outline-none" />
                            <input type="password" placeholder="Password" className="border-[1px] border-black bg-transparent w-3/4 text-sm p-2 focus:outline-none" />
                            <button type="submmit" className="text-center bg-Charcoal p-2 w-3/4 text-OffWhite">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register