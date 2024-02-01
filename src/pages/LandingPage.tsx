import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  // <button className="cta" onClick={() => navigate("/login")}></button>
  // <button className="cta" onClick={() => navigate("/signup")}>


  return (
    <>
      <div className="relative h-screen flex items-center justify-center w-full ">
        <div className="relative md:w-1/2 sm:w-full flex items-center justify-center">
          <div className=" bg-white p-8 shadow rounded-3xl md:w-1/2 sm:full ">
            <div className="space-x-5 ">
              
            </div>
            <div className="mt-5">
              <label
                className=" text-sm text-gray-600 pb-1 block"
                htmlFor="login"
                >E-mail</label
              >
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="text"
                id="login"
              />
              <label
                className=" text-sm text-gray-600 pb-1 block"
                htmlFor="password"
                >Password</label
              >
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="password"
                id="password"
              />
            </div>
          
            <div className="mt-5">
              <button 
                className="py-2 px-4 bg-blue text-white w-full  rounded-lg"
                type="submit">
                Log in
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <a
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                href="#">
                  or sign up
              </a>
              <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
