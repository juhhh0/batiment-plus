import React from "react";

export default function Input({ label, type, name, required, style }: { label: string, type: string, name: string, required?: boolean, style?: string}) {
  return (
    <div className={`flex-col flex gap-1 ${style || ""}`}>
      <label htmlFor={name}>
        {label}
        {required && <span className="text-red-500 mx-1">*</span>}
      </label>
      <input type={type} name={name} required={required} />
    </div>
  );
}
