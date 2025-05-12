import { MdFastfood } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";
import OrderCard from "./OrderCard.jsx";

function Nav({ searchValue, onSearchChange, showCart, setShowCart }) {
  const items = useSelector(state => state.cart);
  const subtotal = items.reduce((total, item) => total + item.price, 0);
  const deliveryFee = 20;
  const taxes = subtotal * 0.5 / 100;
  const total = Math.floor(subtotal + deliveryFee + taxes);

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
          <span className="absolute top-[0%] right-[5%] font-bold text-[16px]">{items.length}</span>
          <LuShoppingBag className="w-[30px] h-[30px]" onClick={handleCartToggle} />
        </div>
      </div>
      <div className={`md:w-[40vw] w-full h-screen min-h-screen bg-white fixed right-0 top-0 ${
        showCart ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 shadow-2xl z-50 flex flex-col`}>
        {/* Header */}
        <header className="flex justify-between items-center p-4 text-green-400 font-semibold text-2xl">
          <span>Order Items</span>
          <RxCross1
            className="font-bold text-2xl cursor-pointer hover:text-gray-500 transition-all"
            onClick={() => setShowCart(false)}
          />
        </header>
        {/* Scrollable Order List ithe ahe*/}
        <div className="flex-1 w-full mt-4 flex flex-col gap-5 overflow-y-auto px-4">
          {items.map(item => (
            <OrderCard
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
              qty={item.qty}
            />
          ))}
        </div>
        {/* Total and Place Order ithe ahe */}
        <div className="w-full flex flex-col gap-2 p-4 border-t mt-4 bg-white">
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-gray-600 font-semibold">Subtotal</span>
            <span className="text-green-400 font-semibold text-lg">Rs {subtotal.toFixed(2)}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-gray-600 font-semibold">Delivery</span>
            <span className="text-green-400 font-semibold text-lg">Rs {deliveryFee.toFixed(2)}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-gray-600 font-semibold">Taxes</span>
            <span className="text-green-400 font-semibold text-lg">Rs {taxes.toFixed(2)}</span>
          </div>
          <div className="w-full flex justify-between items-center border-t pt-2">
            <span className="text-lg text-gray-600 font-semibold">Total</span>
            <span className="text-green-500 font-bold text-xl">Rs {total.toFixed(2)}</span>
          </div>
          <button className="w-full p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all mt-2">
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav;
