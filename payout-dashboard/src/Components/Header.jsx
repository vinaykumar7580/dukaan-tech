import style from "../Styles/home.module.css";

function Header() {
  return (
    <div>
      <div className={style.header}>
        <div className={style.header_first}>
          <div className={style.header_first_left}>
            <span className={style.payoutsname}>Payouts</span>
          </div>
          <div className={style.header_first_right}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className={style.header_first_right_svg}
              >
                <g clip-path="url(#clip0_84601_6194)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.78076 10.1799C7.78076 10.6093 7.43261 10.9575 7.00315 10.9575C6.57369 10.9575 6.22554 10.6093 6.22554 10.1799C6.22554 9.75039 6.57369 9.40225 7.00315 9.40225C7.43261 9.40225 7.78076 9.75039 7.78076 10.1799Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.13017 3.40673C6.54699 3.23408 7.00564 3.18891 7.44813 3.27692C7.89062 3.36494 8.29707 3.58219 8.61608 3.90121C8.9351 4.22023 9.15235 4.62668 9.24037 5.06917C9.32839 5.51165 9.28321 5.97031 9.11056 6.38712C8.93791 6.80394 8.64554 7.16019 8.27042 7.41084C8.02632 7.57394 7.75432 7.68756 7.46978 7.74703V7.84702C7.46978 8.10475 7.26084 8.31368 7.00311 8.31368C6.74538 8.31368 6.53644 8.10475 6.53644 7.84702V7.32861C6.53644 7.20484 6.58561 7.08614 6.67313 6.99863C6.76064 6.91111 6.87934 6.86194 7.00311 6.86194C7.26967 6.86194 7.53025 6.7829 7.75188 6.63481C7.97352 6.48671 8.14627 6.27622 8.24828 6.02995C8.35028 5.78368 8.37697 5.51269 8.32497 5.25125C8.27297 4.98981 8.14461 4.74966 7.95612 4.56117C7.76763 4.37269 7.52748 4.24433 7.26604 4.19232C7.0046 4.14032 6.73361 4.16701 6.48734 4.26902C6.24107 4.37103 6.03058 4.54377 5.88249 4.76541C5.73439 4.98705 5.65535 5.24762 5.65535 5.51418C5.65535 5.77192 5.44641 5.98085 5.18868 5.98085C4.93095 5.98085 4.72202 5.77192 4.72202 5.51418C4.72202 5.06303 4.8558 4.622 5.10645 4.24688C5.3571 3.87175 5.71336 3.57938 6.13017 3.40673Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.00313 1.63255C4.0392 1.63255 1.63646 4.03529 1.63646 6.99922C1.63646 9.96315 4.0392 12.3659 7.00313 12.3659C9.96705 12.3659 12.3698 9.96315 12.3698 6.99922C12.3698 4.03529 9.96705 1.63255 7.00313 1.63255ZM0.703125 6.99922C0.703125 3.51982 3.52373 0.699219 7.00313 0.699219C10.4825 0.699219 13.3031 3.51982 13.3031 6.99922C13.3031 10.4786 10.4825 13.2992 7.00313 13.2992C3.52373 13.2992 0.703125 10.4786 0.703125 6.99922Z"
                    fill="#4D4D4D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_84601_6194">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <p className={style.header_first_right_para}>How it works</p>
            </div>
          </div>
        </div>
        <div className={style.header_second}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={style.header_second_icon}
            >
              <g clip-path="url(#clip0_84601_6198)">
                <path
                  d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z"
                  fill="#808080"
                />
              </g>
              <defs>
                <clipPath id="clip0_84601_6198">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <span className={style.header_second_para}>
              Search features, tutorials, etc.
            </span>
          </div>
        </div>
        <div className={style.header_third}>
          <div className={style.header_third_box}>
            <div className={style.header_third_box_left}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clip-path="url(#clip0_84601_6209)">
                  <circle cx="20" cy="20" r="20" fill="#E6E6E6" />
                  <path
                    d="M21.1109 25.5021C20.5156 26.1582 19.4844 26.1582 18.8891 25.5021L13.6151 19.689C12.7406 18.7251 13.4245 17.1811 14.726 17.1811L25.274 17.1811C26.5755 17.1811 27.2594 18.7251 26.3849 19.689L21.1109 25.5021Z"
                    fill="#4D4D4D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_84601_6209">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clip-path="url(#clip0_84601_6209)">
                  <circle cx="20" cy="20" r="20" fill="#E6E6E6" />
                  <path
                    d="M21.1109 25.5021C20.5156 26.1582 19.4844 26.1582 18.8891 25.5021L13.6151 19.689C12.7406 18.7251 13.4245 17.1811 14.726 17.1811L25.274 17.1811C26.5755 17.1811 27.2594 18.7251 26.3849 19.689L21.1109 25.5021Z"
                    fill="#4D4D4D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_84601_6209">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
