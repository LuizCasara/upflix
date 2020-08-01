import React from "react";

function FormField({ label, type, name, value, onChange }) {
  return (
    <div>
      <label>
        {type === "area" &&
            <textArea placeholder={label} type={type} name={name} value={value} onChange={onChange} />
        }
        {type !== "area" &&
            <input placeholder={label} type={type} name={name} value={value} onChange={onChange} />
        }
      </label>
    </div>
  );
}

export default FormField;
