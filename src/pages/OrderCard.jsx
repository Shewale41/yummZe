import { useDispatch } from "react-redux";
import { DecrementQty, IncrementQty, RemoveItem } from "../redux/cartSlice";
import { IoTrashOutline } from "react-icons/io5";
import {toast} from 'react-toastify';

function OrderCard({ price, name, id, image, qty }) {
    const dispatch = useDispatch();

    return (
        <div className="w-full h-[120px] shadow-md rounded-md overflow-hidden flex">
            <div className="h-full w-[60%] flex gap-5">
                <div className="w-[60%] h-full overflow-hidden p-2 rounded-xl object-cover">
                    <img src={image} alt="" className="object-cover w-full h-full rounded-xl" />
                </div>
                <div className="w-[40%] flex flex-col gap-5">
                    <div className="text-gray-400 font-bold text-lg">{name}</div>
                    <div className="w-[110px] h-[50px] bg-slate-400 flex rounded-md border-2 border-green-400 shadow-md overflow-hidden text-green-400 text-xl font-semibold">
                        <button className="w-[30%] h-full bg-white flex justify-center items-center cursor-pointer hover:bg-green-200" onClick={()=>dispatch(DecrementQty(id))}>-</button>
                        <span className="w-[40%] h-full bg-slate-300 flex justify-center items-center">{qty}</span>
                        <button className="w-[30%] h-full bg-white flex justify-center items-center cursor-pointer hover:bg-green-200" onClick={()=>dispatch(IncrementQty(id))}>+</button>
                    </div>
                </div>
            </div>
            <div className="w-[40%] flex flex-col justify-start items-end gap-6 p-4">
                <span className="text-green-400 text-xl font-semibold">Rs {price}/-</span>
                <IoTrashOutline
                    className="w-[30px] h-[30px] text-red-500 cursor-pointer"
                    onClick={() => {dispatch(RemoveItem(id))
                        //he nantar add karu
                        // toast.error(`${name} removed`)
                    }}
                />
            </div>
        </div>
    );
}

export default OrderCard;