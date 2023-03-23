import { LabelInputProps } from "./LabelInput.interface";

const LabelInput = ({ labelText, ...inputAttributes }: LabelInputProps) => {
  return (
    <label className="flex flex-col gap-1">
      <span>{labelText}</span>
      <input
        {...inputAttributes}
        className="p-2 border rounded border-gray-200 focus:border-teal-600 focus:outline-none"
      />
    </label>
  );
};

export default LabelInput;
