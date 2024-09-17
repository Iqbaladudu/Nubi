import Image from "next/image";
import React from "react";
import logoImage from "@/assets/logo/nubiDarkLogo.png";
import useIsSecondary from "@/hooks/useIsSecondary";
const CopyRight = () => {
  const { isSecondary } = useIsSecondary();
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-10 lg:mt-4 items-center border-t border-darkcolor">
        <div>
          <p className="text-base text-center sm:text-start text-darkgray">
            © 2024 Powered by{" "}
            <a href="#" className="hover:text-primaryColor">
              Nubi Academy
            </a>{" "}
            . All Rights Reserved.
          </p>
        </div>

        <div>
          <ul className="flex items-center justify-center sm:justify-end">
            <li>
              <a
                href="#"
                className="text-base text-darkgray hover:text-primaryColor pr-4 border-r border-darkgray leading-1"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-darkgray hover:text-primaryColor pl-4"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
