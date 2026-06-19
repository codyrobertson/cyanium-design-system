import { ProgressBar } from "@cyanium/ui";

export function Linear() {
  return (
    <div className="w-[420px] space-y-5">
      <ProgressBar value={68} showValue label="Weekly limit" />
      <ProgressBar value={32} showValue label="Storage used" color="blue" />
      <ProgressBar value={90} showValue label="Almost full" color="orange" />
      <ProgressBar value={100} showValue label="Complete" color="green" />
    </div>
  );
}

export function Colors() {
  return (
    <div className="w-[420px] space-y-4">
      <ProgressBar value={45} color="gray" label="Gray" showValue />
      <ProgressBar value={55} color="blue" label="Blue" showValue />
      <ProgressBar value={65} color="green" label="Green" showValue />
      <ProgressBar value={75} color="orange" label="Orange" showValue />
      <ProgressBar value={85} color="red" label="Red" showValue />
    </div>
  );
}

export function Circular() {
  return (
    <div className="flex items-center gap-8">
      <ProgressBar variant="circular" value={25} showValue color="blue" />
      <ProgressBar variant="circular" value={60} showValue color="green" />
      <ProgressBar variant="circular" value={92} showValue color="orange" />
    </div>
  );
}
