import Image from "next/image";
import React from "react";
import loaderSvg from "@/assets/loader.svg";

function Loader() {
  return (
    <div className="w-full flex flex-row justify-center mt-5">
      <Image src={loaderSvg} width={120} height={120} alt="Loading..." />
    </div>
  );
}

export default Loader;
