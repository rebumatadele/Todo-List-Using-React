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
          <div className="col-12 mb-2">
            <div className="d-flex align-items-center border-bottom pb-2">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id={`checkbox-${t.id}`}
              />
              <span className="me-3">{t.titleObj}</span>
              <button
                className="btn btn-secondary ms-auto me-2"
                onClick={() => editClicked(t.id)}
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
          </div>

          <div className="col-12 mt-2">
            <div
              className="border p-3 mb-2"
              style={{ maxHeight: "200px", overflowY: "auto" }}
            >
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
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ListView;
