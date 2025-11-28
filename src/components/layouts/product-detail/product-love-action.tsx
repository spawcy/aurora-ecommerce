import { Button } from "@/components/ui/button";
import { useState } from "react";
import { HeartIcon } from "lucide-react";
import { toast } from "sonner";

export default function ProductLoveAction() {
  const [lovedBy, setLovedBy] = useState<number>(3);
  const [loved, setLoved] = useState<boolean>(false);

  const increaseLovedBy = () => setLovedBy((prev) => Math.min(100, prev + 1));
  return (
    <Button
      onClick={() => {
        toast.info("feat will be developed next time!");
        setLoved((state) => !state);
      }}
      className="mt-0 !bg-accent w-full h-full py-2"
    >
      <HeartIcon
        className="block opacity-100 text-foreground size-6 aspect-square"
        aria-hidden="true"
      />
    </Button>
  );
}
