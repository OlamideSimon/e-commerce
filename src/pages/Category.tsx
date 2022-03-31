import { useParams } from "react-router-dom"
import image1 from '../images/men1.png'
// import image2 from '../images/women.png'

function Category() {
    const { category } = useParams()

  return (
    <>
      <div className="p-2 bg-violet-600 relative">
        <img src={image1} alt='' className="opacity-[0.50] w-full" />
        <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white uppercase text-[30px]">
          {category}'s Category
        </p>
      </div>
      <div>

      </div>
    </>
  )
}

export default Category