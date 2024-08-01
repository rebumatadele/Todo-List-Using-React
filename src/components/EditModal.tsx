import { useState } from "react";

type Type = {
  id: number;
  titleObj: string;
  descriptionObj: string;
};

interface Props {
  edit: Type;
  editItem: (index: number, title: string, description: string) => void;
}

function EditModal({ edit, editItem }: Props) {
  const [show, setShow] = useState(true);
  const [titleState, setTitleState] = useState(edit.titleObj);
  const [descriptionState, setDescriptionState] = useState(edit.descriptionObj);
  return (
    <>
      {show && (
        <div className="modal d-block" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Modal title"
                  aria-label="Modal title"
                  value={titleState}
                  onChange={(e) => setTitleState(e.target.value)}
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setShow(false);
                    editItem(edit.id, edit.titleObj, edit.descriptionObj);
                  }}
                ></button>
              </div>
              <div className="modal-body">
                <textarea
                  className="form-control"
                  placeholder="Modal body text goes here."
                  aria-label="Modal body text"
                  rows={4}
                  value={descriptionState}
                  onChange={(e) => setDescriptionState(e.target.value)}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setShow(false);
                    editItem(edit.id, edit.titleObj, edit.descriptionObj);
                  }}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    console.log(edit.titleObj);
                    editItem(edit.id, titleState, descriptionState);
                    setShow(false);
                  }}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditModal;
