import { useState } from "react";
import Banner from "./components/Banner";
import InputView from "./components/InputView";
import ListView from "./components/ListView";
import EditModal from "./components/EditModal";
type Type = {
  id: number;
  titleObj: string;
  descriptionObj: string;
};

function App() {
  const [tasks, setTask] = useState<Type[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [edited, setEdited] = useState(-1);
  const [date, setDate] = useState("No Deadline");
  const [blur, setBlur] = useState(false);

  const handleSubmit = (title: string, description: string, date: string) => {
    const myTodo: Type = {
      id: tasks.length + 1,
      titleObj: title,
      descriptionObj: description,
    };
    setDate(date);
    setTask([...tasks, myTodo]);
  };

  // Edit Handling
  const handleEdit = (id: number) => {
    const index = tasks.findIndex((item) => item.id === id);
    setShowModal(true);
    setEdited(index);
    setBlur(true);
  };

  const updateItem = (id: number, newTitle: string, newDescription: string) => {
    setTask((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, titleObj: newTitle, descriptionObj: newDescription }
          : item
      )
    );
    setShowModal(false);
    setBlur(false);
  };

  // Delete Handling
  const handleDelete = (id: number) => {
    const filtered = tasks.filter((item) => item.id !== id);
    setTask(filtered);
  };

  return (
    <>
      <div className={`container ${blur ? 'blur-background text-center my-4' : 'text-center my-4'}`}>
        <Banner />
      </div>
      <div className={`container ${blur ? 'blur-background' : ''}`}>
        <div className="row">
          <div className="col-md-6">
            <InputView onSubmit={handleSubmit} />
          </div>
          <div className="col-md-6">
            {tasks.length > 0 ? (
              <ListView
                type={tasks}
                editClicked={handleEdit}
                deleteClicked={handleDelete}
                date={date}
              />
            ) : null}
          </div>
        </div>
      </div>
      {showModal && <EditModal edit={tasks[edited]} editItem={updateItem} />}
    </>
  );
}

export default App;
