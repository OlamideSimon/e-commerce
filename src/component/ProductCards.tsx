// import { Button } from "@mui/material";
import sample from "../images/shoe.png";
// import CartIcon from "@mui/icons-material/ShoppingCart";
// import BookIcon from "@mui/icons-material/Book";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";

function ProductCards() {
  return (
    <div className="w-56">
      <div className="shadow-lg shadow-slate-500">
        <div className="">
          <img src={sample} alt="" className="" />
        </div>
        <div className="border-2 p-5 space-y-5 text-left">
          <div className="text-center space-x-1 cursor-pointer">
            <KeyboardArrowUp />
            <p>ProductCards</p>
            <p className="text-slate-400">$23</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
