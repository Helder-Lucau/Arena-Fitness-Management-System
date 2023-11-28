import Image from '../assets/image.jpg'

const Login = () => {
  return (
    <div>
      <div className="relative w-full h-screen bg-zinc-900/70">
        <img src={Image} alt="/" className="absolute w-full h-full object-cover mix-blend-overlay" />
        <div className="flex justify-center items-center h-full relative">
          <form className='max-w-[400px] w-full mx-auto bg-white p-8 rounded-lg'>
            <h2 className="text-3xl font-bold text-orange-500 text-center tracking-wide py-6">The Arena Fitness Center</h2>
            <p className='font-light text-gray-400 mb-8 text-center'>Welcome to Arena Fitness Center Management System</p>
            <div className='flex flex-col py-2'>
              <label className="">Username</label>
              <input type="text" placeholder="Enter your username" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
            </div>
            <div className='flex flex-col py-2'>
              <label className="">Password</label>
              <input type="password" placeholder="Enter your password" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
            </div>
            <button className="border w-full text-white my-5 p-2 rounded-2xl bg-orange-500 hover:bg-orange-200">Log in</button>
            <button className="border w-full p-2 rounded-2xl border-gray-300 hover:bg-gray-200">Forgot password?</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login