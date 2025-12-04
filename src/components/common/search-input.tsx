import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { useDebounce } from "@/hooks/use-debounce";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function SearchInput({ search, setSearch }: any) {
  const [inputValue, setInputValue] = useState(search);
  useEffect(() => {
    setInputValue(search);
  }, [search]);
  const debouncedSearchTerm = useDebounce(inputValue, 500);
  useEffect(() => {
    if (debouncedSearchTerm !== search) {
      setSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <InputGroup className="max-w-xs ml-auto py-4 ">
      <InputGroupInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Search..." />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}
