import { Check, Copy } from "lucide-react";
import React from "react";

function ResultSection() {
  return (
    <div className="bg-neutral-300 text-neutral-100 mt-10">
      <div className="flex flex-row justify-end p-2">
        <div className="flex flex-row items-center cursor-pointer">
          <Copy className="w-4 h-4 mr-2" />
          Copy
        </div>
        <div className="flex flex-row items-center">
          <Check className="w-4 h-4 mr-2" />
          Copied
        </div>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        recusandae corporis natus, ab hic sint minus inventore atque non totam
        omnis labore cum suscipit? Facilis nulla excepturi aperiam non magnam.
      </p>
    </div>
  );
}

export default ResultSection;
