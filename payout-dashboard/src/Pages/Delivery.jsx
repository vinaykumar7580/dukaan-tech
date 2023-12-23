
import DeliverySidebar from "../Components/DeliverySidebar";


import style from "../Styles/delivery.module.css"



function Delivery() {
  return (
    <div className={style.delivery}>
      <div className={style.sidebar}>
       <DeliverySidebar/>
      </div>
      <div className={style.mainbox}>
     
      </div>
    </div>
  );
}
export default Delivery;
