"use client";
import Header from "@/components/header";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../components/ui/button";
import { SendHorizontal } from "lucide-react";
import ResultSection from "../components/result-section";
import Loader from "@/components/loader";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <main className="container justify-between min-h-screen mx-auto">
      <Header />
      {/* hero section  */}
      <div className="text-center relative">
        <h1 className="text-neutral-100 text-7xl font-bold text-center mb-5">
          <span className="block">AI Support</span>
          <span className="text-nowrap text-gradient"> for your writing</span>
        </h1>
        <p className="text-center text-neutral-100">
          Unlock Your Writing Magic. Effortlessly refine your messages
          <br />
          , creating compelling content that bewitches.
          <br />
          Perfect your expression effortlessly
        </p>
        <div className="absolute liner-gradient-hero h-[35vh] w-full top-0 -z-[5]" />
      </div>

      <div>
        <Select>
          <SelectTrigger className="w-[180px] text-neutral-100">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-800 text-neutral-100">
            <SelectGroup className="">
              <SelectItem value="apple" className="hover:bg-neutral-600">
                Apple
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Textarea
        className="bg-neutral-800 text-neutral-100"
        placeholder="Your input here."
      />

      <Button
        disabled={isLoading}
        className="bg-accent text-neutral-100 hover:bg-[#503dee] rounded-xl"
      >
        Enhance
        <SendHorizontal className="ml-2 h-4 w-4" />
      </Button>

      {isLoading ? <Loader /> : <ResultSection text="Hello" />}

      <div className="absolute image-hero-dots w-full h-full top-0 left-0 -z-10 opacity-55" />
      <div className="liner-gradient-blue absolute w-28 h-64 top-[30%] left-[65%]" />
    </main>
  );
}
