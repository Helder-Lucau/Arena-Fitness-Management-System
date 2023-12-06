import Image from '../assets/image.jpg'

const Login = () => {
  return (
    <div>
      {/*Background Image*/}
      <div className='w-full h-screen fixed bg-zinc-900/70'>
        <img src={Image} alt="/" className="w-full h-full object-cover mix-blend-overlay" />
      </div>
      <div className="absolute w-full h-screen flex justify-center items-center">
        {/*Login Form*/}
        <form className='lg:max-w-sm max-w-xs w-full bg-white md:p-8 p-6 rounded-lg'>
          <h2 className="md:text-3xl text-2xl font-bold text-orange-500 text-center py-6 font-oswald">The Arena Fitness Center</h2>
          <p className='font-light text-gray-400 mb-8 text-center'>Welcome to Arena Fitness Center Management System</p>
          <div className='flex flex-col py-2'>
            <label>Username</label>
            <input type="text" placeholder="Enter your username" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 mt-1" />
          </div>
          <div className='flex flex-col py-2'>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 mt-1" />
          </div>
          <button className="border w-full text-white my-5 p-2 rounded-2xl bg-orange-500 hover:bg-orange-400 hover:scale-105 duration">Log in</button>
          <button className="border w-full p-2 rounded-2xl border-gray-300 hover:bg-gray-200">Forgot password?</button>
        </form>
      </div>
    </div>
  )
}

export default Login