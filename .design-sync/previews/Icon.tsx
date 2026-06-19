import { Icon } from "@cyanium/ui";
import { Bell, Settings, Search, Heart } from "lucide-react";

export function Default() {
  return (
    <Icon>
      <Bell className="size-5" />
    </Icon>
  );
}

export function Sizes() {
  return (
    <div className="flex items-center gap-4">
      <Icon size="xs">
        <Settings className="size-3.5" />
      </Icon>
      <Icon size="sm">
        <Settings className="size-4" />
      </Icon>
      <Icon size="md">
        <Settings className="size-5" />
      </Icon>
      <Icon size="lg">
        <Settings className="size-6" />
      </Icon>
    </div>
  );
}

export function Muted() {
  return (
    <div className="flex items-center gap-4">
      <Icon>
        <Search className="size-5" />
      </Icon>
      <Icon muted>
        <Heart className="size-5" />
      </Icon>
    </div>
  );
}
