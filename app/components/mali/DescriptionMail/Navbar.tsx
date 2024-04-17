import CalendarCommon from "@/components/common/Calendar";
import Dropdown from "@/components/common/DropdownMenu";
import Icon from "@/components/common/Icon";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface MenuProps {
  id: number;
  label: string;
  icon: string;
  isLast?: boolean;
}

function Navbar({ menuContents }: { menuContents: MenuProps[] }) {
  return (
    <div className="flex items-center justify-start">
      <TooltipProvider>
        {menuContents?.map((menu) => {
          const { id, label, icon, isLast } = menu;
          return (
            <>
              {icon === "EllipsisVertical" ? (
                <Dropdown />
              ) : (
                <Tooltip key={id}>
                  <TooltipTrigger>
                    {icon === "Clock" ? (
                      <CalendarCommon />
                    ) : (
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                        data-state="closed"
                      >
                        <Icon name={icon} className="h-5 w-5" />
                      </button>
                    )}
                  </TooltipTrigger>
                  {isLast && <div className="h-6 border mx-3" />}
                  <TooltipContent
                    side="top"
                    className="bg-primary text-primary-foreground"
                  >
                    <p>{label}</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </>
          );
        })}
      </TooltipProvider>
    </div>
  );
}

export default Navbar;
