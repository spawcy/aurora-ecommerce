import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { DynamicRadioProps } from "@/const/interfaces/radio-item-interface";

export default function DynamicRadio({ data, categoryKey, selectedValue, onValueChange }: DynamicRadioProps) {
  return (
    <RadioGroup value={selectedValue} onValueChange={onValueChange}>
      {data.map((item) => (
        <div key={item.value} className="flex items-center gap-3">
          <RadioGroupItem value={item.value} id={`${categoryKey}-${item.value}`} className="cursor-pointer" />
          <Label htmlFor={`${categoryKey}-${item.value}`} className="cursor-pointer">
            {item.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
