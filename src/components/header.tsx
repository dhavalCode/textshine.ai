"use client";

import React from "react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

function header() {
  const repoLink = "https://github.com/dhavalCode/textshine.ai";

  return (
    <header className="flex justify-between pt-10 w-full">
      <h1 className="text-secondary text-2xl font-bold">TextShine.ai</h1>
      <div className="flex items-center lg:order-2 gap-x-3">
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
