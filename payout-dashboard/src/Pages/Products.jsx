

import Navbar from "../Components/Navbar";
import ProductsSidebar from "../Components/ProductsSidebar";

import style from "../Styles/products.module.css"



function Products() {
  return (
    <div className={style.products}>
      <div className={style.sidebar}>
       <ProductsSidebar/>
      </div>
      <div className={style.mainbox}>
        <Navbar/>
      </div>
    </div>
  );
}
export default Products;
