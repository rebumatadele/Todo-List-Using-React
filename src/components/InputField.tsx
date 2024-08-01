import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

interface Props {
  onSubmit: (data: string) => void;
}
function InputField({ onSubmit }: Props) {
  const [value, setValue] = useState("");
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search Through Tasks"
        aria-label="Search Through Tasks"
        aria-describedby="button-addon2"
        value = {value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={() => {
          onSubmit(value);
          setValue("");
        }}
      >
        Search
      </button>
    </div>
  );
}

export default InputField;
