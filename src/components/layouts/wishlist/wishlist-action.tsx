"use client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function WishListAction() {
  return (
    <Button
      size="lg"
      className="mt-6 px-10"
      onClick={() => {
        toast.warning("this feat is currently in dev mode!");
      }}
    >
      Buy All
    </Button>
  );
}
