import { DropdownMenu, DropdownMenuTrigger, Button } from "@cyanium/ui";
import { ChevronDown } from "lucide-react";

export function MenuPrimitive() {
  return (
    <div className="flex w-80">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="stroke" intent="neutral" trailingIcon={<ChevronDown className="size-4" />}>
            Account
          </Button>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </div>
  );
}
