import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

interface Props {
  onSubmit: (data: string) => void;
}

function InputField({ onSubmit }: Props) {
  const [value, setValue] = useState("");

  return (
    <div className="input-group mb-3" style={{ maxWidth: "600px", margin: "auto" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Search Through Tasks"
        aria-label="Search Through Tasks"
        aria-describedby="button-addon2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          borderColor: "#fddc8a", // Lighter primary color
          borderRadius: "0.25rem", // Bootstrap default radius
        }}
      />
      <button
        className="btn"
        type="button"
        id="button-addon2"
        onClick={() => {
          onSubmit(value);
          setValue("");
        }}
        style={{
          backgroundColor: "#fddc8a", // Lighter primary color
          borderColor: "#fddc8a",
          color: "#fff", // White text color for contrast
        }}
      >
        Search
      </button>
    </div>
  );
}

export default InputField;
