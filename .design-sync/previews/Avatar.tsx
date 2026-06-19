import { Avatar } from "@cyanium/ui";

export function Default() {
  return <Avatar name="Alex Morgan" color="blue" status="online" />;
}

export function Statuses() {
  return (
    <div className="flex items-center gap-4">
      <Avatar name="Alex Morgan" color="blue" status="online" />
      <Avatar name="Priya Shah" color="green" status="away" />
      <Avatar name="Diego Reyes" color="orange" status="busy" />
      <Avatar name="Mei Lin" color="purple" status="offline" />
    </div>
  );
}

export function Sizes() {
  return (
    <div className="flex items-end gap-4">
      <Avatar name="Sam Lee" color="yellow" size={24} />
      <Avatar name="Sam Lee" color="yellow" size={40} />
      <Avatar name="Sam Lee" color="yellow" size={56} status="online" />
      <Avatar name="Sam Lee" color="yellow" size={72} status="online" />
    </div>
  );
}
