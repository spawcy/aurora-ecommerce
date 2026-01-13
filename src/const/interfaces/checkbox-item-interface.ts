export type CheckboxItem = {
  value: string;
  label: string;
  defaultChecked?: boolean;
};

export type RawCheckboxItem = { value: string; label: string; defaultChecked?: boolean } | { value: string; label?: undefined; defaultChecked?: undefined };

export type DynamicCheckboxProps = {
  data: RawCheckboxItem[];
  categoryKey: string;
  selectedValues: string[];
  onCheckedChange: (categoryKey: string, value: string, checked: boolean) => void;
};
