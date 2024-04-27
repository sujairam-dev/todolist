import { Grid, TextInput, Modal, Button, Textarea } from "@mantine/core";
import { useRef, useState } from "react";
import { v4 as generateId } from 'uuid';
import useTodoListStore from "../../store/todoItems.store";

interface ITaskFormProps {
  onClose: () => void;
  display: boolean;
}
export default function TaskForm(props: ITaskFormProps) {
  const { display, onClose } = props;
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const createNewTask = useTodoListStore((state) => state.addTodo);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClose = () => {

    //Reset form elements before closing

    titleRef.current = "";
    descriptionRef.current = "";
    setErrorMessage("");
    setLoading(false)
    onClose();
  };

  
  const handleSubmit = () => {
    setLoading(true);

    //Checking if the title field empty and throwing an error when validation fails
    if (titleRef.current === "") {
      setErrorMessage("Title is required");
      setLoading(false)
      return;
    }
    createNewTask({
      id: generateId(),
      title: titleRef.current || "Default Task",
      description: descriptionRef.current || "",
      taskCompleted: false,
      createdDate: new Date().toDateString(),
    });
    handleClose();
  };


  return (
    <Modal title="New Task" opened={display} onClose={handleClose} centered>
      <Grid>
        <Grid.Col span={12}>
          <TextInput
            disabled={loading}
            label="Title"
            required
            error={errorMessage}
            max={100}
            onChange={(event) => {
              setErrorMessage("");
              titleRef.current = event.target.value;
            }}
            placeholder="Title (maximum 100 characters)"
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Textarea
          disabled={loading}
            label="Description"
            placeholder="Description"
            onChange={(event) => (descriptionRef.current = event.target.value)}
          />
        </Grid.Col>
      </Grid>
      <Button loading={loading} mt="sm" onClick={handleSubmit}>
        Submit
      </Button>
    </Modal>
  );
}
