import { Input, Label } from "./styles";
import { Column } from "../column";

export function InputTextView({
  className,
  value,
  label,
  placeholder,
  mt,
  width,
}) {
  return (
    <Column mt={mt} className={className} width={width}>
      <Label>{label}</Label>
      <Input placeholder={placeholder} value={value} />
    </Column>
  );
}