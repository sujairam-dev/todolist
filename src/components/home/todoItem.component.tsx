import {
  Card,
  Checkbox,
  Button,
  Flex,
  Text,
  Group,
} from "@mantine/core";
import { TodoItem } from "../../interfaces/todo.interface";
import { IconTrash } from "@tabler/icons-react";
import useTodoListStore from "../../store/todoItems.store";

interface ITodoItemProps {
  data: TodoItem;
}

export default function TaskCard(props: ITodoItemProps) {
  const { data } = props;
  const updateTodoItem = useTodoListStore((state) => state.updateTodo);
  const deleteTodoItem = useTodoListStore((state) => state.removeTodo);

  const handleTaskStatusToggle = (event: any) => {
    updateTodoItem({ ...data, taskCompleted: event.currentTarget.checked });
  };

  const handleDelete = () => {
    deleteTodoItem(data.id);
  };

  return (
    <Card radius="md" withBorder m="md" w={{md:800,sm:600, xs:500}}>
      <Flex align="center" justify="space-between" gap="md">
        <Group>
          <Checkbox
            defaultChecked={data.taskCompleted}
            color="green"
            onChange={handleTaskStatusToggle}
          />
          <Flex direction="column">
            <Text size="lg" fw={500} td={ data.taskCompleted ? "line-through" : ""}>{data.title}</Text>
            <Text size="sm" td={ data.taskCompleted ? "line-through" : ""}  lineClamp={1}>{data.description}</Text>
          </Flex> 
        </Group>
        <Button variant="light" color="red" onClick={handleDelete} >
          <IconTrash />
        </Button>
      </Flex>
    </Card>
  );
}
