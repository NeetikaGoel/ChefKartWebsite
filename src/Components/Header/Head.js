import React from'react';
import { RiBowlFill } from "react-icons/ri";
const NotificationBanner = () => {
  return (
    <div className="bg-red-950 text-white py-3 px-5 flex items-center justify-center">
     <RiBowlFill className="text-rose-200 mr-2 text-2xl" />
     <span className="font-bold text-1xl">
          Now get a Cook for 1 time in Delhi, Gurgaon & Bangalore!!!
     </span>
      
    </div>
  )
}

export default NotificationBanner
