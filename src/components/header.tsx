"use client";

import React from "react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

function header() {
  const repoLink = "https://github.com/dhavalCode/textshine.ai";

  const handleGithubNavigation = () => {
    if (window) {
      window.open(repoLink, "_black");
    }
  };

  return (
    <header className="flex justify-between pt-10 w-full items-center lg:px-5 xl:px-0">
      <h1 className="text-secondary text-xl sm:text-2xl font-bold">
        TextShine.ai
      </h1>
      <div className="flex items-center lg:order-2 gap-x-3">
        <Link
          target="_blank"
          className="text-neutral-100 mr-2 hover:text-neutral-300 hidden sm:block"
          href="//dhavalcode.com"
        >
          DhavalCode.com
        </Link>
        <div className="hidden sm:block">
          <Button
            onClick={handleGithubNavigation}
            className="bg-accent rounded-2xl text-neutral-100 hover:bg-[#503dee]"
          >
            <Github className="w-5 h-5 mr-2" />
            Give a star
          </Button>
        </div>
        <span
          onClick={handleGithubNavigation}
          className="hover:scale-110 transition sm:hidden text-neutral-100 cursor-pointer"
        >
          <Github className="w-6 h-6" />
        </span>
      </div>
    </header>
  );
}

export default header;
