"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Icon from "./Icon";

const mailList = [
  {
    value: "alicia@example.com",
    label: "Alicia@example.com",
    icon: "Triangle",
  },
  {
    value: "alicia@gmail.com",
    label: "Alicia@gmail.com",
    icon: "Mail",
  },
  {
    value: "alicia@me.com",
    label: "Alicia@me.com",
    icon: "Cloud",
  },
];

interface PropsType {
  isSmallSize: boolean;
}

export default function Combobox(props: PropsType) {
  const { isSmallSize } = props;
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("alicia@example.com");

  const renderMailSelect = () => {
    const findMail = mailList.find((mail) => mail.value === value);
    return (
      <div className={`${isSmallSize ? "w-full" : "w-4/5 flex items-center"}`}>
        <Icon name={findMail?.icon || ""} className="mr-2" />
        {isSmallSize || findMail?.label}
      </div>
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-full  ${isSmallSize ? "px-1.5" : "justify-between"}`}
        >
          {value ? renderMailSelect() : "Select mail..."}
          {isSmallSize || (
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-max-[200px] p-0 ml-6">
        <Command>
          <CommandEmpty>No mail found.</CommandEmpty>
          <CommandGroup>
            {mailList.map((mail) => (
              <CommandItem
                className="flex justify-between"
                key={mail.value}
                value={mail.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <div className={`${"w-4/5 flex items-center"}`}>
                  <Icon name={mail.icon} color="#000" className="mr-2" />
                  {mail.label}
                </div>
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === mail.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
