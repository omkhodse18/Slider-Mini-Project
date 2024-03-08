import React from 'react'
import { FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

function Card(props) {
    let review = props.review;
    let darkMode = props.darkMode;

    return (
        <div className='flex flex-col md:relative'>
            {/* <div className='absolute top-[-4rem] z-[10] mx-auto'>
                <img src={review.image} className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"></img>

                <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]'></div>
            </div> */}

            <div className='text-center mt-7'>
                <p className={`${(darkMode) ? 'text-white' : 'text-black'} tracking-wider font-bold text-2xl capitalize`}>{review.name}</p>
                <p className={`${(darkMode) ? 'text-yellow-400 ' : 'text-violet-800'} uppercase text-sm`}>{review.job}</p>
            </div>

            <div className={`text-violet-400 mx-auto mt-5`}>
                <FaQuoteLeft />
            </div>

            <div className={`text-center mt-4  ${(darkMode) ? 'text-slate-200 ': 'text-slate-900'}`}>
                {review.text}
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteRight />
            </div>
        </div>
    )
}

export default Card
