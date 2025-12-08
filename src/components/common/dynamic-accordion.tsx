"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { DynamicCheckbox } from "./dynamic-checkbox";
import DynamicRadio from "./dynamic-radio";
import { ACCORDION_DATA } from "@/const/static/accordion-data-items";

export default function DynamicAccordion() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedItems, setSelectedItems] = useState<{ [key: string]: string[] }>(() => {
    const initialState: { [key: string]: string[] } = {};
    searchParams.forEach((value, key) => {
      if (value) {
        initialState[key] = value.split(",");
      }
    });

    return initialState;
  });

  const handleCheckboxChange = (key: string, itemValue: string, isChecked: boolean) => {
    setSelectedItems((prev) => {
      const currentArray = prev[key] || [];
      let newArray;

      if (isChecked) {
        newArray = [...currentArray, itemValue];
      } else {
        newArray = currentArray.filter((val) => val !== itemValue);
      }

      const newState = { ...prev, [key]: newArray };

      if (newArray.length === 0) {
        delete newState[key];
      }

      return newState;
    });
  };

  useEffect(() => {
    const params = new URLSearchParams();

    Object.keys(selectedItems).forEach((key) => {
      const values = selectedItems[key];
      if (values && values.length > 0) {
        params.set(key, values.join(","));
      }
    });

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    router.replace(newUrl, { scroll: false });
  }, [selectedItems, router, pathname]);

  return (
    <div className="space-y-2">
      {Object.keys(selectedItems).length > 0 && (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Active Filters:</h3>
          <div className="flex flex-wrap gap-2">
            {Object.entries(selectedItems).map(([key, values]) => (
              <div key={key} className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600">{key}:</span>
                <span className="text-sm text-gray-800">{values.join(", ")}</span>
              </div>
            ))}
          </div>
          <button onClick={() => setSelectedItems({})} className="mt-2 text-sm text-red-600 hover:text-red-800">
            Clear All Filters
          </button>
        </div>
      )}

      <Accordion type="multiple" className="w-full" defaultValue={["item-1", "item-2", "item-3"]}>
        {ACCORDION_DATA.map((item) => (
          <AccordionItem key={item.key} value={item.value}>
            <AccordionTrigger className="cursor-pointer">
              {item.trigger}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 text-balance">
              {item.children ? (
                <NestedAccordion data={item.children} onCheckedChange={handleCheckboxChange} selectedItems={selectedItems} />
              ) : (
                <DynamicCheckbox data={item.contentData} categoryKey={item.key} onCheckedChange={handleCheckboxChange} selectedValues={selectedItems[item.key] || []} />
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

interface Level2Item {
  key: string;
  value: string;
  trigger: string;
  contentData: any[];
}

interface NestedAccordionProps {
  data: Level2Item[];
  onCheckedChange: (key: string, itemValue: string, isChecked: boolean) => void;
  selectedItems: { [key: string]: string[] };
}

export function NestedAccordion({ data, onCheckedChange, selectedItems }: NestedAccordionProps) {
  const [selectedRadio, setSelectedRadio] = useState<string>("");

  const handleRadioChange = (key: string, value: string) => {
    setSelectedRadio(value);
    const currentSelection = selectedItems[key] || [];
    currentSelection.forEach((item) => {
      onCheckedChange(key, item, false);
    });
    onCheckedChange(key, value, true);
  };

  return (
    <Accordion type="multiple" className="w-full pl-4 border-b">
      {data.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger className="cursor-pointer text-sm font-medium">
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <DynamicRadio data={item.contentData} categoryKey={item.key} selectedValue={selectedItems[item.key]?.[0] || ""} onValueChange={(value) => handleRadioChange(item.key, value)} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
