import { useState } from "react";

interface Props {
  onSubmit: (
    titleParam: string,
    descriptionParam: string,
    date: string
  ) => void;
}

function InputView({ onSubmit }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateState, setDateState] = useState("");

  return (
    <div className="container" style={{ maxWidth: "800px", margin: "auto" }}>
      {/* Combined Heading and Form Section */}
      <div
        className="border border-warning p-4 rounded mb-4"
        style={{ borderColor: "#fda52d" }} // Heavier primary color for border
      >
        {/* Heading */}
        <h1 className="display-4 text-center mb-4" style={{ color: "#fdbb2d" }}>
          Add Your Todo's
        </h1>

        {/* Form */}
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <div className="mb-3">
              <input
                type="text"
                className="form-control border-warning"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ borderColor: "#fda52d" }} // Heavier primary color for border
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <input
                type="date"
                className="form-control border-warning"
                onChange={(e) => setDateState(e.target.value)}
                style={{ borderColor: "#fda52d" }} // Heavier primary color for border
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <textarea
            className="form-control border-warning"
            rows={3}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ borderColor: "#fda52d" }} // Heavier primary color for border
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-warning text-white fw-bold px-4 py-2 shadow-sm"
            type="button"
            onClick={() => {
              onSubmit(title, description, dateState);
              setTitle("");
              setDescription("");
              setDateState("");
            }}
            style={{ backgroundColor: "#fdbb2d", borderColor: "#fdbb2d" }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputView;
