
const FBClone = () => {
  return (
    <div className="container mt-48 flex mx-auto items-center justify-center ">
        <div className="left w-1/3 mx-14">
            <img className="w-80" src="fb.svg" alt="fb logo"/>
            <p className="text-2xl mx-6">Facebook helps you connect and share with the people in your life.</p>
        </div> 
        <div className="right flex flex-col bg-white p-8 rounded-xl w-1/3 text-lg relative">
            <input className="px-4 h-12 my-2 border border-1 border-gray-200 rounded-lg outline-blue-500" type="text" placeholder="Email address or phone number" />
            <input className="px-4 h-12 my-2 border border-1 border-gray-200 rounded-lg outline-blue-500" type="password" placeholder="Password" />
            <button className="bg-blue-600 hover:bg-blue-700 font-bold cursor-pointer text-white my-2 py-3 rounded-md">Log In</button>
            <span className="text-blue-600 hover:text-blue-700 text-center cursor-pointer my-2">Forgotten Password?</span>
            <hr className="my-2" />
            <button className="bg-green-600 hover:bg-green-700 font-bold cursor-pointer mx-auto px-4 w-fit text-white my-2 py-3 rounded-md">Create New Account</button>
            <span className="absolute -bottom-12 text-sm"><span className="cursor-pointer font-bold">Create a Page</span> for a celebrity, brand or business.</span>
        </div> 
    </div>
  )
}

export default FBClone;
