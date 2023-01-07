import React from "react";
import { ConnectKitButton } from "connectkit";

interface ComponentProps {
  onChange(page: string): void;
}

const Header: React.FC<ComponentProps> = (props: ComponentProps) => {
  return (
    <div className="lg:w-full md:w-full sm:w-full break-words bg-green lg:mt-16 md:mt-20 sm:mt-14 lg:pt-10 md:pt-10 sm:pt-0 relative lg-w-[800px]">
      <div className="xxl:ml-[45%] xl:ml-[30%] lg:ml-[25%] md:ml-[30%] sm:ml-[10%] sm:mr-[10%] sm:mt-[0%] sm:mb-[0%] lg:w-[50%] md:w-[100%] sm:w-10/12 lg:max-w-[500px] absolute bottom-0">
        <div className="lg:hidden md:inline-block sm:inline-block">
          <ConnectKitButton.Custom>
            {({
              isConnected,
              isConnecting,
              show,
              hide,
              truncatedAddress,
              address,
              ensName,
            }) => {
              return (
                <div>
                  {!isConnected ? (
                    <div className="w-[100%]">
                      <svg
                        onClick={show}
                        viewBox="0 0 178 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="178" height="32" rx="16" fill="#ADFFD8" />
                        <path
                          d="M19.96 20.976C20.4187 20.976 20.808 20.9013 21.128 20.752C21.4587 20.592 21.7253 20.384 21.928 20.128C22.1413 19.8613 22.296 19.5627 22.392 19.232C22.4987 18.8907 22.552 18.5333 22.552 18.16V17.968H23.896V18.16C23.896 18.7253 23.8107 19.2587 23.64 19.76C23.4693 20.2507 23.2187 20.6827 22.888 21.056C22.5573 21.4187 22.1467 21.7067 21.656 21.92C21.1653 22.1227 20.6 22.224 19.96 22.224C18.7227 22.224 17.7573 21.8347 17.064 21.056C16.3707 20.2773 16.024 19.1413 16.024 17.648V15.152C16.024 13.7013 16.3707 12.576 17.064 11.776C17.7573 10.976 18.7227 10.576 19.96 10.576C20.6 10.576 21.1653 10.6827 21.656 10.896C22.1467 11.0987 22.5573 11.3867 22.888 11.76C23.2187 12.1227 23.4693 12.5547 23.64 13.056C23.8107 13.5467 23.896 14.0747 23.896 14.64V14.832H22.552V14.64C22.5413 14.2773 22.4827 13.9253 22.376 13.584C22.28 13.2427 22.1253 12.944 21.912 12.688C21.7093 12.4213 21.448 12.2133 21.128 12.064C20.808 11.904 20.4187 11.824 19.96 11.824C19.096 11.824 18.4453 12.1387 18.008 12.768C17.5813 13.3973 17.368 14.224 17.368 15.248V17.552C17.368 18.6507 17.5813 19.4987 18.008 20.096C18.4453 20.6827 19.096 20.976 19.96 20.976ZM33.6769 18.128C33.6769 18.7893 33.5649 19.376 33.3409 19.888C33.1275 20.3893 32.8395 20.816 32.4769 21.168C32.1142 21.5093 31.6875 21.7707 31.1969 21.952C30.7169 22.1333 30.2155 22.224 29.6929 22.224C29.1595 22.224 28.6529 22.1333 28.1729 21.952C27.6929 21.7707 27.2715 21.5093 26.9089 21.168C26.5462 20.816 26.2529 20.3893 26.0289 19.888C25.8155 19.376 25.7089 18.7893 25.7089 18.128V17.936C25.7089 17.2853 25.8155 16.7093 26.0289 16.208C26.2529 15.696 26.5462 15.264 26.9089 14.912C27.2822 14.56 27.7089 14.2933 28.1889 14.112C28.6689 13.9307 29.1702 13.84 29.6929 13.84C30.2155 13.84 30.7169 13.9307 31.1969 14.112C31.6769 14.2933 32.0982 14.56 32.4609 14.912C32.8342 15.264 33.1275 15.696 33.3409 16.208C33.5649 16.7093 33.6769 17.2853 33.6769 17.936V18.128ZM29.6929 21.04C30.0769 21.04 30.4289 20.976 30.7489 20.848C31.0795 20.7093 31.3675 20.512 31.6129 20.256C31.8582 20 32.0502 19.696 32.1889 19.344C32.3275 18.9813 32.3969 18.576 32.3969 18.128V17.936C32.3969 17.5093 32.3275 17.12 32.1889 16.768C32.0502 16.4053 31.8582 16.096 31.6129 15.84C31.3675 15.584 31.0795 15.3867 30.7489 15.248C30.4182 15.0987 30.0662 15.024 29.6929 15.024C29.3195 15.024 28.9675 15.0987 28.6369 15.248C28.3062 15.3867 28.0182 15.584 27.7729 15.84C27.5275 16.096 27.3355 16.4053 27.1969 16.768C27.0582 17.12 26.9889 17.5093 26.9889 17.936V18.128C26.9889 18.576 27.0582 18.9813 27.1969 19.344C27.3355 19.696 27.5275 20 27.7729 20.256C28.0182 20.512 28.3009 20.7093 28.6209 20.848C28.9515 20.976 29.3089 21.04 29.6929 21.04ZM37.2338 22H35.9858V14.064H37.2338V15.408H37.4258C37.9164 14.3627 38.7698 13.84 39.9858 13.84C40.9031 13.84 41.6338 14.128 42.1778 14.704C42.7218 15.2693 42.9938 16.1227 42.9938 17.264V22H41.7458V17.52C41.7458 16.688 41.5591 16.064 41.1858 15.648C40.8124 15.232 40.3058 15.024 39.6658 15.024C38.9084 15.024 38.3111 15.2853 37.8738 15.808C37.4471 16.32 37.2338 17.008 37.2338 17.872V22ZM47.0306 22H45.7826V14.064H47.0306V15.408H47.2226C47.7133 14.3627 48.5666 13.84 49.7826 13.84C50.7 13.84 51.4306 14.128 51.9746 14.704C52.5186 15.2693 52.7906 16.1227 52.7906 17.264V22H51.5426V17.52C51.5426 16.688 51.356 16.064 50.9826 15.648C50.6093 15.232 50.1026 15.024 49.4626 15.024C48.7053 15.024 48.108 15.2853 47.6706 15.808C47.244 16.32 47.0306 17.008 47.0306 17.872V22ZM56.4915 18.416C56.5235 19.2053 56.7688 19.84 57.2275 20.32C57.6862 20.8 58.3262 21.04 59.1475 21.04C59.5208 21.04 59.8462 20.9973 60.1235 20.912C60.4008 20.8267 60.6355 20.7093 60.8275 20.56C61.0302 20.4107 61.1902 20.24 61.3075 20.048C61.4355 19.8453 61.5368 19.632 61.6115 19.408L62.7955 19.728C62.5715 20.464 62.1555 21.0667 61.5475 21.536C60.9502 21.9947 60.1395 22.224 59.1155 22.224C58.5502 22.224 58.0275 22.128 57.5475 21.936C57.0782 21.7333 56.6728 21.4507 56.3315 21.088C55.9902 20.7253 55.7235 20.2933 55.5315 19.792C55.3395 19.2907 55.2435 18.736 55.2435 18.128V17.744C55.2435 17.1893 55.3395 16.672 55.5315 16.192C55.7342 15.712 56.0115 15.3013 56.3635 14.96C56.7155 14.608 57.1262 14.336 57.5955 14.144C58.0755 13.9413 58.5928 13.84 59.1475 13.84C59.7982 13.84 60.3582 13.9627 60.8275 14.208C61.3075 14.4427 61.6968 14.736 61.9955 15.088C62.3048 15.44 62.5288 15.824 62.6675 16.24C62.8168 16.656 62.8915 17.04 62.8915 17.392V18.416H56.4915ZM59.1475 15.024C58.7955 15.024 58.4648 15.0827 58.1555 15.2C57.8568 15.3067 57.5902 15.4613 57.3555 15.664C57.1315 15.8667 56.9448 16.1067 56.7955 16.384C56.6568 16.6507 56.5662 16.944 56.5235 17.264H61.6435C61.6222 16.9227 61.5368 16.6133 61.3875 16.336C61.2488 16.0587 61.0622 15.824 60.8275 15.632C60.6035 15.44 60.3422 15.2907 60.0435 15.184C59.7555 15.0773 59.4568 15.024 59.1475 15.024ZM72.8004 19.184C72.715 19.6213 72.5657 20.0267 72.3524 20.4C72.1497 20.7733 71.8884 21.0987 71.5684 21.376C71.2484 21.6427 70.875 21.8507 70.4484 22C70.0217 22.1493 69.547 22.224 69.0244 22.224C68.4697 22.224 67.9417 22.1333 67.4404 21.952C66.9497 21.7707 66.5177 21.5093 66.1444 21.168C65.771 20.816 65.4724 20.3893 65.2484 19.888C65.035 19.3867 64.9284 18.8107 64.9284 18.16V17.968C64.9284 17.328 65.035 16.752 65.2484 16.24C65.4724 15.728 65.771 15.296 66.1444 14.944C66.5177 14.592 66.9497 14.32 67.4404 14.128C67.9417 13.936 68.4697 13.84 69.0244 13.84C69.5257 13.84 69.9897 13.9147 70.4164 14.064C70.843 14.2133 71.2164 14.4267 71.5364 14.704C71.867 14.9707 72.1337 15.2907 72.3364 15.664C72.5497 16.0373 72.6937 16.4427 72.7684 16.88L71.5204 17.168C71.4884 16.8907 71.4084 16.624 71.2804 16.368C71.163 16.1013 70.9977 15.872 70.7844 15.68C70.5817 15.4773 70.331 15.3173 70.0324 15.2C69.7337 15.0827 69.387 15.024 68.9924 15.024C68.6084 15.024 68.2457 15.0987 67.9044 15.248C67.5737 15.3867 67.2804 15.5893 67.0244 15.856C66.7684 16.112 66.5657 16.4213 66.4164 16.784C66.2777 17.1467 66.2084 17.5413 66.2084 17.968V18.16C66.2084 18.608 66.2777 19.0133 66.4164 19.376C66.5657 19.728 66.7684 20.0267 67.0244 20.272C67.2804 20.5173 67.579 20.7093 67.9204 20.848C68.2617 20.976 68.6297 21.04 69.0244 21.04C69.419 21.04 69.7604 20.9813 70.0484 20.864C70.347 20.736 70.5977 20.576 70.8004 20.384C71.0137 20.1813 71.179 19.952 71.2964 19.696C71.4244 19.44 71.5097 19.1733 71.5524 18.896L72.8004 19.184ZM74.9013 14.064H77.3973V10.8H78.6453V14.064H81.7173V15.216H78.6453V20.368C78.6453 20.688 78.7893 20.848 79.0773 20.848H81.3333V22H78.6293C78.2666 22 77.9679 21.8827 77.7333 21.648C77.5093 21.4133 77.3973 21.1147 77.3973 20.752V15.216H74.9013V14.064ZM101.855 22H99.407L98.367 11.376H98.175L97.135 22H94.687L93.551 10.8H94.767L95.839 21.424H96.031L97.039 10.8H99.503L100.511 21.424H100.703L101.775 10.8H102.991L101.855 22ZM110.324 20.656H110.132C109.876 21.1893 109.519 21.584 109.06 21.84C108.612 22.096 108.137 22.224 107.636 22.224C107.113 22.224 106.628 22.1387 106.18 21.968C105.732 21.7867 105.337 21.5253 104.996 21.184C104.665 20.832 104.404 20.4053 104.212 19.904C104.02 19.4027 103.924 18.8213 103.924 18.16V17.904C103.924 17.2533 104.02 16.6773 104.212 16.176C104.404 15.6747 104.665 15.2533 104.996 14.912C105.337 14.56 105.732 14.2933 106.18 14.112C106.628 13.9307 107.103 13.84 107.604 13.84C108.148 13.84 108.639 13.9627 109.076 14.208C109.524 14.4427 109.876 14.8107 110.132 15.312H110.324V14.064H111.572V20.368C111.572 20.688 111.716 20.848 112.004 20.848H112.404V22H111.556C111.193 22 110.895 21.8827 110.66 21.648C110.436 21.4133 110.324 21.1147 110.324 20.752V20.656ZM107.764 21.04C108.137 21.04 108.479 20.9707 108.788 20.832C109.108 20.6933 109.38 20.496 109.604 20.24C109.828 19.984 110.004 19.68 110.132 19.328C110.26 18.9653 110.324 18.5653 110.324 18.128V17.936C110.324 17.5093 110.26 17.12 110.132 16.768C110.004 16.4053 109.823 16.096 109.588 15.84C109.364 15.584 109.092 15.3867 108.772 15.248C108.463 15.0987 108.127 15.024 107.764 15.024C107.391 15.024 107.049 15.0933 106.74 15.232C106.431 15.3707 106.159 15.568 105.924 15.824C105.7 16.0693 105.524 16.3733 105.396 16.736C105.268 17.088 105.204 17.4773 105.204 17.904V18.16C105.204 19.0667 105.439 19.776 105.908 20.288C106.388 20.7893 107.007 21.04 107.764 21.04ZM114.361 20.848H117.241V11.952H114.457V10.8H118.489V20.848H121.369V22H114.361V20.848ZM124.158 20.848H127.038V11.952H124.254V10.8H128.286V20.848H131.166V22H124.158V20.848ZM134.867 18.416C134.899 19.2053 135.144 19.84 135.603 20.32C136.061 20.8 136.701 21.04 137.523 21.04C137.896 21.04 138.221 20.9973 138.499 20.912C138.776 20.8267 139.011 20.7093 139.203 20.56C139.405 20.4107 139.565 20.24 139.683 20.048C139.811 19.8453 139.912 19.632 139.987 19.408L141.171 19.728C140.947 20.464 140.531 21.0667 139.923 21.536C139.325 21.9947 138.515 22.224 137.491 22.224C136.925 22.224 136.403 22.128 135.923 21.936C135.453 21.7333 135.048 21.4507 134.707 21.088C134.365 20.7253 134.099 20.2933 133.907 19.792C133.715 19.2907 133.618 18.736 133.618 18.128V17.744C133.618 17.1893 133.715 16.672 133.907 16.192C134.109 15.712 134.387 15.3013 134.739 14.96C135.091 14.608 135.501 14.336 135.971 14.144C136.451 13.9413 136.968 13.84 137.523 13.84C138.173 13.84 138.733 13.9627 139.203 14.208C139.683 14.4427 140.072 14.736 140.371 15.088C140.68 15.44 140.904 15.824 141.043 16.24C141.192 16.656 141.267 17.04 141.267 17.392V18.416H134.867ZM137.523 15.024C137.171 15.024 136.84 15.0827 136.531 15.2C136.232 15.3067 135.965 15.4613 135.731 15.664C135.507 15.8667 135.32 16.1067 135.171 16.384C135.032 16.6507 134.941 16.944 134.899 17.264H140.019C139.997 16.9227 139.912 16.6133 139.763 16.336C139.624 16.0587 139.437 15.824 139.203 15.632C138.979 15.44 138.717 15.2907 138.419 15.184C138.131 15.0773 137.832 15.024 137.523 15.024ZM143.479 14.064H145.975V10.8H147.223V14.064H150.295V15.216H147.223V20.368C147.223 20.688 147.367 20.848 147.655 20.848H149.911V22H147.207C146.845 22 146.546 21.8827 146.311 21.648C146.087 21.4133 145.975 21.1147 145.975 20.752V15.216H143.479V14.064Z"
                          fill="#121212"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-[100%]">
                      <h1 className="lg:text-lg md:text-md sm:text-md bg-transparent">
                        <svg
                          className="w-3.5 inline-block align-baseline"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="-6.10352e-05"
                            width="13"
                            height="13"
                            rx="6.5"
                            fill="#ADFFD8"
                          />
                        </svg>
                        &nbsp;
                        <span className="opacity-60">{truncatedAddress}</span>
                        &nbsp;|&nbsp;
                        <span
                          onClick={show}
                          role="button"
                          className="opacity-30"
                        >
                          Disconnect
                        </span>
                        &nbsp;&nbsp;
                      </h1>
                    </div>
                  )}
                </div>
              );
            }}
          </ConnectKitButton.Custom>
        </div>
        <div className="lg:hidden md:block sm:block">
          <span className="block mb-4"></span>
        </div>

        <div
          className="w-[65%] lg:ml-5 md:ml-2 sm:ml-2 lg:min-w-[200px]"
          onClick={(e) => {
            props.onChange("Home");
          }}
          role="button"
        >
          <svg
            viewBox="0 0 273 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={(e) => {
              props.onChange("Home");
            }}
          >
            <path
              d="M22.9859 37.3325H20V10.5359H22.9859V21.3311H23.4453C24.1088 20.1827 25.0276 19.315 26.2015 18.728C27.3754 18.1155 28.6515 17.8093 30.0296 17.8093C31.2035 17.8093 32.3137 18.0262 33.36 18.4601C34.4064 18.8939 35.3251 19.5192 36.1162 20.3358C36.9329 21.1525 37.5709 22.1606 38.0303 23.36C38.5152 24.5595 38.7576 25.9248 38.7576 27.4561V28.2217C38.7576 29.7784 38.5279 31.1566 38.0686 32.356C37.6092 33.5555 36.9712 34.5636 36.1545 35.3802C35.3634 36.1969 34.4319 36.8221 33.36 37.256C32.2882 37.6643 31.1525 37.8685 29.953 37.8685C29.3405 37.8685 28.7153 37.7919 28.0773 37.6388C27.4392 37.5112 26.8268 37.307 26.2398 37.0263C25.6783 36.72 25.1552 36.3628 24.6703 35.9544C24.1854 35.5206 23.777 35.0102 23.4453 34.4232H22.9859V37.3325ZM29.3405 35.0357C30.2593 35.0357 31.1014 34.8826 31.8671 34.5763C32.6327 34.2445 33.2962 33.7852 33.8577 33.1982C34.4446 32.6112 34.8913 31.8967 35.1975 31.0545C35.5293 30.2123 35.6952 29.268 35.6952 28.2217V27.4561C35.6952 26.4353 35.5293 25.5165 35.1975 24.6999C34.8913 23.8577 34.4446 23.1431 33.8577 22.5561C33.2962 21.9436 32.6199 21.4715 31.8288 21.1397C31.0632 20.808 30.2338 20.6421 29.3405 20.6421C28.4473 20.6421 27.6179 20.8207 26.8523 21.178C26.0867 21.5098 25.4104 21.9819 24.8234 22.5944C24.2619 23.2069 23.8153 23.947 23.4836 24.8147C23.1518 25.6569 22.9859 26.5884 22.9859 27.6092V28.0686C22.9859 29.1149 23.1518 30.0719 23.4836 30.9396C23.8153 31.7818 24.2619 32.5091 24.8234 33.1216C25.4104 33.7341 26.0867 34.2063 26.8523 34.538C27.6179 34.8698 28.4473 35.0357 29.3405 35.0357Z"
              fill="white"
            />
            <path
              d="M44.1286 34.5763H51.0192V13.2922H44.3583V10.5359H54.0051V34.5763H60.8956V37.3325H44.1286V34.5763Z"
              fill="white"
            />
            <path
              d="M85.4836 28.0686C85.4836 29.6508 85.2156 31.0545 84.6797 32.2795C84.1693 33.4789 83.4802 34.4998 82.6125 35.3419C81.7448 36.1586 80.724 36.7838 79.5501 37.2177C78.4016 37.6515 77.2022 37.8685 75.9517 37.8685C74.6756 37.8685 73.4634 37.6515 72.315 37.2177C71.1666 36.7838 70.1585 36.1586 69.2908 35.3419C68.4231 34.4998 67.7213 33.4789 67.1853 32.2795C66.6749 31.0545 66.4197 29.6508 66.4197 28.0686V27.6092C66.4197 26.0524 66.6749 24.6743 67.1853 23.4749C67.7213 22.2499 68.4231 21.2163 69.2908 20.3741C70.184 19.5319 71.2048 18.8939 72.3533 18.4601C73.5017 18.0262 74.7012 17.8093 75.9517 17.8093C77.2022 17.8093 78.4016 18.0262 79.5501 18.4601C80.6985 18.8939 81.7066 19.5319 82.5743 20.3741C83.4675 21.2163 84.1693 22.2499 84.6797 23.4749C85.2156 24.6743 85.4836 26.0524 85.4836 27.6092V28.0686ZM75.9517 35.0357C76.8704 35.0357 77.7126 34.8826 78.4782 34.5763C79.2693 34.2445 79.9584 33.7724 80.5454 33.1599C81.1323 32.5474 81.5917 31.8201 81.9235 30.9779C82.2552 30.1102 82.4211 29.1404 82.4211 28.0686V27.6092C82.4211 26.5884 82.2552 25.6569 81.9235 24.8147C81.5917 23.947 81.1323 23.2069 80.5454 22.5944C79.9584 21.9819 79.2693 21.5098 78.4782 21.178C77.6871 20.8207 76.8449 20.6421 75.9517 20.6421C75.0584 20.6421 74.2163 20.8207 73.4251 21.178C72.634 21.5098 71.9449 21.9819 71.358 22.5944C70.771 23.2069 70.3116 23.947 69.9799 24.8147C69.6481 25.6569 69.4822 26.5884 69.4822 27.6092V28.0686C69.4822 29.1404 69.6481 30.1102 69.9799 30.9779C70.3116 31.8201 70.771 32.5474 71.358 33.1599C71.9449 33.7724 72.6212 34.2445 73.3868 34.5763C74.178 34.8826 75.0329 35.0357 75.9517 35.0357Z"
              fill="white"
            />
            <path
              d="M108.77 30.5951C108.566 31.6414 108.209 32.6112 107.698 33.5045C107.213 34.3977 106.588 35.176 105.822 35.8396C105.057 36.4776 104.164 36.9752 103.143 37.3325C102.122 37.6898 100.986 37.8685 99.7357 37.8685C98.4087 37.8685 97.1454 37.6515 95.9459 37.2177C94.772 36.7838 93.7384 36.1586 92.8452 35.3419C91.952 34.4998 91.2374 33.4789 90.7015 32.2795C90.191 31.08 89.9358 29.7019 89.9358 28.1451V27.6858C89.9358 26.1545 90.191 24.7764 90.7015 23.5514C91.2374 22.3264 91.952 21.2929 92.8452 20.4507C93.7384 19.6085 94.772 18.9577 95.9459 18.4984C97.1454 18.039 98.4087 17.8093 99.7357 17.8093C100.935 17.8093 102.045 17.9879 103.066 18.3452C104.087 18.7025 104.98 19.2129 105.746 19.8765C106.537 20.5145 107.175 21.2801 107.66 22.1733C108.17 23.0665 108.515 24.0363 108.693 25.0827L105.708 25.7717C105.631 25.1082 105.44 24.4702 105.133 23.8577C104.853 23.2197 104.457 22.671 103.947 22.2116C103.462 21.7267 102.862 21.3439 102.147 21.0632C101.433 20.7824 100.603 20.6421 99.6592 20.6421C98.7404 20.6421 97.8727 20.8207 97.0561 21.178C96.2649 21.5098 95.5631 21.9947 94.9506 22.6327C94.3381 23.2452 93.8532 23.9853 93.496 24.853C93.1642 25.7207 92.9983 26.6649 92.9983 27.6858V28.1451C92.9983 29.217 93.1642 30.1868 93.496 31.0545C93.8532 31.8967 94.3381 32.6112 94.9506 33.1982C95.5631 33.7852 96.2777 34.2445 97.0944 34.5763C97.911 34.8826 98.7915 35.0357 99.7357 35.0357C100.68 35.0357 101.497 34.8953 102.186 34.6146C102.9 34.3083 103.5 33.9255 103.985 33.4662C104.495 32.9813 104.891 32.4326 105.172 31.8201C105.478 31.2076 105.682 30.5696 105.784 29.906L108.77 30.5951Z"
              fill="white"
            />
            <path
              d="M119.347 26.2311H119.998L127.233 18.3452H130.908V18.5749L123.022 27.2647V27.9537L131.827 37.1029V37.3325H128.152L120.075 28.9873H119.347V37.3325H116.361V10.5359H119.347V26.2311Z"
              fill="white"
            />
            <path
              d="M151.668 34.1169H151.209C150.596 35.393 149.741 36.3372 148.644 36.9497C147.572 37.5622 146.436 37.8685 145.237 37.8685C143.986 37.8685 142.825 37.6643 141.753 37.256C140.681 36.8221 139.737 36.1969 138.92 35.3802C138.129 34.538 137.504 33.5172 137.045 32.3177C136.585 31.1183 136.356 29.7274 136.356 28.1451V27.5326C136.356 25.9759 136.585 24.5978 137.045 23.3983C137.504 22.1988 138.129 21.1908 138.92 20.3741C139.737 19.5319 140.681 18.8939 141.753 18.4601C142.825 18.0262 143.961 17.8093 145.16 17.8093C146.462 17.8093 147.636 18.1028 148.682 18.6898C149.754 19.2512 150.596 20.1317 151.209 21.3311H151.668V18.3452H154.654V33.4279C154.654 34.1935 154.998 34.5763 155.687 34.5763H156.644V37.3325H154.616C153.748 37.3325 153.033 37.0518 152.472 36.4904C151.936 35.9289 151.668 35.2143 151.668 34.3466V34.1169ZM145.543 35.0357C146.436 35.0357 147.253 34.8698 147.993 34.538C148.759 34.2063 149.409 33.7341 149.945 33.1216C150.481 32.5091 150.902 31.7818 151.209 30.9396C151.515 30.0719 151.668 29.1149 151.668 28.0686V27.6092C151.668 26.5884 151.515 25.6569 151.209 24.8147C150.902 23.947 150.468 23.2069 149.907 22.5944C149.371 21.9819 148.72 21.5098 147.955 21.178C147.215 20.8207 146.411 20.6421 145.543 20.6421C144.65 20.6421 143.833 20.808 143.093 21.1397C142.353 21.4715 141.702 21.9436 141.141 22.5561C140.605 23.1431 140.184 23.8704 139.877 24.7381C139.571 25.5803 139.418 26.5118 139.418 27.5326V28.1451C139.418 30.3144 139.979 32.0115 141.102 33.2365C142.251 34.436 143.731 35.0357 145.543 35.0357Z"
              fill="white"
            />
            <path
              d="M161.326 34.5763H168.217V13.2922H161.556V10.5359H171.203V34.5763H178.093V37.3325H161.326V34.5763Z"
              fill="white"
            />
            <path
              d="M190.661 12.6797C190.661 11.9396 190.916 11.3143 191.427 10.8039C191.963 10.268 192.601 10 193.341 10C194.081 10 194.706 10.268 195.217 10.8039C195.753 11.3143 196.02 11.9396 196.02 12.6797C196.02 13.4198 195.753 14.0578 195.217 14.5937C194.706 15.1041 194.081 15.3593 193.341 15.3593C192.601 15.3593 191.963 15.1041 191.427 14.5937C190.916 14.0578 190.661 13.4198 190.661 12.6797ZM185.225 34.5763H191.886V21.1015H185.914V18.3452H194.872V34.5763H201.074V37.3325H185.225V34.5763Z"
              fill="white"
            />
            <path
              d="M233.827 28.7576C233.904 30.6461 234.491 32.1646 235.588 33.313C236.685 34.4615 238.217 35.0357 240.182 35.0357C241.075 35.0357 241.853 34.9336 242.517 34.7294C243.18 34.5253 243.742 34.2445 244.201 33.8873C244.686 33.53 245.069 33.1216 245.35 32.6623C245.656 32.1774 245.898 31.667 246.077 31.131L248.91 31.8967C248.374 33.6576 247.378 35.0995 245.924 36.2224C244.495 37.3198 242.555 37.8685 240.105 37.8685C238.752 37.8685 237.502 37.6388 236.354 37.1794C235.231 36.6945 234.261 36.0182 233.444 35.1505C232.628 34.2828 231.99 33.2492 231.53 32.0498C231.071 30.8503 230.841 29.5232 230.841 28.0686V27.1498C230.841 25.8228 231.071 24.585 231.53 23.4366C232.015 22.2882 232.679 21.3056 233.521 20.489C234.363 19.6468 235.345 18.996 236.468 18.5366C237.617 18.0517 238.855 17.8093 240.182 17.8093C241.738 17.8093 243.078 18.1028 244.201 18.6898C245.35 19.2512 246.281 19.953 246.996 20.7952C247.736 21.6374 248.272 22.5561 248.603 23.5514C248.961 24.5467 249.139 25.4655 249.139 26.3076V28.7576H233.827ZM240.182 20.6421C239.339 20.6421 238.548 20.7824 237.808 21.0632C237.094 21.3184 236.456 21.6884 235.894 22.1733C235.358 22.6582 234.912 23.2324 234.554 23.896C234.223 24.534 234.006 25.2358 233.904 26.0014H246.153C246.102 25.1847 245.898 24.4446 245.541 23.7811C245.209 23.1176 244.763 22.5561 244.201 22.0968C243.665 21.6374 243.04 21.2801 242.325 21.0249C241.636 20.7697 240.922 20.6421 240.182 20.6421Z"
              fill="white"
            />
            <path
              d="M254.013 18.3452H260.903V20.8718H261.363C261.848 19.8254 262.537 19.0598 263.43 18.5749C264.323 18.0645 265.344 17.8093 266.492 17.8093C268.406 17.8093 269.95 18.4345 271.124 19.6851C272.298 20.9356 272.923 22.7603 273 25.1592L269.861 25.6186C269.861 23.8577 269.44 22.5944 268.598 21.8288C267.756 21.0376 266.722 20.6421 265.497 20.6421C264.706 20.6421 264.017 20.7952 263.43 21.1015C262.868 21.4077 262.396 21.8288 262.013 22.3647C261.631 22.9007 261.35 23.5259 261.171 24.2405C260.993 24.9551 260.903 25.7207 260.903 26.5373V34.5763H265.727V37.3325H253.553V34.5763H257.917V21.1015H254.013V18.3452Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M223.118 21.3822H209.826V34.6741H223.118V21.3822ZM207.168 18.7238V37.3325H225.777V18.7238H207.168Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M208.089 34.5318L222.976 19.6448L224.856 21.5245L209.969 36.4115L208.089 34.5318Z"
              fill="white"
            />
            <rect width="2" height="50" fill="#ADFFD8" />
          </svg>
        </div>

        <span className="block"></span>
      </div>
    </div>
  );
};

export default Header;
