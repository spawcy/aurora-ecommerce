export interface DynamicRadioProps {
  data: {
    value: string;
    label: string;
  }[];
  categoryKey: string;
  selectedValue: string;
  onValueChange: (value: string) => void;
}
