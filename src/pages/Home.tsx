import React, { useEffect, useState } from 'react'
import image1 from "../images/test.svg";
import { Button } from "@mui/material";
import ProductCards from "../component/ProductCards";
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

function Home() {
  const [products, setProducts] = useState<any>([])

    useEffect(() => 
      onSnapshot(
        query(
          collection(db, 'products'),
          orderBy('timestamp'),
        ), (snapshot) => {
          setProducts(snapshot.docs)
        }
      )
    , [])

  return (
    <>
      <div className="sm:flex pt-20 space-y-4 sm:space-y-0 p-4 md:pl-24 justify-evenly">
        <div className="sm:w-1/2 space-y-6">
          <div className="space-y-3">
            <p className="text-slate-300 uppercase italic text-sm">No.1 E-commerce store</p>
            <p className="text-white text-5xl w-4/6 capitalize">The value of the shopping world.</p>
          </div>
          <div className="w-5/6 text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Quam tenetur, 
              consequatur aspernatur necessitatibus
              explicabo perspiciatis similique dignissimos 
              ex, sapiente quas, rerum possimus commodi 
              sint debitis a quae? Placeat, atque dicta?
            </p>
          </div>
          <div className="space-x-5">
            <Button variant='contained' sx={{backgroundColor: 'white', color: '#04619f'}}>Shop Now</Button>
            <Button variant='contained' sx={{backgroundColor: '#36454f'}}>Know about us</Button>
          </div>
        </div>
        <div className="sm:w-1/2">
          <img src={image1} draggable={false} width={500} alt='' className='shrink' />
        </div>
      </div>
      <div>
        <div className="flex p-10 justify-center text-[#dc143c] uppercase">
          <p className="border-b-[#dc143c] border-b-2 underline underline-offset-4">Our Latest Products</p>
        </div>
        <div className="sm:p-2 grid md:grid-cols-2 gap-3">
          {products.map((product: any) => (
            <ProductCards 
              key={product.id}
              img={product.data().image}
              details={product.data().details}
              description={product.data().description}
              gender={product.data().gender}
              price={product.data().price}
              title={product.data().title}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
