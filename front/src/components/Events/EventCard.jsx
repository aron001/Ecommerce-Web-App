import React from "react";
import styles from "../../styles/styles";


const EventCard = () => {
  
  return (
    <div
      className={`w-full block bg-white rounded-lg:flex p-2  flex
      `} 
    >
      <div className="w-full lg:-w[50%] m-auto">
        <img src="https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/256</h2>
        <p>awesrdftgyhkjqwertyuiopqwertyuiasdfghjkqwertyui
            asdfghjkqwertyuioawesrdftgyhkjqwertyuiopqwertyuiasdfghjkqwertyui
            asdfghjkqwertyuioawesrdftgyhkjqwertyuiopqwertyuiasdfghjkqwertyui
            asdfghjkqwertyuioawesrdftgyhkjqwertyuiopqwertyuiasdfghjkqwertyui
            asdfghjkqwertyuio awesrdftgyhkjqwertyuiopqwertyuiasdfghjkqwertyui
            asdfghjkqwertyuioawesrdftgyhkjqwertyuiopqwertyuiasdfghjkqwertyui
            asdfghjkqwertyuioawesrdftgyhkjqwertyuiopqwertyuiasdfghjkqwertyui
            asdfghjkqwertyuioawesrdftgyhkjqwertyuiopqwertyuiasdfghjkqwertyui
            awesrdftgyhkjqwertyuiopqwertyuiasdfghjkqwertyui

        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              1200 $
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              1000$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
             sold
          </span>
        </div>
        <br />
        <div className="flex items-center">
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          <div className={`${styles.button} text-[#fff] ml-5`} >Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;