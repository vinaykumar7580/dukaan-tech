import HomeSidebar from "../Components/HomeSidebar";
import Navbar from "../Components/Navbar";
import style from "../Styles/home.module.css"


function Home() {
  return (
    <div className={style.home}>
      <div className={style.sidebar}>
        <HomeSidebar/>
      </div>
      <div className={style.mainbox}>
        <Navbar/>
      </div>
    </div>
  );
}
export default Home;
