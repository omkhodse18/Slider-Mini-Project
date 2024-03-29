import React, { useState } from 'react'
import Card from './Card';
import { IoMdArrowDropleftCircle , IoMdArrowDroprightCircle } from "react-icons/io";


function Testimonials(props) {
    let reviews = props.reviews;
    let darkMode = props.darkMode;

    const [index, setIndex] = useState(0);

    function leftClickHandler(){
        if(index === 0){
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightClickHandler(){
        if(index === reviews.length-1){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    // function supriseClickHandler(){
    //     let newIndex = Math.floor(Math.random() * reviews.length);
    //     setIndex(newIndex);
    // }

    return (
        <div className={`w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
        mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md 
        ${(darkMode) ? 'bg-gray-800 text-white' : 'bg-white'}`}>
            
            
            <div>
                <Card review={reviews[index]} darkMode={darkMode}/>
            </div>

            <div className={`flex text-[2.5rem] mt-10 gap-3 font-bold mx-auto 
                ${(darkMode) ? 'text-yellow-400 ' : 'text-violet-400'}`}>

                <button className={`cursor-pointer 
                ${(darkMode) ? 'hover:text-yellow-500' : 'hover:text-violet-500'}`} onClick={leftClickHandler}>
                    <IoMdArrowDropleftCircle />
                </button>

                <button className={`cursor-pointer 
                ${(darkMode) ? 'hover:text-yellow-500' : 'hover:text-violet-500'}`} onClick={rightClickHandler}>
                    <IoMdArrowDroprightCircle />
                </button>

            </div>

            {/* <div className='mt-6'>
                <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
                cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg' 
                onClick={supriseClickHandler}>
                    Surprise Me
                </button>
            </div> */}


        </div>
    )
}

export default Testimonials
