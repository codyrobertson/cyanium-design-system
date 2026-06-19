import { Tooltip, TooltipProvider, Button } from "@cyanium/ui";
import { Info } from "lucide-react";

export function Variants() {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex w-80 items-center gap-4">
        <Tooltip content="Adjust spending limit" variant="dark">
          <Button variant="stroke" intent="neutral">
            Dark
          </Button>
        </Tooltip>
        <Tooltip content="Adjust spending limit" variant="light">
          <Button variant="stroke" intent="neutral" iconOnly aria-label="More info">
            <Info className="size-5" />
          </Button>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
