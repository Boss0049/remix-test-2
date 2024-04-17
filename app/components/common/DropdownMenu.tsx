import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "./Icon";

export default function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Icon name="EllipsisVertical" className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-6">
        <DropdownMenuItem>Mark as unread</DropdownMenuItem>
        <DropdownMenuItem>Star thread</DropdownMenuItem>
        <DropdownMenuItem>Add label</DropdownMenuItem>
        <DropdownMenuItem>Mute thread</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
