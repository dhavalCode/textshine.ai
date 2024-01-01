"use client";

import React, { useState } from "react";
import axios from "axios";
import { Template } from "@prisma/client";
import { SendHorizontal } from "lucide-react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Loader from "@/components//loader";
import OutputSection from "@/components/output-section";
import TemplateSelector from "@/components/template-selector";
import { publicAppUrl } from "@/utils/constants";

interface PlaygroundSectionProps {
  templateOptions: Template[];
}

function PlaygroundSection({ templateOptions }: PlaygroundSectionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState(1);
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleGenerate = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${publicAppUrl}/api/generate`, {
        inputText,
        templateId: selectedTemplateId,
      });

      if (data?.text) {
        setDisplayText(data.text);
      }
    } catch (error) {
      console.log("error");
    } finally {
      setIsLoading(false);
    }
  };

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
        value={inputText}
        onChange={(event) => {
          setInputText(event.target.value);
        }}
      />

      <Button
        disabled={isLoading}
        className="bg-accent text-neutral-100 hover:bg-[#503dee] rounded-xl"
        onClick={handleGenerate}
      >
        Generate
        <SendHorizontal className="ml-2 h-4 w-4" />
      </Button>

      {isLoading && <Loader />}
      {!isLoading && displayText.length > 0 && (
        <OutputSection text={displayText} />
      )}
    </>
  );
}

export default PlaygroundSection;
