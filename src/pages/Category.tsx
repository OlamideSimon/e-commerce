import { collection, onSnapshot, query, where } from "@firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductCards from "../component/ProductCards"
import { db } from "../firebase"
import image1 from '../images/men1.png'
// import image2 from '../images/women.png'

function Category() {
  const { category } = useParams()
  const [products, setProducts] = useState<any>([])
  const col = category?.toLowerCase() === 'shoes' ? 'categories': 'gender'
  const fun = col === 'gender' ? '==': 'array-contains'

  useEffect(() => 
    onSnapshot(
      query(
        collection(db, 'products'),
        where(col, fun, category),
      ), (snapshot) => {
        setProducts(snapshot.docs)
      }
    )
  , [category, col, fun])

  return (
    <div className="space-y-10">
      <div className="p-2 bg-gradient-to-r from-sky-500 to-violet-600 relative">
        <img src={image1} alt='' className="opacity-80 w-full" />
        <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white uppercase text-[18px]">
          {category}'s Category
        </p>
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
        {/* <ProductCards /> */}
      </div>
    </div>
  )
}

export default Category