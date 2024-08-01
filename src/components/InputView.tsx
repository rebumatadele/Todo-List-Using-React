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
    <>
      <h1 className="display-4">Add Your Todo's</h1>
      <div className="d-flex align-items-center mb-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="input-group date">
          <input
            type="date"
            className="form-control"
            onChange={(e) => setDateState(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          rows={3}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="d-flex align-items-center mb-3">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={() => {
            onSubmit(title, description, dateState);
            setTitle("");
            setDescription("");
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}
export default InputView;
