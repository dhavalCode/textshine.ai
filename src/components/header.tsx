"use client";

import React from "react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

function header() {
  const repoLink = "https://github.com/dhavalCode/textshine.ai";

  return (
    <header className="flex justify-between pt-10 w-full items-center">
      <h1 className="text-secondary text-2xl font-bold">TextShine.ai</h1>
      <div className="flex items-center lg:order-2 gap-x-3">
        <Link
          target="_blank"
          className="text-neutral-100 mr-2 hover:text-neutral-300"
          href="//dhavalcode.com"
        >
          dhavalcode.com
        </Link>
        <Button
          onClick={() => {
            if (window) {
              window.open(repoLink, "_black");
            }
          }}
          className="bg-accent rounded-2xl text-neutral-100 hover:bg-[#503dee]"
        >
          <Github className="w-5 h-5 mr-2" />
          Give a star
        </Button>
      </div>
    </header>
  );
}

export default header;
