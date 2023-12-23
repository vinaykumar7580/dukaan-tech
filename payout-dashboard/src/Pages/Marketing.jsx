

import MarketingSidebar from "../Components/MarketingSidebar";



import style from "../Styles/marketing.module.css"



function Marketing() {
  return (
    <div className={style.marketing}>
      <div className={style.sidebar}>
       <MarketingSidebar/>
      </div>
      <div className={style.mainbox}>
       
      </div>
    </div>
  );
}
export default Marketing;
