import { Tabs, TabsContent } from "@cyanium/ui";

export function Line() {
  return (
    <div className="w-96">
      <Tabs
        variant="line"
        defaultValue="overview"
        items={[
          { value: "overview", label: "Overview", badge: 3 },
          { value: "cards", label: "My Cards" },
          { value: "transactions", label: "Transactions" },
        ]}
      />
    </div>
  );
}

export function Pill() {
  return (
    <div className="w-96">
      <Tabs
        variant="pill"
        defaultValue="monthly"
        items={[
          { value: "monthly", label: "Monthly" },
          { value: "quarterly", label: "Quarterly" },
          { value: "yearly", label: "Yearly" },
        ]}
      />
    </div>
  );
}

export function WithContent() {
  return (
    <div className="w-96">
      <Tabs
        variant="line"
        defaultValue="activity"
        items={[
          { value: "activity", label: "Activity" },
          { value: "members", label: "Members", badge: 12 },
        ]}
      >
        <TabsContent value="activity" className="pt-4 text-sm text-text-sub">
          Sarah invited 3 people and updated billing earlier today.
        </TabsContent>
        <TabsContent value="members" className="pt-4 text-sm text-text-sub">
          12 members across 2 teams have access to this workspace.
        </TabsContent>
      </Tabs>
    </div>
  );
}
