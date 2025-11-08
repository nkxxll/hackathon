import { Input } from "./ui/input";

export interface SearchProps {
  value: string;
  setValue: (value: string) => void;
}
export default function Search({ value, setValue }: SearchProps) {
  return (
    <Input
      placeholder="Search 🔍"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      }}
    />
  );
}
