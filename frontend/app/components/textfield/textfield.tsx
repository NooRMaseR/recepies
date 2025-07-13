"use client";

import styles from './textfield.module.css';
import React from "react";

interface TextFieldProps {
  type?: React.HTMLInputTypeAttribute;
  label: string;
  id: string;
  fieldType?: "input" | "textarea";
  inputType?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  autoComplete?: React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>['autoComplete'];
  name: string;
  required?: boolean;
  onChange: (text: string) => void;
}

export default function TextField({
  type = "text",
  name,
  label,
  id,
  onChange,
  fieldType = "input",
  inputType = "text",
  required = false,
  autoComplete
}: TextFieldProps) {
  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.textField}>
      <label htmlFor={id}>{label}</label>
      {fieldType === "input" ? (
        <input id={id} type={type} name={name} inputMode={inputType} onChange={onInputChange} required={required} autoComplete={autoComplete} />
      ) : (
        <textarea id={id} name={name} onChange={onInputChange} required={required} autoComplete={autoComplete}></textarea>
      )}
    </div>
  );
}
