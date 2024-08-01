type Type = {
  id: number;
  titleObj: string;
  descriptionObj: string;
};

interface Props {
  type: [Type];
  editClicked: (id: number) => void;
  deleteClicked: (id: number) => void;
  date: string;
}

function ListView({ type, editClicked, deleteClicked, date }: Props) {
  return (
    <>
      {type.map((t) => (
        <div className="row mb-3" key={t.id}>
          <div className="col-12">
            <div
              className="border border-warning p-3 mb-3"
              style={{ borderRadius: "0.25rem" }} // Rounded corners
            >
              {/* Header Section with Checkbox and Buttons */}
              <div className="d-flex align-items-center mb-3 border-bottom pb-2">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id={`checkbox-${t.id}`}
                />
                <span className="me-3 fw-bold">{t.titleObj}</span>
                <button
                  className="btn btn-warning text-white ms-auto me-2"
                  onClick={() => editClicked(t.id)}
                  style={{
                    backgroundColor: "#fda52d", // Heavier primary color
                    borderColor: "#fda52d",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#e89d1d"; // Darker shade on hover
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#fda52d"; // Revert to original color
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteClicked(t.id)}
                >
                  Delete
                </button>
              </div>

              {/* Description and Date Section */}
              <div className="mt-2">
                <div className="mb-3">
                  <label htmlFor={`description-${t.id}`} className="form-label">
                    Description
                  </label>
                  <p id={`description-${t.id}`}>{t.descriptionObj}</p>
                </div>
                <div>
                  <label htmlFor={`date-${t.id}`} className="form-label">
                    Deadline
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={`date-${t.id}`}
                    value={date}
                    readOnly
                    style={{ borderColor: "#fda52d" }} // Heavier primary color for border
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ListView;
