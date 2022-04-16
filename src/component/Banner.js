import React from 'react'
import book from '../images/book.jpg'; 
import headphones from '../images/audio-headphones.png'; 
import foldedNewspaper from '../images/folded-newspaper.png'; 
import cart from '../images/cart.png'; 
import bookmark from '../images/bookmark.png'; 

const Banner = () => {
  return (
    <div>
     <div className='container'>
         <div className='banner'>
             <div className='bannerImg'>
             <img src={book} alt="book" />

             </div>
             <div className='bannerContent'> 
               <h1>Astrophysics for People in a Hurry Summary</h1>  
               <h4>Key Insights & Analysis</h4>
               <h5>Kelly Brogan,MD with Kristin Loberg</h5> 
               <div className='box'>
               <div className='flex'>
               <span>
                 <img src={foldedNewspaper} alt="folded-newspaper" />
                 </span>
                 <h4>18 min read</h4>
               </div>
               <div className='flex'>
                 <span>
                 <img src={headphones} alt="headphones" />
                 </span>
                 <h4>14 min listen</h4>
               </div>
               <div className='flex'>
               <span className=''>
                 <img src={bookmark} alt="bookmark" />
                 </span>
                 <h4>Add to Library</h4>
               </div> 
               <div className='flex'>
               <span>
                 <img src={cart} alt="cart" />
                 </span>
                 <h4>Buy Book</h4>
               </div> 
             

             </div>
             <div className='lg:flex mt-[40px]'>
                 <button className='bannerBtn mb-[10px] lg:mb-[0]'>Business & Finance</button>
                 <button className='bannerBtn' >Business & Finance</button>
               </div>
             </div>
     

         </div>

     </div>
    </div>
  )
}

export default Banner