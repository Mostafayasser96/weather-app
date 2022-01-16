import React, { Component } from 'react';






 
const Parent = () => {
    
    const Card = () => {
        return(
            <div className='card'>
               <div className='date-time'>
                   <span className='time'></span>
                   <span className='date'></span>
               </div>
               <div className='weather-i'>
                   <i >

                   </i>
               </div>
               <div className='temperature'>

               </div>
               <div className='weather-state'>

               </div>
               <div className='white-line'></div>
               <div className='city-country'>
                   <span className='city'></span>
                   <span className='country'></span>
               </div>
            </div>
        )
    }
    return(
       <div className='parent'>
          <Card />
       </div>
    )
}

export default Parent;