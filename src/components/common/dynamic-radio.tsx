import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function DynamicRadio() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id="r1" className="cursor-pointer" />
        <Label htmlFor="r1" className="cursor-pointer">
          IoT Gateway
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="comfortable" id="r2" className="cursor-pointer" />
        <Label htmlFor="r2" className="cursor-pointer">
          Router
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="compact" id="r3" className="cursor-pointer" />
        <Label htmlFor="r3" className="cursor-pointer">
          Repeater
        </Label>
      </div>
    </RadioGroup>
  );
}
