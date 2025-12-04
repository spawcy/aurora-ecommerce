import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function DynamicCheckbox() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="cursor-pointer">
          Ubuntu
        </Label>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="terms-2" defaultChecked />
        <div className="grid gap-2">
          <Label htmlFor="terms-2" className="cursor-pointer">
            Windows
          </Label>
          <p className="text-muted-foreground text-sm">By clicking this checkbox, you agree to the terms and conditions.</p>
        </div>
      </div>
    </div>
  );
}
