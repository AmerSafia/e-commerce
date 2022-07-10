import React from "react";

export const Input = ({ type="text", placeholder, label,onSetInput, name, value }) => {
  return (
    <div className="col-Custom mb-3">
      <label  className="form-label">{label}</label>
      <input
        className="form-control"
        type={type}
        placeholder={placeholder}
        onChange={onSetInput}
        name={name}
        value={value}
      />
    </div>
  );
};
