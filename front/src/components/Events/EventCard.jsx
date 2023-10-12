import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";

const EventCard = ({active}) => {
  
  return (
    <div
      className={`w-full block bg-white rounded-lg ${active? "unset" : "mb-12"} lg:flex p-2
      `} 
    >
      <div className="w-full lg:-w[50%] m-auto">
        <img src="https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/256</h2>
        <p>

Lorem ipsum dolor sit amet. Vel quas numquam eos reiciendis quas sit quia nobis. Quo explicabo tempore et eaque itaque a impedit ratione ut velit ducimus quo voluptate dolorum aut enim praesentium.

Ab soluta sint sed optio dolore in fugit tempore aut temporibus porro rem maiores voluptatibus qui voluptas ipsam. Est quisquam unde aut illum saepe quo quis consequatur rem voluptate molestias hic dolorem asperiores rem obcaecati nemo est sunt perferendis. Eum labore cumque ut omnis omnis sit voluptas earum?

Eos quos beatae sit possimus necessitatibus sit molestiae Quis qui obcaecati dolorem ut laboriosam recusandae sit atque nemo et voluptatem cupiditate. Est amet laborum ut facilis dolor et facere reiciendis. Id alias reiciendis id dolorum laboriosam non labore laborum aut deserunt pariatur cum quasi perferendis et sequi blanditiis ea recusandae esse.

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
        <CountDown />
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