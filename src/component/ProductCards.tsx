import React from 'react'
import { useState } from "react";
import { toast } from 'react-toastify';
import { Products } from '../utils/interface';
// import CartIcon from "@mui/icons-material/ShoppingCart";

function ProductCards({img, details, description, gender, price, title}: Products) {
  const [activeTab, setActiveTab] = useState('tab1')
  const [showMore, setShowMore] = useState(false);

  const setTab1 = () => {
    setActiveTab('tab1')
  }

  const setTab2 = () => {
    setActiveTab('tab2')
  }

  const addToCart = () => {
    toast.info('Added to cart')
  }

  return (
    <div className="sm:flex max-w-5/6 shadow-md shadow-white">
      <img src={img} alt='' className="sm:w-1/2 bg-white" draggable={false} />
      <div className={showMore && activeTab === 'tab1'? "sm:w-1/2 h-fit px-5 text-white bg-[#36454f] py-10 space-y-5": "sm:w-1/2 h-96 px-5 text-white bg-[#36454f] py-10 space-y-5"}>
        <p className="text-2xl uppercase font-mono font-semibold">{title}</p>
        <div className="text-sm flex uppercase border-b-white border-b-2 space-x-3">
          <p 
            className={activeTab === 'tab1'? 'border-b-4': 'cursor-pointer'}
            onClick={setTab1}
          >
            description
          </p>
          <p 
            className={activeTab === 'tab2'? 'border-b-4': 'cursor-pointer'}
            onClick={setTab2}
          >
            details
          </p>
        </div>
        <div className="">
          {activeTab === 'tab1' && (
            <div className="space-y-3">
              <p className="text-xs  ">
                {showMore ? description: description.substring(0, 300)}
                {showMore && description.length > 300 ? (
                  <span className='text-blue-500 cursor-pointer' onClick={() => setShowMore(false)}>Show Less</span>
                ): (
                  <span className='text-blue-500 cursor-pointer' onClick={() => setShowMore(true)}>Show more</span>
                )}
              </p>
              <div>
                <p className="font-semibold text-sm">Total Price</p>
                <p className='text-lg text-slate-300'>${price}</p>
              </div>
              <div>
                <p 
                  className="snipcart-add-item cursor-pointer hover:bg-slate-500 flex justify-center p-2 border-2 rounded-r-full rounded-l-full"
                  data-item-id='1'
                  data-item-price={1399}
                  data-item-name='Shoes'
                  data-item-url='/'
                  onClick={addToCart}
                >
                  Add to cart
                </p>
              </div>
            </div>
          )}
          {activeTab === 'tab2' && (
            <div className='space-y-3'>
              <p className='text-xs'>
                Marilyn Monroe once said, “Give a girl right shoes and 
                she will conquer the world”. Certainly, the right pair 
                of shoes can make you feel amazing and heels will add 
                a statement to any look. These grey pointed heels shoes 
                will make you look bewitching and show off your sense of 
                adventure. They will make you look taller and give you 
                an attractive look that is both feminine and beautiful. 
                No woman’s wardrobe is quite complete without a pair of 
                daring and elegant pointy-toed heels such as these. And 
                with the classic style of these heels, you’re sure to 
                wear these heels for years to come
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
