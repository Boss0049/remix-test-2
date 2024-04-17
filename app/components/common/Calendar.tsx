import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Icon from "./Icon";
import { useState } from "react";

export default function CalendarCommon() {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="px-2">
          <Icon name="Clock" className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div
          data-side="bottom"
          data-align="center"
          data-state="open"
          role="dialog"
          id="radix-:Reitquulfau6la:"
          className="z-50 rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 flex w-[535px] p-0"
        >
          <div className="flex flex-col gap-2 border-r px-2 py-4">
            <div className="px-4 text-sm font-medium">Snooze until</div>
            <div className="grid min-w-[250px] gap-1">
              <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 justify-start font-normal">
                Later today
                <span className="ml-auto text-muted-foreground">
                  Wed, 4:18 AM
                </span>
              </button>
              <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 justify-start font-normal">
                Tomorrow
                <span className="ml-auto text-muted-foreground">
                  Thu, 12:18 midnight
                </span>
              </button>
              <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 justify-start font-normal">
                This weekend
                <span className="ml-auto text-muted-foreground">
                  Sat, 12:18 midnight
                </span>
              </button>
              <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 justify-start font-normal">
                Next week
                <span className="ml-auto text-muted-foreground">
                  Wed, 12:18 midnight
                </span>
              </button>
            </div>
          </div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
