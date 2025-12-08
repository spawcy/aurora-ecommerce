import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { DynamicCheckboxProps } from "@/const/interfaces/checkbox-item";
export function DynamicCheckbox({ data, categoryKey, onCheckedChange, selectedValues }: DynamicCheckboxProps) {
  return (
    <div className="flex flex-col gap-4">
      {data.map((item) => {
        const isChecked = selectedValues.includes(item.value);
        return (
          <div key={item.value} className={`flex items-center gap-3 p-2 rounded-md transition-colors ${isChecked ? "bg-blue-50" : "hover:bg-gray-50"}`}>
            <Checkbox
              id={`${categoryKey}-${item.value}`}
              value={item.value}
              checked={isChecked}
              onCheckedChange={(checked) => {
                const isCheckedValue = checked === true;
                onCheckedChange(categoryKey, item.value, isCheckedValue);
              }}
            />
            <Label htmlFor={`${categoryKey}-${item.value}`} className={`cursor-pointer flex-1 ${isChecked ? "font-medium text-blue-700" : ""}`}>
              {item.label}
            </Label>
            {isChecked && <span className="text-xs text-blue-600 font-medium">✓</span>}
          </div>
        );
      })}
    </div>
  );
}
