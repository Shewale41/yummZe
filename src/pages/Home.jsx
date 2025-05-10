import Nav from './Nav.jsx';
import Categories from '../Category.jsx';
import Card from './Card.jsx';
import {food_items} from '../food.js';
import {React,useState} from 'react';
import { RxCross1 } from "react-icons/rx";

function Home(){

    const [catg,setCatg] = useState(food_items);
    const [searchValue, setSearchValue] = useState("");
    const [showCart,setShowCart] = useState(false);

    function filterCatg(category){
        if(category=='All'){ 
            setCatg(food_items);
        }else{
            const newList= food_items.filter((item)=>(
                item.food_category===category));
            setCatg(newList);
        }
    }
    const [search,setSearch] = useState();

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

    return(
        <>
        <div className='bg-slate-200 w-full min-h-screen '>
            <Nav searchValue={searchValue}
            onSearchChange={handleSearchChange}
            showCart={showCart}
            setShowCart={setShowCart}
            />
            {!search?<div className='flex  px-8 gap-7 flex-wrap justify-center
            items-center '>
            {
                Categories.map((element,index)=>{                 
                   return <div key={index} 
                   onClick={()=>filterCatg(element.name)} 
                   className='w-[140px] h-[140px] bg-white flex flex-col 
                   item-start justify-start gap-2 p-2 rounded-l 
                   text-[21px] cursor-pointer font-semibold text-gray-500 shadow-md 
                   hover:bg-green-200  transition-all duration-300 ' >
                        {element.image}
                        {element.name}
                        </div>
                    })
            }
        </div> : null}
            
        <div className='w-full flex flex-wrap items-center 
        justify-center gap-5 px-4 pt-6 pb-6' >
            {
                catg.map((item,index)=>(
                    <Card key={item.id} name={item.food_name} image={item.food_image}
                    price={item.price} id={item.id} 
                    type={item.food_type} />
                ))
            }
        </div>
        <div className={`w-[40vw] h-full bg-white absolute right-0 top-0 
        ${showCart ? "translate-x-0" : "translate-x-full"}`}>
            <header className='flex justify-between items-center p-4 text-green-400
            font-semibold text-2xl'>
                <span>Order Items</span>
                <RxCross1 className='font-bold text-2xl cursor-pointer
                hover:text-gray-500 transition-all ' onClick={()=>setShowCart(false)}/>
            </header>
        </div>
        </div>
        
        </>
    );
}

export default Home;