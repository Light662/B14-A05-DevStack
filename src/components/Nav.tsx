import logo from "../assets/logo-text.png"

const Nav = () => {
    return (
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div>
          <img src={logo} alt="website logo" className="cursor-pointer"/>
        </div>
        <ul className="flex gap-3 items-center text-[#475569]">
          <li className="text-[#DB2777] cursor-pointer">Home</li>
          <li className="cursor-pointer">Technologies</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <div>
          <button className="btn border-none rounded-full">Sign In</button>
          <button className="btn border-none rounded-full bg-[#D91B7E] text-white hover:bg-[#c0176e]">
            Sign Up
          </button>
        </div>
      </div>
    );
};

export default Nav;