"use client";
import { Check, Copy } from "lucide-react";
import copy from "copy-to-clipboard";
import React, { useEffect, useState } from "react";

interface ResultSectionProps {
  text: string;
}

function OutputSection({ text }: ResultSectionProps) {
  const [copying, setCopying] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [completedTyping, setCompletedTyping] = useState(false);

  const handleCopy = () => {
    copy(text);
    setCopying(true);
    setTimeout(() => {
      setCopying(false);
    }, 800);
  };

  useEffect(() => {
    setCompletedTyping(false);

    let i = 0;
    const stringResponse = text;

    const intervalId = setInterval(() => {
      setDisplayText(stringResponse.slice(0, i));

      i++;

      if (i > stringResponse.length) {
        clearInterval(intervalId);
        setCompletedTyping(true);
      }
    }, 20);
  }, [text]);

  return (
    <div className="bg-secondary/15 text-neutral-100 mt-10 rounded-xl px-4 py-5 relative">
      <div className="mb-5">
        <div className="flex flex-row justify-end">
          {copying ? (
            <div className="flex flex-row items-center">
              <Check className="w-4 h-4 mr-2" />
              Copied
            </div>
          ) : (
            <div
              className="flex flex-row items-center cursor-pointer"
              onClick={handleCopy}
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </div>
          )}
        </div>
      </div>
      <p>
        {displayText}
        {!completedTyping && (
          <svg
            viewBox="8 4 8 16"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor"
          >
            <rect x="10" y="6" width="4" height="12" fill="#fff" />
          </svg>
        )}
      </p>
    </div>
  );
}

export default OutputSection;
