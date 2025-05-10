
import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { GiMeal } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { PiHamburgerBold } from "react-icons/pi";

const Categories =[
    {
        id:1,
        name:"All",
        image:<TiThSmallOutline className='text-green-400 
        h-[60px] w-[60px]' />
    },
    {
        id:2,
        name:"breakfast",
        image:<MdOutlineFreeBreakfast className='text-green-400 
        h-[60px] w-[60px]'/>
    },
    {
        id:3,
        name:"soups",
        image:<LuSoup className='text-green-400 
        h-[60px] w-[60px]'/>
    },
    {
        id:4,
        name:"pasta",
        image:<CiBowlNoodles className='text-green-400 
        h-[60px] w-[60px]'/>
    },
    {
        id:5,
        name:"main_course",
        image:<GiMeal className='text-green-400 
        h-[60px] w-[60px]'/>
    },
    {
        id:6,
        name:"pizza",
        image:<GiFullPizza className='text-green-400 
        h-[60px] w-[60px] '/>
    },
    {
        id:7,
        name:"burger",
        image: <PiHamburgerBold className='text-green-400 
        h-[60px] w-[60px] '/>
    }
];

export default Categories;