"use client";

import React, { useState } from "react";
import { Template } from "@prisma/client";
import { SendHorizontal } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Loader from "@/components//loader";
import OutputSection from "@/components/output-section";
import TemplateSelector from "./template-selector";

interface PlaygroundSectionProps {
  templateOptions: Template[];
}

function PlaygroundSection({ templateOptions }: PlaygroundSectionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState(1);

  return (
    <>
      <TemplateSelector
        value={selectedTemplateId}
        options={templateOptions}
        onSelect={(val) => setSelectedTemplateId(Number(val))}
      />
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

      {isLoading ? <Loader /> : <OutputSection text="Hello" />}
    </>
  );
}

export default PlaygroundSection;
