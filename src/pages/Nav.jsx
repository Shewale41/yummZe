import { MdFastfood } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";

function Nav({ searchValue, onSearchChange, showCart, setShowCart }) {
  const handleCartToggle = () => {
    setShowCart(!showCart);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex h-[100px] w-full justify-between items-center px-8">
        <div className="text-green-400 w-[50px] h-[50px] bg-white 
                flex items-center justify-center rounded-md shadow-xl">
          <MdFastfood className="w-[30px] h-[30px]" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex w-[45%] md:w-[70%] h-[60%] bg-white items-center
                    px-8 gap-3 rounded-md shadow-xl"
        >
          <IoIosSearch className="w-[20px] h-[20px] text-green-400" />
          <input
            type="text"
            placeholder="Search Items..."
            className="w-full outline-none text-[12px] md:text-[20px]"
            value={searchValue}
            onChange={onSearchChange}
          />
        </form>
        <div
          className="relative text-green-400 w-[50px] h-[50px] bg-white 
                flex items-center justify-center rounded-md shadow-xl 
                cursor-pointer"
          onClick={handleCartToggle}
        >
          <span className="absolute top-[0%] right-[5%] font-bold text-[16px]">0</span>
          <LuShoppingBag className="w-[30px] h-[30px]" />
        </div>
      </div>
    </>
  );
}

export default Nav;
