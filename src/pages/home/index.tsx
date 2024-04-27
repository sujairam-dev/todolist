import {
  Button,
  Container,
  Flex,
  Grid,
  ScrollArea,
  TextInput,
  Title,
} from "@mantine/core";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import TaskCard from "../../components/home/todoItem.component";
import useTodoListStore from "../../store/todoItems.store";
import { useState } from "react";
import TaskForm from "../../components/home/taskForm.component";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const todoItems = useTodoListStore((state) => state.todolist);
  const renderTaskList = () => {
    if (searchTerm.length > 0) {
      return todoItems
        .filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a,b) => a.title > b.title ? 1: -1)
        .map((item) => <TaskCard key={item.id} data={item} />);
    }
    return todoItems
    .sort((a,b) => a.title > b.title ? 1: -1)
    .map((item) => <TaskCard key={item.id} data={item} />);
  };
  const [openForm, setOpenForm] = useState(false);

  return (
    <Container p="sm">

    <Title order={3} mb="sm">Todo List Application</Title>
    <Grid justify="flex-start" align="center" >
        <Grid.Col span={{md:11,xs:8}}>
          <TextInput
            leftSection={<IconSearch />}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title"
            w="auto"
          />
        </Grid.Col>
        <Grid.Col span={{md:1, xs:0}}>
          <Button size="xs" leftSection={<IconPlus />} onClick={() => setOpenForm(true)}>
            New Task
          </Button>
        </Grid.Col>
      </Grid>
      <ScrollArea h={280} mt={50}>
        <Flex direction="column" gap="sm">
          {renderTaskList()}
        </Flex>
      </ScrollArea>
      <TaskForm display={openForm} onClose={() => setOpenForm(false)} />
      </Container>
  );
}
