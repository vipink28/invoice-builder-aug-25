
const SignUp = () => {
    return (
        <div className="py-2">
            <h2>Sign Up</h2>
            <form>
                <div className="mb-3">
                    <label className="block font-medium mb-3">Full Name</label>
                    <input type="text" name="fullname" className="h-10 px-2 rounded-md focus:outline-none border border-gray-200 w-full" />
                </div>
                <div className="mb-3">
                    <label className="block font-medium mb-3">Email</label>
                    <input type="email" name="email" className="h-10 px-2 rounded-md focus:outline-none border border-gray-200 w-full" />
                </div>
                <div className="mb-3">
                    <label className="block font-medium mb-3">Password</label>
                    <input type="password" name="password" className="h-10 px-2 rounded-md focus:outline-none border border-gray-200 w-full" />
                </div>

                <button className="bg-slate-300 text-slate-950 px-4 py-2 rounded-md font-bold cursor-pointer">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp