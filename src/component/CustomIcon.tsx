import Icon from "@ant-design/icons";

const SearchSvg = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.3846 6.34615C10.3846 5.23437 9.98948 4.28335 9.19922 3.49309C8.40895 2.70282 7.45793 2.30769 6.34615 2.30769C5.23437 2.30769 4.28335 2.70282 3.49309 3.49309C2.70282 4.28335 2.30769 5.23437 2.30769 6.34615C2.30769 7.45793 2.70282 8.40895 3.49309 9.19922C4.28335 9.98948 5.23437 10.3846 6.34615 10.3846C7.45793 10.3846 8.40895 9.98948 9.19922 9.19922C9.98948 8.40895 10.3846 7.45793 10.3846 6.34615ZM15 13.8462C15 14.1587 14.8858 14.4291 14.6575 14.6575C14.4291 14.8858 14.1587 15 13.8462 15C13.5216 15 13.2512 14.8858 13.0349 14.6575L9.94291 11.5745C8.86719 12.3197 7.66827 12.6923 6.34615 12.6923C5.48678 12.6923 4.66496 12.5255 3.88071 12.192C3.09645 11.8585 2.42037 11.4078 1.85246 10.8398C1.28456 10.2719 0.833834 9.59585 0.5003 8.8116C0.166767 8.02734 0 7.20553 0 6.34615C0 5.48678 0.166767 4.66496 0.5003 3.88071C0.833834 3.09645 1.28456 2.42037 1.85246 1.85246C2.42037 1.28456 3.09645 0.833834 3.88071 0.5003C4.66496 0.166767 5.48678 0 6.34615 0C7.20553 0 8.02734 0.166767 8.8116 0.5003C9.59585 0.833834 10.2719 1.28456 10.8398 1.85246C11.4078 2.42037 11.8585 3.09645 12.192 3.88071C12.5255 4.66496 12.6923 5.48678 12.6923 6.34615C12.6923 7.66827 12.3197 8.86719 11.5745 9.94291L14.6665 13.0349C14.8888 13.2572 15 13.5276 15 13.8462Z"
      fill="#fff"
    />
  </svg>
);
const AddToCartSvg = () => (
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.94444 5.71429H8.33333V3.57143H10.4167V2.14286H8.33333V0H6.94444V2.14286H4.86111V3.57143H6.94444V5.71429ZM4.16667 12.1429C3.40278 12.1429 2.78472 12.7857 2.78472 13.5714C2.78472 14.3571 3.40278 15 4.16667 15C4.93056 15 5.55556 14.3571 5.55556 13.5714C5.55556 12.7857 4.93056 12.1429 4.16667 12.1429ZM11.1111 12.1429C10.3472 12.1429 9.72917 12.7857 9.72917 13.5714C9.72917 14.3571 10.3472 15 11.1111 15C11.875 15 12.5 14.3571 12.5 13.5714C12.5 12.7857 11.875 12.1429 11.1111 12.1429ZM4.28472 9.82143L4.30556 9.73571L4.93056 8.57143H10.1042C10.625 8.57143 11.0833 8.27857 11.3194 7.83571L14 2.82857L12.7917 2.14286H12.7847L12.0208 3.57143L10.1042 7.14286H5.22917L5.13889 6.95L3.58333 3.57143L2.92361 2.14286L2.27083 0.714286H0V2.14286H1.38889L3.88889 7.56429L2.95139 9.31429C2.84028 9.51429 2.77778 9.75 2.77778 10C2.77778 10.7857 3.40278 11.4286 4.16667 11.4286H12.5V10H4.45833C4.36806 10 4.28472 9.92143 4.28472 9.82143Z"
      fill="#fff"
    />
  </svg>
);

const AddToCartIcon = (props: any) => (
  <Icon component={AddToCartSvg} {...props} />
);
const SearchIcon = (props: any) => 
<Icon component={SearchSvg} {...props} />;
export { AddToCartIcon, SearchIcon };
