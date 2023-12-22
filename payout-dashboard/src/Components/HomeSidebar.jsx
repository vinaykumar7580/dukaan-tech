import { useNavigate } from "react-router-dom";
import style from "../Styles/home.module.css";

function HomeSidebar() {
  const navigate = useNavigate();

  return (
    <div>
      <div className={style.logobox}>
        <div className={style.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
          >
            <path
              opacity="0.3"
              d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z"
              fill="white"
            />
            <path
              d="M29.2809 9.97656H12.7203C11.1241 9.97656 9.77734 11.2735 9.77734 12.9196V29.131C9.77734 30.7272 11.0743 32.0241 12.7203 32.0241H29.2809C30.8771 32.0241 32.174 30.7272 32.174 29.131V12.8697C32.174 11.2735 30.8771 9.97656 29.2809 9.97656ZM21.0006 22.8958C16.9104 22.8958 13.5184 19.7533 13.1693 15.663C13.1194 14.7652 13.7678 14.0169 14.6158 13.9671C15.4638 13.9172 16.2619 14.5656 16.3118 15.4136C16.5113 17.9576 18.7061 19.9029 21.2999 19.7034C23.5944 19.5538 25.4401 17.7082 25.5897 15.4136C25.6396 14.5158 26.3878 13.8673 27.2857 13.9172C27.7346 13.9671 28.1336 14.1666 28.4329 14.4659C28.7322 14.7652 28.832 15.2141 28.832 15.6131C28.4828 19.7533 25.0909 22.8958 21.0006 22.8958Z"
              fill="white"
            />
          </svg>
        </div>
        <div className={style.name}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="99"
            height="23"
            viewBox="0 0 99 23"
            fill="none"
          >
            <path
              d="M17.1616 2.32579V21.4303C17.2136 21.7795 16.9536 22.0787 16.5897 22.1286C16.5377 22.1286 16.4857 22.1286 16.4337 22.1286H13.9381C13.5741 22.1785 13.2622 21.9291 13.2102 21.5799C13.2102 21.5301 13.2102 21.4802 13.2102 21.4303V20.4327C12.1183 21.7795 10.5066 22.5776 8.27088 22.5776C4.21546 22.5776 0.835938 19.2355 0.835938 14.846C0.835938 10.4564 4.21546 7.11438 8.27088 7.11438C10.5066 7.11438 12.1183 7.91248 13.2102 9.25927V2.32579C13.1582 1.97662 13.4181 1.67733 13.7821 1.62745C13.8341 1.62745 13.8861 1.62745 13.9381 1.62745H16.4337C16.7977 1.57757 17.1096 1.82697 17.1616 2.17614C17.1616 2.22602 17.1616 2.27591 17.1616 2.32579ZM13.2102 14.7961C13.3142 12.5514 11.4424 10.6559 9.10276 10.6061C6.76309 10.5063 4.78737 12.302 4.73538 14.5467C4.73538 14.6464 4.73538 14.7462 4.73538 14.846C4.6314 17.0906 6.50313 18.9861 8.8428 19.036C11.1825 19.1358 13.1582 17.34 13.2102 15.0954C13.2102 14.9956 13.2102 14.8959 13.2102 14.7961Z"
              fill="white"
            />
            <path
              d="M31.459 7.46339C31.8229 7.41351 32.1349 7.66291 32.1869 8.01208C32.1869 8.06196 32.1869 8.11184 32.1869 8.16173V21.4301C32.2389 21.7793 31.9789 22.0786 31.615 22.1285C31.563 22.1285 31.511 22.1285 31.459 22.1285H28.9634C28.5994 22.1784 28.2874 21.9289 28.2354 21.5798C28.2354 21.5299 28.2354 21.48 28.2354 21.4301V20.632C27.4036 21.8791 25.9478 22.5275 24.076 22.5275C21.2164 22.5275 19.0847 20.4325 19.0847 16.8411V8.16173C19.0328 7.81256 19.2927 7.51327 19.6567 7.46339C19.7087 7.46339 19.7607 7.46339 19.8126 7.46339H22.3083C22.6722 7.41351 22.9842 7.66291 23.0362 8.01208C23.0362 8.06196 23.0362 8.11184 23.0362 8.16173V16.5418C23.0362 18.2377 24.076 19.0358 25.4798 19.0358C27.0396 19.0358 28.2354 18.1879 28.2354 15.9432V8.16173C28.1835 7.81256 28.4434 7.51327 28.8074 7.46339C28.8594 7.46339 28.9114 7.46339 28.9634 7.46339H31.459Z"
              fill="white"
            />
            <path
              d="M47.2644 22.1286H44.3528C43.9888 22.1286 43.6769 21.979 43.4689 21.7296L38.4776 15.5443V21.4303C38.5296 21.7795 38.2696 22.0788 37.9057 22.1286C37.8537 22.1286 37.8017 22.1286 37.7497 22.1286H35.2541C34.8901 22.1785 34.5781 21.9291 34.5262 21.5799C34.5262 21.5301 34.5262 21.4802 34.5262 21.4303V2.32579C34.4742 1.97662 34.7341 1.67733 35.0981 1.62745C35.1501 1.62745 35.2021 1.62745 35.2541 1.62745H37.7497C38.1136 1.57757 38.4256 1.82697 38.4776 2.17614C38.4776 2.22602 38.4776 2.27591 38.4776 2.32579V13.9481L43.2089 7.91248C43.4169 7.6132 43.7289 7.46355 44.0928 7.46355H47.0044C47.5763 7.46355 47.7843 7.8626 47.4203 8.31153L42.2731 14.7462L47.6803 21.3305C48.0962 21.7795 47.8883 22.1286 47.2644 22.1286Z"
              fill="white"
            />
            <path
              d="M55.376 7.06445C58.7555 7.06445 61.6151 9.00982 61.6151 12.8008V21.4303C61.6671 21.7794 61.4071 22.0787 61.0431 22.1286C60.9911 22.1286 60.9392 22.1286 60.8872 22.1286H58.4955C58.1316 22.1785 57.8196 21.9291 57.7676 21.5799C57.7676 21.53 57.7676 21.4801 57.7676 21.4303V20.8816C56.8837 21.9291 55.5839 22.5276 53.6082 22.5276C50.9046 22.5276 48.4609 20.9813 48.4609 17.9386C48.4609 14.8958 50.9046 13.3495 53.6082 13.3495C55.116 13.2497 56.6238 13.7485 57.7676 14.6464V13.1001C57.7676 11.3542 56.8317 10.6559 55.376 10.6559C54.2321 10.6559 53.3482 11.1048 53.0883 11.9029C52.9323 12.302 52.7763 12.5015 52.3604 12.5015H49.9167C49.5528 12.5514 49.2408 12.302 49.1888 11.9528C49.1888 11.9029 49.1888 11.8531 49.1888 11.7533C49.6048 8.76041 52.3084 7.11433 55.376 7.06445ZM57.7676 17.9386C57.7676 16.7913 56.6758 16.093 54.96 16.093C53.2443 16.093 52.4124 16.8412 52.4124 17.9386C52.4124 19.036 53.2443 19.7842 54.96 19.7842C56.6758 19.7842 57.7676 18.9861 57.7676 17.9386Z"
              fill="white"
            />
            <path
              d="M70.3486 7.06445C73.7281 7.06445 76.5877 9.00982 76.5877 12.8008V21.4303C76.6397 21.7794 76.3797 22.0787 76.0158 22.1286C75.9638 22.1286 75.9118 22.1286 75.8598 22.1286H73.4681C73.1042 22.1785 72.7922 21.9291 72.7402 21.5799C72.7402 21.53 72.7402 21.4801 72.7402 21.4303V20.8816C71.8564 21.9291 70.5566 22.5276 68.5808 22.5276C65.8772 22.5276 63.4336 20.9813 63.4336 17.9386C63.4336 14.8958 65.8772 13.3495 68.5808 13.3495C70.0886 13.2497 71.5964 13.7485 72.7402 14.6464V13.1001C72.7402 11.3542 71.8044 10.6559 70.3486 10.6559C69.2047 10.6559 68.3209 11.1048 68.0609 11.9029C67.9049 12.302 67.749 12.5015 67.333 12.5015H64.8894C64.5254 12.5514 64.2135 12.302 64.1615 11.9528C64.1615 11.9029 64.1615 11.8531 64.1615 11.7533C64.5774 8.76041 67.229 7.11433 70.3486 7.06445ZM72.6882 17.9386C72.6882 16.7913 71.5964 16.093 69.8807 16.093C68.1649 16.093 67.333 16.8412 67.333 17.9386C67.333 19.036 68.1649 19.7842 69.8807 19.7842C71.5964 19.7842 72.6882 18.9861 72.6882 17.9386Z"
              fill="white"
            />
            <path
              d="M86.6773 7.06445C89.5369 7.06445 91.6166 9.15946 91.6166 12.7509V21.4302C91.6686 21.7794 91.4086 22.0787 91.0447 22.1286C90.9927 22.1286 90.9407 22.1286 90.8887 22.1286H88.393C88.0291 22.1785 87.7171 21.9291 87.6651 21.5799C87.6651 21.53 87.6651 21.4801 87.6651 21.4302V13.0502C87.6651 11.3542 86.6253 10.5561 85.2215 10.5561C83.6617 10.5561 82.4659 11.4041 82.4659 13.6488V21.4302C82.5179 21.7794 82.2579 22.0787 81.894 22.1286C81.842 22.1286 81.79 22.1286 81.738 22.1286H79.2423C78.8784 22.1785 78.5664 21.9291 78.5144 21.5799C78.5144 21.53 78.5144 21.4801 78.5144 21.4302V8.16184C78.4624 7.81267 78.7224 7.51338 79.0864 7.4635C79.1383 7.4635 79.1903 7.4635 79.2423 7.4635H81.738C82.1019 7.41362 82.4139 7.66303 82.4659 8.0122C82.4659 8.06208 82.4659 8.11196 82.4659 8.16184V8.95994C83.3498 7.76279 84.7535 7.11433 86.6773 7.06445Z"
              fill="white"
            />
            <path
              d="M95.2017 0.180664C93.07 0.180664 91.4062 1.82674 91.4062 3.82199C91.4062 5.81724 93.122 7.46332 95.2017 7.46332C97.2814 7.46332 98.9972 5.81724 98.9972 3.82199C99.0491 1.77686 97.3334 0.180664 95.2017 0.180664ZM95.2017 0.729358C96.9695 0.729358 98.4252 2.12603 98.4252 3.82199C98.4252 5.51795 96.9695 6.91463 95.2017 6.91463C93.434 6.91463 91.9782 5.51795 91.9782 3.82199C91.9782 2.12603 93.434 0.729358 95.2017 0.729358ZM94.0579 2.12603V5.51795H94.6298V4.27092H95.4097L96.2416 5.51795H96.8135L95.9816 4.22104C96.0856 4.22104 96.1376 4.17116 96.2416 4.17116C96.3975 4.12128 96.5535 4.02152 96.6575 3.92176C96.7615 3.82199 96.8135 3.72223 96.8655 3.57259C96.9175 3.47282 96.9175 3.32318 96.9175 3.22342C96.9175 3.12366 96.9175 2.97401 96.8655 2.87425C96.8135 2.72461 96.7615 2.62484 96.6575 2.52508C96.5535 2.42532 96.3975 2.32556 96.2416 2.27568C96.0336 2.17591 95.7736 2.12603 95.5656 2.17591L94.0579 2.12603ZM94.6298 2.57496H95.4097C95.5137 2.57496 95.6177 2.57496 95.7216 2.57496C95.8256 2.57496 95.9296 2.62484 96.0336 2.67472C96.1376 2.72461 96.1896 2.77449 96.2416 2.82437C96.2936 2.92413 96.3455 3.02389 96.3455 3.12366C96.3455 3.22342 96.3455 3.32318 96.2416 3.42294C96.1896 3.52271 96.1376 3.57259 96.0336 3.62247L95.7216 3.72223C95.6177 3.72223 95.5137 3.77211 95.4097 3.72223H94.6298V2.57496Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className={style.homelink}>
        <div className={style.homelinkbox} onClick={() => navigate("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.8955 6.80121L10.9316 1.53481C10.6779 1.34973 10.372 1.25 10.058 1.25C9.74398 1.25 9.43808 1.34973 9.1844 1.53481L2.08802 6.80949C1.90491 6.94397 1.7562 7.11984 1.65402 7.32275C1.55185 7.52566 1.4991 7.74985 1.5001 7.97703V17.276C1.49672 17.5709 1.58338 17.8598 1.74851 18.1041C1.80011 18.1831 1.8613 18.2554 1.93068 18.3194C2.06414 18.4564 2.22384 18.5652 2.40025 18.6392C2.57666 18.7131 2.76617 18.7508 2.95746 18.75H6.85758C7.02783 18.7512 7.19656 18.7179 7.35357 18.6521C7.51057 18.5862 7.65259 18.4892 7.77102 18.3669C7.88946 18.2446 7.98185 18.0996 8.04261 17.9405C8.10336 17.7815 8.13122 17.6118 8.12449 17.4416L8.07481 12.995C8.077 12.7483 8.17655 12.5124 8.35179 12.3387C8.52703 12.165 8.76377 12.0676 9.01051 12.0676H10.9316C11.1775 12.0676 11.4134 12.1653 11.5874 12.3392C11.7613 12.5132 11.859 12.7491 11.859 12.995V17.4416C11.859 17.7755 11.9916 18.0956 12.2276 18.3316C12.4637 18.5677 12.7838 18.7003 13.1176 18.7003H17.0674C17.454 18.7003 17.8246 18.5467 18.0979 18.2734C18.3713 18.0001 18.5248 17.6294 18.5248 17.2429V7.96048C18.5191 7.73123 18.4591 7.50662 18.3497 7.30508C18.2403 7.10355 18.0846 6.93086 17.8955 6.80121Z"
              fill="white"
            />
          </svg>
          <span>Home</span>
        </div>
      </div>
      <div className={style.orderslink} onClick={() => navigate("/orders")}>
        <div className={style.orderslinkbox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g opacity="0.8">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.2962 1.98737C14.1109 1.19626 13.4048 0.625 12.5795 0.625H7.4189L7.28798 0.629913L7.15191 0.645423L7.01808 0.671421C6.22697 0.856753 5.65572 1.56287 5.65572 2.38819V2.60323H4.19356L4.04352 2.60717C2.70217 2.67794 1.61328 3.69145 1.61328 4.96848V17.0098L1.61772 17.1505C1.69723 18.4071 2.83466 19.375 4.19356 19.375H15.8048L15.9548 19.3711C17.2962 19.3003 18.3851 18.2868 18.3851 17.0098V4.96848L18.3806 4.82771C18.3011 3.57113 17.1637 2.60323 15.8048 2.60323H14.3426V2.38819L14.3377 2.25726L14.3222 2.12119L14.2962 1.98737ZM14.3426 3.89336V4.10837C14.3426 4.93369 13.7714 5.63981 12.9803 5.82514L12.8465 5.85114L12.7104 5.86665L12.5795 5.87156H7.4189C6.59359 5.87156 5.88747 5.3003 5.70214 4.5092L5.67614 4.37537L5.66063 4.2393L5.65572 4.10837V3.89336H4.19356C3.50806 3.89336 2.97009 4.33572 2.90917 4.86776L2.90342 4.96848V17.0098C2.90342 17.5516 3.40107 18.0259 4.06684 18.0798L4.19356 18.0849H15.8048C16.4903 18.0849 17.0283 17.6425 17.0892 17.1105L17.0949 17.0098V4.96848C17.0949 4.42661 16.5973 3.95238 15.9315 3.89846L15.8048 3.89336H14.3426ZM7.67666 1.61411H12.3217C12.7687 1.61411 13.1582 1.90084 13.2995 2.31864L13.3295 2.42573L13.3477 2.53612L13.3538 2.64625L13.3533 3.86708L13.3443 3.98931L13.323 4.10085L13.286 4.21899C13.1773 4.50363 12.9474 4.72443 12.6579 4.8251L12.5467 4.85711L12.4304 4.87652L12.3217 4.88245L7.65993 4.88191L7.5377 4.87291L7.42616 4.85165L7.30802 4.81468C7.02338 4.70593 6.80258 4.47604 6.7019 4.18656L6.66989 4.07533L6.65048 3.95905L6.64455 3.85031L6.6451 2.62948L6.6541 2.50725L6.67536 2.39571L6.71232 2.27757C6.82108 1.99293 7.05096 1.77213 7.34045 1.67146L7.45168 1.63945L7.56796 1.62004L7.67666 1.61411Z"
                fill="white"
              />
              <path
                d="M5.46211 10.5959C5.93733 10.5959 6.32258 10.2107 6.32258 9.73547C6.32258 9.26025 5.93733 8.875 5.46211 8.875C4.98688 8.875 4.60164 9.26025 4.60164 9.73547C4.60164 10.2107 4.98688 10.5959 5.46211 10.5959Z"
                fill="white"
              />
              <path
                d="M8.04355 8.9485C7.61153 8.9485 7.2613 9.29872 7.2613 9.73074C7.2613 10.1628 7.61153 10.513 8.04355 10.513H14.6144C15.0464 10.513 15.3967 10.1628 15.3967 9.73074C15.3967 9.29872 15.0464 8.9485 14.6144 8.9485H8.04355Z"
                fill="white"
              />
              <path
                d="M7.26134 14.1522C7.26134 13.7202 7.61156 13.3699 8.04358 13.3699H14.6144C15.0465 13.3699 15.3967 13.7202 15.3967 14.1522C15.3967 14.5842 15.0465 14.9344 14.6144 14.9344H8.04358C7.61156 14.9344 7.26134 14.5842 7.26134 14.1522Z"
                fill="white"
              />
              <path
                d="M5.46214 15.0174C5.93737 15.0174 6.32261 14.6321 6.32261 14.1569C6.32261 13.6817 5.93737 13.2964 5.46214 13.2964C4.98692 13.2964 4.60167 13.6817 4.60167 14.1569C4.60167 14.6321 4.98692 15.0174 5.46214 15.0174Z"
                fill="white"
              />
            </g>
          </svg>
          <span>Orders</span>
        </div>
      </div>
      <div className={style.deliverylink} onClick={() => navigate("/delivery")}>
        <div className={style.deliverylinkbox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g opacity="0.8">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.914062 3.125C0.914062 2.7453 1.22187 2.4375 1.60156 2.4375H13.0568C13.4365 2.4375 13.7443 2.7453 13.7443 3.125V13.0528C13.7443 13.4325 13.4365 13.7403 13.0568 13.7403H1.60156C1.22187 13.7403 0.914062 13.4325 0.914062 13.0528V3.125ZM2.28906 3.8125V12.3653H12.3693V3.8125H2.28906Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.3693 6.94343C12.3693 6.56373 12.6771 6.25593 13.0568 6.25593H16.1115C16.2938 6.25593 16.4687 6.32836 16.5976 6.45729L18.8887 8.74833C19.0176 8.87726 19.09 9.05213 19.09 9.23447V13.0529C19.09 13.4326 18.7822 13.7404 18.4025 13.7404L13.0568 13.7403C12.6771 13.7403 12.3693 13.4326 12.3693 13.0529V6.94343ZM13.7443 7.63093V12.3654H17.715V9.51924L15.8267 7.63093H13.7443Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.03808 13.7403C4.36335 13.7403 3.81638 14.2873 3.81638 14.962C3.81638 15.6368 4.36335 16.1837 5.03808 16.1837C5.7128 16.1837 6.25978 15.6368 6.25978 14.962C6.25978 14.2873 5.7128 13.7403 5.03808 13.7403ZM2.44138 14.962C2.44138 13.5279 3.60396 12.3653 5.03808 12.3653C6.47219 12.3653 7.63478 13.5279 7.63478 14.962C7.63478 16.3961 6.47219 17.5587 5.03808 17.5587C3.60396 17.5587 2.44138 16.3961 2.44138 14.962Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.966 13.7403C14.2912 13.7403 13.7443 14.2873 13.7443 14.962C13.7443 15.6368 14.2912 16.1837 14.966 16.1837C15.6407 16.1837 16.1877 15.6368 16.1877 14.962C16.1877 14.2873 15.6407 13.7403 14.966 13.7403ZM12.3693 14.962C12.3693 13.5279 13.5318 12.3653 14.966 12.3653C16.4001 12.3653 17.5627 13.5279 17.5627 14.962C17.5627 16.3961 16.4001 17.5587 14.966 17.5587C13.5318 17.5587 12.3693 16.3961 12.3693 14.962Z"
                fill="white"
              />
            </g>
          </svg>
          <span>Delivery</span>
        </div>
      </div>
      <div className={style.productslink} onClick={() => navigate("/products")}>
        <div className={style.productslinkbox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g opacity="0.8">
              <path
                d="M17.0822 10.8337C17.7726 10.8337 18.3322 11.3933 18.3322 12.0837V17.0837C18.3322 17.774 17.7726 18.3337 17.0822 18.3337H12.0822C11.3918 18.3337 10.8322 17.774 10.8322 17.0837V12.0837C10.8322 11.3933 11.3918 10.8337 12.0822 10.8337H17.0822ZM7.91797 10.8337C8.60832 10.8337 9.16797 11.3933 9.16797 12.0837V17.0837C9.16797 17.774 8.60832 18.3337 7.91797 18.3337H2.91797C2.22761 18.3337 1.66797 17.774 1.66797 17.0837V12.0837C1.66797 11.3933 2.22761 10.8337 2.91797 10.8337H7.91797ZM16.9155 12.2503H12.2488V16.917H16.9155V12.2503ZM7.7513 12.2503H3.08464V16.917H7.7513V12.2503ZM7.91797 1.66699C8.60832 1.66699 9.16797 2.22664 9.16797 2.91699V7.91699C9.16797 8.60735 8.60832 9.16699 7.91797 9.16699H2.91797C2.22761 9.16699 1.66797 8.60735 1.66797 7.91699V2.91699C1.66797 2.22664 2.22761 1.66699 2.91797 1.66699H7.91797ZM17.0822 1.66699C17.7726 1.66699 18.3322 2.22664 18.3322 2.91699V7.91699C18.3322 8.60735 17.7726 9.16699 17.0822 9.16699H12.0822C11.3918 9.16699 10.8322 8.60735 10.8322 7.91699V2.91699C10.8322 2.22664 11.3918 1.66699 12.0822 1.66699H17.0822ZM7.7513 3.08366H3.08464V7.75033H7.7513V3.08366ZM16.9155 3.08366H12.2488V7.75033H16.9155V3.08366Z"
                fill="white"
              />
            </g>
          </svg>
          <span>Products</span>
        </div>
      </div>
      <div
        className={style.marketinglink}
        onClick={() => navigate("/marketing")}
      >
        <div className={style.marketinglinkbox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g opacity="0.8">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.1074 2.29084C13.0654 1.76834 14.2333 2.46167 14.2333 3.55281V16.4471C14.2333 17.5383 13.0653 18.2316 12.1074 17.7091L4.04696 13.3125H2.375C1.23591 13.3125 0.3125 12.3891 0.3125 11.25V8.74998C0.3125 7.6109 1.23591 6.68748 2.375 6.68748H4.04692L12.1074 2.29084ZM12.6083 3.86866L5.06662 7.9823V12.0176L12.6083 16.1313V3.86866ZM1.9375 8.74998C1.9375 8.50836 2.13338 8.31248 2.375 8.31248H3.4375V11.6875H2.375C2.13338 11.6875 1.9375 11.4916 1.9375 11.25V8.74998Z"
                fill="white"
              />
              <path
                d="M18.6387 5.32573C18.919 5.67613 18.8622 6.18743 18.5118 6.46775L16.4284 8.13442C16.078 8.41474 15.5667 8.35793 15.2864 8.00753C15.0061 7.65713 15.0629 7.14583 15.4133 6.86551L17.4966 5.19884C17.847 4.91852 18.3583 4.97533 18.6387 5.32573Z"
                fill="white"
              />
              <path
                d="M15.5042 10.0208C15.5042 9.57208 15.8679 9.20831 16.3167 9.20831H18.8583C19.307 9.20831 19.6708 9.57208 19.6708 10.0208C19.6708 10.4695 19.307 10.8333 18.8583 10.8333H16.3167C15.8679 10.8333 15.5042 10.4695 15.5042 10.0208Z"
                fill="white"
              />
              <path
                d="M16.4284 12.2822C16.078 12.0019 15.5667 12.0587 15.2864 12.4091C15.0061 12.7595 15.0629 13.2708 15.4133 13.5511L17.4966 15.2178C17.847 15.4981 18.3583 15.4413 18.6387 15.0909C18.919 14.7405 18.8622 14.2292 18.5118 13.9489L16.4284 12.2822Z"
                fill="white"
              />
            </g>
          </svg>
          <span>Marketing</span>
        </div>
      </div>
      <div className={style.paymentslink} onClick={() => navigate("/payments")}>
        <div className={style.paymentslinkbox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g opacity="0.8">
              <path
                d="M14.2751 11.7752C14.2751 13.1559 13.1558 14.2752 11.7751 14.2752C10.3943 14.2752 9.27505 13.1559 9.27505 11.7752C9.27505 10.3945 10.3943 9.27518 11.7751 9.27518C13.1558 9.27518 14.2751 10.3945 14.2751 11.7752Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.9268 3.16917C16.004 3.31873 16.0502 3.48234 16.0625 3.65017V6.25015H18.425C18.6023 6.24515 18.7788 6.27515 18.9445 6.33842C19.1103 6.40169 19.2619 6.49699 19.3907 6.61888C19.5196 6.74077 19.6231 6.88686 19.6955 7.04879C19.7679 7.21073 19.8077 7.38537 19.8125 7.56267V16.0002C19.8077 16.1775 19.7679 16.3521 19.6955 16.514C19.6231 16.6759 19.5196 16.822 19.3907 16.9439C19.2619 17.0658 19.1103 17.1611 18.9445 17.2244C18.7788 17.2877 18.6023 17.3176 18.425 17.3127H5.12505C4.94836 17.3176 4.77238 17.2876 4.60739 17.2242C4.4424 17.1607 4.29168 17.0652 4.16382 16.9432C4.03596 16.8211 3.93355 16.675 3.86253 16.5131C3.79151 16.3512 3.75323 16.1769 3.75 16.0002V13.5627H1.37505C1.20783 13.5798 1.03882 13.5631 0.87822 13.5134C0.717624 13.4638 0.568733 13.3823 0.440369 13.2738C0.312004 13.1652 0.206809 13.0319 0.131149 12.8818C0.0554897 12.7317 0.0108881 12.5679 0 12.4002V3.65017C0.0124843 3.48351 0.0582998 3.32107 0.134659 3.17241C0.211018 3.02376 0.316372 2.8919 0.444565 2.78469C0.572758 2.67747 0.721153 2.59705 0.880966 2.54818C1.04078 2.4993 1.20881 2.48297 1.37505 2.50015H14.675C14.8422 2.48118 15.0115 2.4962 15.1728 2.54425C15.3341 2.5923 15.484 2.67242 15.6136 2.7798C15.7431 2.88719 15.8497 3.01961 15.9268 3.16917ZM3.91006 6.41021C4.17262 6.14766 4.52875 6.00017 4.90005 6.00017H14.7501V3.81267H1.31256V12.2502H3.50006V7.40016C3.50006 7.02886 3.64751 6.67276 3.91006 6.41021ZM5.06256 16.0002H18.5001V7.56267H5.06256V16.0002Z"
                fill="white"
              />
            </g>
          </svg>
          <span>Payments</span>
        </div>
      </div>
      <div className={style.toolslink}>
        <div className={style.toolslinkbox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g opacity="0.8">
              <path
                d="M3.43891 3.49165L15.924 8.22495L11.5643 10.1656C10.9254 10.4416 10.4159 10.9492 10.1388 11.5856L8.20249 15.9284L3.4508 3.49165H3.43891ZM2.14411 1.125C1.9784 1.12542 1.81524 1.16597 1.66877 1.2432C1.5223 1.32042 1.39688 1.43197 1.30335 1.56824C1.20981 1.70451 1.1509 1.86141 1.1318 2.02539C1.1127 2.18936 1.13398 2.35549 1.19372 2.50947L7.13333 18.2122C7.2063 18.4075 7.33769 18.5758 7.50977 18.6943C7.68186 18.8128 7.88641 18.8758 8.09561 18.8749C8.29598 18.878 8.49261 18.821 8.65999 18.7113C8.82738 18.6015 8.95766 18.4441 9.03397 18.2595L11.7187 12.2601C11.8175 12.0249 12.0053 11.8378 12.2414 11.7394L18.276 9.0651C18.4599 8.98022 18.6147 8.84338 18.7211 8.67159C18.8275 8.4998 18.8808 8.30064 18.8745 8.09888C18.8682 7.89713 18.8024 7.70171 18.6854 7.53687C18.5684 7.37203 18.4054 7.24505 18.2166 7.17177L2.46473 1.25515C2.34333 1.20891 2.21463 1.18486 2.08466 1.18415L2.14411 1.125Z"
                fill="white"
              />
            </g>
          </svg>
          <span>Tools</span>
        </div>
      </div>
      <div className={style.discountslink}>
        <div className={style.discountslinkbox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.0875 11.7875L18.4 10.2625C18.3415 10.1417 18.3116 10.0092 18.3125 9.87499C18.3086 9.74052 18.3387 9.60725 18.4 9.4875L19.0625 7.98748C19.2028 7.69042 19.2755 7.36598 19.2755 7.03747C19.2755 6.70896 19.2028 6.38455 19.0625 6.08749C18.9364 5.79295 18.7489 5.52873 18.5125 5.3125C18.2769 5.10043 18.0003 4.93878 17.7 4.83749L16.1625 4.26247C16.0358 4.21131 15.9209 4.13474 15.825 4.03748C15.7331 3.94449 15.6608 3.83399 15.6125 3.7125L15.025 2.16248C14.9073 1.86131 14.7305 1.58675 14.5051 1.3549C14.2797 1.12306 14.0102 0.938645 13.7125 0.812492C13.4111 0.688676 13.0883 0.624989 12.7625 0.625C12.4392 0.634521 12.1208 0.706666 11.825 0.837479L10.325 1.525C10.0763 1.62511 9.79862 1.62511 9.54998 1.525L8.04996 0.837479C7.75168 0.709908 7.43066 0.64415 7.10625 0.64415C6.78183 0.64415 6.46077 0.709908 6.16249 0.837479C5.86045 0.963131 5.58795 1.15046 5.36247 1.38748C5.1259 1.61317 4.94604 1.89156 4.83749 2.19997L4.26247 3.75C4.21414 3.87149 4.1419 3.98198 4.04999 4.07497C3.95404 4.17224 3.83919 4.24885 3.7125 4.3L2.16248 4.87499C1.86002 4.98963 1.58372 5.16392 1.34998 5.3875C1.11544 5.61246 0.932122 5.8853 0.812492 6.18748C0.688676 6.4889 0.624989 6.81163 0.625 7.13749C0.6329 7.46502 0.70508 7.78782 0.837479 8.0875L1.525 9.58748C1.62511 9.83611 1.62511 10.1138 1.525 10.3625L0.837479 11.8625C0.703487 12.1567 0.635232 12.4767 0.637474 12.8C0.635011 13.1274 0.703235 13.4514 0.837479 13.75C0.963058 14.0409 1.14803 14.3023 1.3805 14.5176C1.61297 14.7328 1.88784 14.8971 2.1875 15L3.73749 15.5875C3.86446 15.6322 3.97979 15.7048 4.07497 15.8C4.17016 15.8952 4.24278 16.0105 4.28749 16.1375L4.86248 17.675C5.03568 18.1253 5.34063 18.5131 5.7375 18.7875C6.07263 19.0279 6.46538 19.1753 6.87592 19.2148C7.28645 19.2543 7.70015 19.1845 8.07499 19.0125L9.57497 18.325C9.69525 18.2651 9.82819 18.2352 9.9625 18.2375C10.0978 18.2395 10.2306 18.2738 10.35 18.3375L11.85 19C12.1471 19.1319 12.4686 19.2001 12.7937 19.2001C13.1188 19.2001 13.4404 19.1319 13.7375 19C14.0395 18.8743 14.312 18.687 14.5375 18.45C14.7636 18.2182 14.9382 17.9414 15.05 17.6375L15.6375 16.1C15.6822 15.973 15.7548 15.8577 15.85 15.7625C15.9452 15.6673 16.0605 15.5947 16.1875 15.55L17.725 14.9625C18.0244 14.8533 18.3002 14.6878 18.5375 14.475C18.7736 14.2634 18.9612 14.0033 19.0875 13.7125C19.2217 13.4139 19.29 13.0899 19.2875 12.7625C19.2971 12.4264 19.2286 12.0927 19.0875 11.7875ZM17.1 10.8625L17.7125 12.3125C17.7596 12.4282 17.7891 12.5505 17.8 12.675C17.8003 12.8037 17.7748 12.9313 17.725 13.05C17.6734 13.166 17.6014 13.2719 17.5125 13.3625C17.4168 13.4478 17.3068 13.5155 17.1875 13.5625L15.725 14.125C15.4023 14.2327 15.1106 14.4171 14.875 14.6625C14.6336 14.9014 14.4498 15.192 14.3375 15.5125L13.75 17.05C13.6572 17.293 13.4734 17.4903 13.2375 17.6C12.9952 17.6878 12.7298 17.6878 12.4875 17.6L10.9875 16.9125C10.6771 16.7724 10.3405 16.6999 10 16.6999C9.65948 16.6999 9.32285 16.7724 9.01249 16.9125L7.51247 17.6C7.38948 17.6502 7.25781 17.6756 7.12498 17.675C7.00159 17.6735 6.87922 17.6524 6.76247 17.6125C6.52716 17.5042 6.3402 17.3128 6.23749 17.075L5.6625 15.525C5.54864 15.2053 5.36503 14.9149 5.12505 14.6749C4.88506 14.4349 4.5947 14.2514 4.27498 14.1375L2.72499 13.55C2.60572 13.503 2.49568 13.4353 2.39998 13.35C2.31104 13.2594 2.23909 13.1535 2.1875 13.0375C2.13767 12.9188 2.11213 12.7912 2.11246 12.6625C2.12334 12.5379 2.15285 12.4158 2.19997 12.3L2.8875 10.8C3.02761 10.4896 3.10005 10.153 3.10005 9.81247C3.10005 9.47195 3.02761 9.13536 2.8875 8.825L2.19997 7.32498C2.11212 7.0827 2.11212 6.81726 2.19997 6.57497C2.25989 6.45009 2.34016 6.33605 2.43748 6.23749C2.54365 6.14714 2.66694 6.07912 2.79999 6.03748L4.34998 5.46249C4.67042 5.35015 4.96109 5.16635 5.19997 4.925C5.42484 4.69463 5.60313 4.42297 5.72498 4.12498L6.29997 2.575C6.39845 2.3344 6.58677 2.14158 6.82499 2.03747C6.94454 2.01253 7.06795 2.01253 7.1875 2.03747C7.32034 2.03681 7.452 2.06233 7.575 2.1125L9.07497 2.79999C9.38533 2.9401 9.72196 3.01254 10.0625 3.01254C10.403 3.01254 10.7396 2.9401 11.05 2.79999L12.55 2.1125C12.6655 2.05882 12.7914 2.03098 12.9187 2.03098C13.0461 2.03098 13.1719 2.05882 13.2875 2.1125C13.4051 2.16108 13.5115 2.2334 13.6 2.32498C13.6923 2.41528 13.761 2.5269 13.8 2.64999L14.3875 4.19998C14.5028 4.51896 14.6862 4.80899 14.925 5.04997C15.1638 5.29132 15.4545 5.47516 15.775 5.5875L17.325 6.16249C17.5656 6.26097 17.7584 6.44925 17.8625 6.68747C17.9503 6.92975 17.9503 7.1952 17.8625 7.43748L17.175 8.93749C17.0276 9.242 16.9467 9.57434 16.9375 9.91249C16.922 10.2372 16.9775 10.5614 17.1 10.8625Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.3242 10.8379C12.1434 10.8372 11.9642 10.8721 11.7969 10.9408C11.6296 11.0094 11.4775 11.1104 11.3492 11.2379C11.1577 11.4305 11.0275 11.6755 10.9751 11.942C10.9227 12.2085 10.9503 12.4846 11.0546 12.7354C11.1589 12.9862 11.3352 13.2005 11.5611 13.3513C11.7871 13.502 12.0526 13.5825 12.3242 13.5825C12.5958 13.5825 12.8614 13.502 13.0873 13.3513C13.3133 13.2005 13.4895 12.9862 13.5938 12.7354C13.6981 12.4846 13.7258 12.2085 13.6734 11.942C13.6209 11.6755 13.4907 11.4305 13.2992 11.2379C13.171 11.1104 13.0189 11.0094 12.8516 10.9408C12.6843 10.8721 12.5051 10.8372 12.3242 10.8379Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.0391 6.62518C13.0089 6.44189 12.9107 6.27672 12.7641 6.16269C12.6438 6.06547 12.4937 6.01253 12.3391 6.0127H12.2266C12.1332 6.02485 12.0431 6.0554 11.9615 6.10261C11.88 6.14981 11.8086 6.21273 11.7516 6.2877L7.06408 12.5377C7.01015 12.6143 6.96801 12.6986 6.93907 12.7877C6.92656 12.8789 6.92656 12.9714 6.93907 13.0627C6.95162 13.1567 6.98583 13.2466 7.03905 13.3252C7.08772 13.4071 7.15135 13.4792 7.22658 13.5377C7.35099 13.6256 7.49923 13.6736 7.65158 13.6752C7.76427 13.6758 7.87552 13.6501 7.97655 13.6002C8.07581 13.5505 8.1616 13.4777 8.22657 13.3877L12.9141 7.13769C13.021 6.98969 13.0658 6.80578 13.0391 6.62518Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.61167 8.49973C8.86816 8.24003 9.01199 7.88973 9.01199 7.52473C9.01199 7.15972 8.86816 6.80942 8.61167 6.54973C8.35198 6.29324 8.00168 6.14941 7.63667 6.14941C7.27167 6.14941 6.92137 6.29324 6.66167 6.54973C6.40309 6.80831 6.25781 7.15903 6.25781 7.52473C6.25781 7.89042 6.40309 8.24114 6.66167 8.49973C6.92026 8.75831 7.27098 8.90359 7.63667 8.90359C8.00237 8.90359 8.35309 8.75831 8.61167 8.49973Z"
              fill="white"
            />
          </svg>
          <span>Discounts</span>
        </div>
      </div>
      <div className={style.customerslink}>
        <div className={style.customerslinkbox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.875 13.4548C0.875 11.344 2.58615 9.63281 4.69697 9.63281H10.7576C12.8684 9.63281 14.5795 11.344 14.5795 13.4548V14.9699C14.5795 15.4072 14.2251 15.7616 13.7879 15.7616C13.3507 15.7616 12.9962 15.4072 12.9962 14.9699V13.4548C12.9962 12.2184 11.9939 11.2161 10.7576 11.2161H4.69697C3.46061 11.2161 2.45833 12.2184 2.45833 13.4548V14.9699C2.45833 15.4072 2.10389 15.7616 1.66667 15.7616C1.22944 15.7616 0.875 15.4072 0.875 14.9699V13.4548Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.72822 2.12533C6.49186 2.12533 5.48958 3.1276 5.48958 4.36396C5.48958 5.60033 6.49186 6.6026 7.72822 6.6026C8.96458 6.6026 9.96686 5.60033 9.96686 4.36396C9.96686 3.1276 8.96458 2.12533 7.72822 2.12533ZM3.90625 4.36396C3.90625 2.25315 5.6174 0.541992 7.72822 0.541992C9.83904 0.541992 11.5502 2.25315 11.5502 4.36396C11.5502 6.47478 9.83904 8.18593 7.72822 8.18593C5.6174 8.18593 3.90625 6.47478 3.90625 4.36396Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.2949 10.3254C15.4042 9.90205 15.836 9.64747 16.2593 9.75678C17.9457 10.1922 19.1245 11.7128 19.1258 13.4545V14.9703C19.1258 15.4075 18.7713 15.7619 18.3341 15.7619C17.8969 15.7619 17.5424 15.4075 17.5424 14.9703V13.4554C17.5415 12.4353 16.8512 11.5448 15.8635 11.2898C15.4401 11.1805 15.1856 10.7487 15.2949 10.3254Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.2632 1.23612C12.3717 0.812556 12.8029 0.557106 13.2265 0.665555C14.9176 1.09856 16.1005 2.6224 16.1005 4.36809C16.1005 6.11378 14.9176 7.63762 13.2265 8.07062C12.8029 8.17907 12.3717 7.92362 12.2632 7.50006C12.1548 7.0765 12.4102 6.64522 12.8338 6.53677C13.8243 6.28315 14.5171 5.39059 14.5171 4.36809C14.5171 3.34559 13.8243 2.45303 12.8338 2.19941C12.4102 2.09096 12.1548 1.65968 12.2632 1.23612Z"
              fill="white"
            />
          </svg>
          <span>Customers</span>
        </div>
      </div>
      <div className={style.appearancelink}>
        <div className={style.appearancelinkbox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 19.375C4.875 19.375 0.625 15.125 0.625 10C0.625 4.875 4.875 0.625 10 0.625C15.125 0.625 19.375 4.375 19.375 9C19.375 12 16.875 14.5 13.875 14.5H12.125C11.75 14.5 11.375 14.875 11.375 15.25C11.375 15.5 11.5 15.625 11.625 15.75C12 16.125 12.125 16.625 12.125 17.125C12.125 18.375 11.125 19.375 10 19.375ZM10 2C5.625 2 2 5.625 2 10C2 14.375 5.625 18 10 18C10.375 18 10.75 17.625 10.75 17.25C10.75 17 10.625 16.875 10.5 16.75C10.125 16.375 10 15.875 10 15.375C10 14.25 11 13.25 12.125 13.25H13.875C16.125 13.25 18 11.375 18 9.125C18 5.125 14.375 2 10 2Z"
              fill="white"
            />
            <path
              d="M4.875 10.5889C5.63439 10.5889 6.25 9.97326 6.25 9.21387C6.25 8.45448 5.63439 7.83887 4.875 7.83887C4.11561 7.83887 3.5 8.45448 3.5 9.21387C3.5 9.97326 4.11561 10.5889 4.875 10.5889Z"
              fill="white"
            />
            <path
              d="M7.625 6.83887C8.38439 6.83887 9 6.22326 9 5.46387C9 4.70448 8.38439 4.08887 7.625 4.08887C6.86561 4.08887 6.25 4.70448 6.25 5.46387C6.25 6.22326 6.86561 6.83887 7.625 6.83887Z"
              fill="white"
            />
            <path
              d="M12.375 6.83887C13.1344 6.83887 13.75 6.22326 13.75 5.46387C13.75 4.70448 13.1344 4.08887 12.375 4.08887C11.6156 4.08887 11 4.70448 11 5.46387C11 6.22326 11.6156 6.83887 12.375 6.83887Z"
              fill="white"
            />
            <path
              d="M15.125 10.5889C15.8844 10.5889 16.5 9.97326 16.5 9.21387C16.5 8.45448 15.8844 7.83887 15.125 7.83887C14.3656 7.83887 13.75 8.45448 13.75 9.21387C13.75 9.97326 14.3656 10.5889 15.125 10.5889Z"
              fill="white"
            />
          </svg>
          <span>Appearance</span>
        </div>
      </div>
      <div className={style.pluginslink}>
        <div className={style.pluginslinkbox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g opacity="0.8">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5735 0.504738C11.9044 0.648363 12.101 0.992918 12.0562 1.35082L11.2954 7.43755H18.25C18.5653 7.43755 18.8521 7.61992 18.9858 7.90542C19.1195 8.19092 19.076 8.528 18.8742 8.7702L10.1242 19.2702C9.89328 19.5473 9.50734 19.639 9.17648 19.4954C8.84562 19.3517 8.64905 19.0072 8.69378 18.6493L9.45462 12.5625H2.50001C2.18475 12.5625 1.89794 12.3802 1.76422 12.0947C1.6305 11.8092 1.674 11.4721 1.87583 11.2299L10.6258 0.729896C10.8567 0.452805 11.2427 0.361113 11.5735 0.504738ZM4.23473 10.9375H10.375C10.6081 10.9375 10.8299 11.0376 10.9841 11.2123C11.1384 11.387 11.2101 11.6196 11.1812 11.8508L10.65 16.1009L16.5153 9.06255H10.375C10.142 9.06255 9.92013 8.96247 9.7659 8.78776C9.61166 8.61305 9.53988 8.38052 9.56878 8.14927L10.1 3.89917L4.23473 10.9375Z"
                fill="white"
              />
            </g>
          </svg>
          <span>Plugins</span>
        </div>
      </div>

      <div className={style.valletbox}>
        <div className={style.valletbox_svg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.99922 3.79727C2.42246 3.79727 1.79922 4.35527 1.79922 5.24727V18.7473C1.79922 19.6393 2.42246 20.1973 2.99922 20.1973H20.9992C21.576 20.1973 22.1992 19.6393 22.1992 18.7473V15.8473H16.9993C14.873 15.8473 13.1493 14.1236 13.1493 11.9973C13.1493 9.87097 14.873 8.14727 16.9993 8.14727H22.1992V5.24727C22.1992 4.35527 21.576 3.79727 20.9992 3.79727H2.99922ZM23.7992 8.14727V5.24727C23.7992 3.65398 22.6316 2.19727 20.9992 2.19727H2.99922C1.36684 2.19727 0.199219 3.65398 0.199219 5.24727V18.7473C0.199219 20.3405 1.36684 21.7973 2.99922 21.7973H20.9992C22.6316 21.7973 23.7992 20.3405 23.7992 18.7473V15.8473H23.8493V8.14727H23.7992ZM15.9993 11.9473C15.9993 11.4778 16.3798 11.0973 16.8493 11.0973H18.1493C18.6187 11.0973 18.9993 11.4778 18.9993 11.9473C18.9993 12.4167 18.6187 12.7973 18.1493 12.7973H16.8493C16.3798 12.7973 15.9993 12.4167 15.9993 11.9473ZM14.8493 11.9973C14.8493 10.8099 15.8119 9.84727 16.9993 9.84727H22.1493V14.1473H16.9993C15.8119 14.1473 14.8493 13.1847 14.8493 11.9973Z"
              fill="white"
            />
          </svg>
        </div>
        <div className={style.valletbox_para}>
          <p>Available credits 100</p>
        </div>
      </div>
    </div>
  );
}
export default HomeSidebar;
