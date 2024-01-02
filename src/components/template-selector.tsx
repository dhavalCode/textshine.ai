"use-client";

import React from "react";
import { Template } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TemplateSelectorProps {
  value: number;
  options: Template[];
  onSelect: (newVal: string) => void;
}

function TemplateSelector({ value, options, onSelect }: TemplateSelectorProps) {
  return (
    <Select
      value={value.toString()}
      onValueChange={(newVal) => onSelect(newVal)}
    >
      <SelectTrigger className="w-full sm:max-w-80  text-neutral-100">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent className="bg-neutral-800 text-neutral-100">
        <SelectGroup className="">
          {options.map((option) => (
            <SelectItem
              value={option.id.toString()}
              key={option.id.toString()}
              className="hover:bg-neutral-600"
            >
              {option.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default TemplateSelector;
