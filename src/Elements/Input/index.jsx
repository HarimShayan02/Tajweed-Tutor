import React, { useState } from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";

const Input = ({
  type = "text",
  placeholder,
  onChange,
  className,
  disabled,
  value,
  name,
}) => {
  const [inputType, setInputType] = useState(type);

  const handlePhoneChange = (phoneNumber) => {
    if (onChange && phoneNumber) {
      onChange(phoneNumber);
    }
  };

  return (
    <div>
      {type === "number" ? (
        <div>
          <PhoneInputWithCountrySelect
            defaultCountry="US"
            value={value}
            flag={true}
            onChange={handlePhoneChange}
            className={`font-poppin ${className || ""}`}
            placeholder={placeholder}
          />
        </div>
      ) : (
        <input
          className={`font-poppin ${className || ""}`}
          type={type === "password" ? inputType : type}
          onChange={(e) => onChange && onChange(e)}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          name={name}
        />
      )}
    </div>
  );
};

export default Input;
