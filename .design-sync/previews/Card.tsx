import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Badge,
} from "@cyanium/ui";

export function Basic() {
  return (
    <Card raised padding="lg" className="w-80">
      <CardHeader>
        <CardTitle>Card surface</CardTitle>
        <CardDescription>White fill, keyline border, and a soft radius.</CardDescription>
      </CardHeader>
      <CardContent className="pt-2 text-sm text-text-sub">
        Composable card primitives you assemble from header, content, and footer.
      </CardContent>
    </Card>
  );
}

export function WithFooter() {
  return (
    <Card raised padding="lg" className="w-80">
      <CardHeader>
        <CardTitle>Pro plan</CardTitle>
        <CardDescription>Everything in Starter, plus unlimited seats.</CardDescription>
      </CardHeader>
      <CardContent className="pt-2 text-sm text-text-sub">
        $48 per editor / month, billed annually.
      </CardContent>
      <CardFooter className="flex justify-end gap-2 pt-4">
        <Button variant="stroke" intent="neutral" size="small">Compare</Button>
        <Button intent="primary" size="small">Upgrade</Button>
      </CardFooter>
    </Card>
  );
}

export function Padding() {
  return (
    <div className="flex flex-wrap items-start gap-3">
      <Card padding="none" className="w-44">
        <div className="p-3 text-sm">padding="none"</div>
      </Card>
      <Card padding="md" className="w-44 text-sm">padding="md"</Card>
      <Card raised padding="lg" className="w-44 text-sm">
        <Badge color="green" dot>raised</Badge>
        <div className="pt-2">padding="lg"</div>
      </Card>
    </div>
  );
}
