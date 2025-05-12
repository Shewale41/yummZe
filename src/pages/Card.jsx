import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import {toast} from 'react-toastify';

function Card({name,image,id,price,type}){
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart);
    return(
        <>
            <div className='h-[400px] w-[300px] bg-white p-4 
            flex flex-col rounded-md gap-2 shadow-lg hover:border-2 border-green-300' >
                <div className='h-[60%] w-full  overflow-hidden 
                rounded-lg ' >
                    <img className='object-cover w-full h-full' src={image} alt=""></img>
                </div>
                <div className='text-2xl font-semibold  '>
                    <h1 className='' >{name}</h1>
                </div>
                <div className='flex justify-between items-center text-lg 
                text-green-500 font-semibold '>
                    <div>{price}/-</div>
                    <div className='flex gap-1 justify-center items-center 
                    text-lg' > 
                    { type==='veg'? <LuLeafyGreen /> : <GiChickenOven /> }<span>{type}</span></div>
                </div>
                <div>
                    <button className='flex justify-center items-center 
                    bg-green-400 w-full h-full p-3 text-lg font-semibold
                    rounded-md text-white hover:bg-green-600 cursor-pointer
                    transition-all  ' 
                    onClick={() => {dispatch(AddItem({
                        id: id,
                        name: name,
                        price: price,
                        image: image,
                        qty: 1
                    }));
                    toast.success(`${name} added`)
                }}
                    >Add to Dish</button>
                </div>
            </div>
        </>
    );
}

export default Card;