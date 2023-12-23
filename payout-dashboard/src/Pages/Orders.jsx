

import OrdersSidebar from "../Components/OrdersSidebar";
import style from "../Styles/orders.module.css"



function Orders() {
  return (
    <div className={style.orders}>
      <div className={style.sidebar}>
       <OrdersSidebar/>
      </div>
      <div className={style.mainbox}>
        
      </div>
    </div>
  );
}
export default Orders;
