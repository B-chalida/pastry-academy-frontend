import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 h-20 flex justify-between items-center">
          <div className="flex items-center">
            <div>
              <img
                src="public/image/logo.png"
                alt="logo image"
                className="w-[100px] h-[100px]"
              />
            </div>
            <button
              onClick={() => navigate("/")}
              className="font-dancing text-3xl text-textMain-mirage"
            >
              The Dough & Pastry Academy
            </button>
          </div>
          <div className="font-cormorant text-xl flex items-center">
            <button
              onClick={() => navigate("/")}
              className="mr-6 hover:text-textMain-mirage"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/story")}
              className="mr-6 hover:text-textMain-mirage"
            >
              Our Story
            </button>
            <button
              onClick={() => navigate("/programmes")}
              className="mr-6 hover:text-textMain-mirage"
            >
              Programmes
            </button>
            <button
              onClick={() => navigate("/login")}
              className="mr-6 hover:text-textMain-mirage"
            >
              Login
            </button>
            <button className="relative inline-block">
              <FaShoppingCart className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
