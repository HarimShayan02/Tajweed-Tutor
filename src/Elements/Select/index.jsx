import React from "react";
import { Select } from "@radix-ui/themes";

export default function CustomSelect({
  onSelectChange,
  options,
  disabled,
  selectedValue,
  placeholder,
  size,
  isHeight,
  name,
}) {
  return (
    <div className="w-full">
      <Select.Root
        name={name}
        size={size}
        key={selectedValue?.id}
        disabled={disabled}
        value={selectedValue?.id || ""}
        onValueChange={(newValue) => {
          const selectedOption = options?.find(
            (option) => option?.id === newValue,
          );
          if (selectedOption && onSelectChange) {
            onSelectChange(selectedOption);
          }
        }}
      >
        <Select.Trigger
          style={{
            width: "100%",
            height: isHeight && "2.8rem",
            borderRadius: isHeight && "3px",
          }}
          placeholder={placeholder}
          className="relative cursor-pointer rounded-[3px]  text-black disabled:cursor-not-allowed "
        >
          {selectedValue?.name || ""}
        </Select.Trigger>
        <Select.Content
          position="popper"
          className="border border-white !bg-[#e8eef9] "
        >
          {options?.map((option) => (
            <Select.Item
              className={`
                cursor-pointer 
                ${
                  option?.id === selectedValue?.id
                    ? "bg-[#486dfb] text-black "
                    : "text-[#13111A]"
                }
                 py-3 hover:bg-[#486dfb] hover:text-[#13111A] 
              `}
              key={option.id}
              value={option.id || ""}
            >
              {option?.name}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
}
