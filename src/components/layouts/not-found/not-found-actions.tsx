"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function NotFoundActions() {
  const router = useRouter();

  return (
    <div className="actions">
      <Button size="lg" onClick={() => router.back()} className="mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition">
        Go Back
      </Button>
      <Button size="lg" onClick={() => router.push("/")} className="mt-8 ml-4 px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/60 transition">
        Go to Homepage
      </Button>
    </div>
  );
}
