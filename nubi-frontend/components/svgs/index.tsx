interface SVGProps {
  color?: string;
}

export function Clock({ color }: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M12 7V12L10.5 14.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke={color ? color : "#1F2937"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}

export function Level({ color }: SVGProps) {
  return (
    <svg
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="#1F2937"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <style type="text/css"> </style>{" "}
        <g>
          {" "}
          <polygon
            className="st0"
            points="354.38,53.422 354.38,168.726 226.378,168.726 226.378,284.03 98.38,284.03 98.38,399.334 0,399.334 0,458.578 157.62,458.578 157.62,343.274 285.622,343.274 285.622,227.97 413.625,227.97 413.625,112.666 512,112.666 512,53.422 "
          ></polygon>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
