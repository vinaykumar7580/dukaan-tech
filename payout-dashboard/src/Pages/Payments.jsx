


import PaymentsSidebar from "../Components/PaymentsSidebar";


import style from "../Styles/payments.module.css"



function Payments() {
  return (
    <div className={style.payments}>
      <div className={style.sidebar}>
       <PaymentsSidebar/>
      </div>
      <div className={style.mainbox}>
        
      </div>
    </div>
  );
}
export default Payments;
