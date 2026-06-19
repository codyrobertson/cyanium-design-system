import { Pagination } from "@cyanium/ui";

export function Default() {
  return <Pagination total={12} page={3} />;
}

export function FirstPage() {
  return <Pagination total={8} page={1} />;
}

export function WideRange() {
  return <Pagination total={42} page={20} siblings={2} />;
}
