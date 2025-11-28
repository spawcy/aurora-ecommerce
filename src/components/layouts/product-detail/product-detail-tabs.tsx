import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductDetailTabs() {
  return (
    <Tabs defaultValue="tab-1" className="items-start">
      <TabsList className="h-auto gap-2 rounded-none border-b bg-transparent px-0 py-1 text-foreground">
        <TabsTrigger
          value="tab-1"
          className="cursor-pointer relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
        >
          Details
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="cursor-pointer relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
        >
          Additional Information
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className="cursor-pointer relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
          disabled
        >
          Reviews
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1">
        <p className="p-4 text-muted-foreground leading-relaxed">
          The DCS367B 20V MAX* XR® COMPACT Reciprocating Saw is a lightweight,
          compact saw designed to make cutting in between studs and in other
          tight spots easier than with traditional reciprocating saws. The
          brushless motor helps to provide up to 2.5x more run time** to get the
          job done.
        </p>
      </TabsContent>
      <TabsContent value="tab-2">
        <p className="p-4 text-center text-muted-foreground">
          Content for Tab 2
        </p>
      </TabsContent>
      <TabsContent value="tab-3">
        <p className="p-4 text-center text-muted-foreground">
          Content for Tab 3
        </p>
      </TabsContent>
    </Tabs>
  );
}
