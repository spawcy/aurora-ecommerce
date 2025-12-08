export interface CheckboxItem {
  value: string;
  label: string;
  defaultChecked?: boolean;
}

export interface DynamicCheckboxProps {
  data: CheckboxItem[];
  categoryKey: string;
  onCheckedChange: (categoryKey: string, itemValue: string, isChecked: boolean) => void;
  selectedValues: string[];
}
