import Nav from './Nav.jsx';
import Categories from '../Category.jsx';
import Card from './Card.jsx';
import {food_items} from '../food.js';
import {React,useState} from 'react';
import { RxCross1 } from "react-icons/rx";
import OrderCard from './OrderCard.jsx';
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem, ClearCart } from "../redux/cartSlice";
import { IoTrashOutline } from "react-icons/io5";
import {toast} from 'react-toastify';

function Home(){ 
    const [catg,setCatg] = useState(food_items);
    const [searchValue, setSearchValue] = useState("");
    const [showCart,setShowCart] = useState(false);
    const [search,setSearch] = useState("");

    function filterCatg(category){
        if(category=='All'){
            setCatg(food_items);
        }else{
            const newList= food_items.filter((item)=>(
                item.food_category===category));
            setCatg(newList);
        }
    }

    function handleSearchChange(e) {
        const value = e.target.value;
        setSearch(value);
        setSearchValue(value);
        if (value === "") {
            setCatg(food_items);
        } else {
            const filtered = food_items.filter(item =>
                item.food_name.toLowerCase().includes(value.toLowerCase())
            );
            setCatg(filtered);
        }
    }

    let items = useSelector(state=>state.cart)

    let subtotal=items.reduce((total,item)=>total+item.price*item.qty,0)
    let deliveryFee=20;
    let taxes=subtotal*0.5/100;
    let total = Math.floor(subtotal+deliveryFee+taxes);

    const dispatch = useDispatch();

    return(
        <>
        <div className='bg-slate-200 w-full min-h-screen relative'>
            <Nav 
                searchValue={searchValue}
                onSearchChange={handleSearchChange}
                showCart={showCart}
                setShowCart={setShowCart}
            />
            {!search ? 
                <div className='flex px-8 gap-7 flex-wrap justify-center items-center'>
                    {Categories.map((element,index)=>{                 
                   return <div key={index} 
                   onClick={()=>filterCatg(element.name)} 
                   className='w-[140px] h-[140px] bg-white flex flex-col 
                   item-start justify-start gap-2 p-2 rounded-l 
                   text-[21px] cursor-pointer font-semibold text-gray-500 shadow-md 
                            hover:bg-green-200 transition-all duration-300'>
                        {element.image}
                        {element.name}
                        </div>
                    })}
                </div> 
            : null}
            
            <div className='w-full flex flex-wrap items-center justify-center gap-5 px-4 pt-6 pb-6'>
                {catg.length>1?catg.map((item,index)=>(
                    <Card 
                        key={item.id} 
                        name={item.food_name} 
                        image={item.food_image}
                        price={item.price} 
                        id={item.id} 
                        type={item.food_type} 
                    />
                )):<div className='text-xl text-green-400 font-semibold'>No Dish Found</div>
                 }
                
        </div>
            <div className={`md:w-[40vw] w-full h-full bg-white fixed right-0 top-0 overflow-auto
                ${showCart ? "translate-x-0" : "translate-x-full"} transition-transform duration-300
                shadow-2xl z-50 flex flex-col`}>
                <header className='flex justify-between items-center p-4 text-green-400
                    font-semibold text-2xl'>
                    <span>Order Items</span>
                    <RxCross1 
                        className='font-bold text-2xl cursor-pointer hover:text-gray-500 transition-all'
                        onClick={() => setShowCart(false)}
                    />
                </header>
                <div className='w-full mt-8 flex flex-col gap-5'>
                    {items.length > 0 ? (
                        items.map(item => (
                            <OrderCard
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                id={item.id}
                                qty={item.qty}
                            />
                        ))
                    ) : (
                        <div className="text-center text-green-400 text-xl font-semibold">
                            Your cart is empty.
                        </div>
                    )}
                </div>
                {items.length > 0 && (
                    <div className="w-full flex flex-col gap-2 p-4 border-t mt-4">
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
                        <div>
                            <button className='flex justify-center items-center 
                            bg-green-400 w-full h-full p-3 text-lg font-semibold
                            rounded-md text-white hover:bg-green-600 cursor-pointer
                            transition-all' onClick={() => {
                                toast.success("Order placed successfully");
                                dispatch(ClearCart()); // Clear the cart after placing the order
                            }}>
                                Place Order
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </>
    );
}

export default Home;
