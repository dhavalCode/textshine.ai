import Image from "next/image";
import React from "react";
import loaderSvg from "@/assets/loader.svg";

function Loader() {
  return <Image src={loaderSvg} width={150} height={150} alt="Loading..." />;
}

export default Loader;
