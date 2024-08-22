import { Button, Drawer, Flex, Form, Input, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";
import TodoForm from "./TodoForm";
import { Todo } from "../Modules/Todos";

type ModalOpen = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const AddNoteModal = ({ modalOpen, setModalOpen, setTodo }: ModalOpen) => {
  const close = () => {
    setModalOpen(false);
  };

  const [selected, setSelected] = useState<string>("todo");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const setUpDrawer = (type: string) => {
    setDrawerOpen(true);
    setSelected(type);
  };
  return (
    <Modal open={modalOpen} onCancel={close} title="Create">
      <Drawer
        open={drawerOpen}
        closable
        onClose={() => {
          setDrawerOpen(false);
        }}
        title={`Create a ${selected.toUpperCase()}`}
      >
        {selected === "todo" ? (
          <TodoForm setTodo={setTodo} setDrawerOpen={setDrawerOpen} />
        ) : selected === "note" ? (
          <Form>
            <h1>Create a Note</h1>
            <FormItem label="">
              <Input />
            </FormItem>
          </Form>
        ) : selected === "link" ? (
          <Form>
            <h1>Create a Link</h1>
            <FormItem label="">
              <Input />
            </FormItem>
          </Form>
        ) : (
          <Form>
            <h1>Create a File</h1>
            <FormItem label="">
              <Input />
            </FormItem>
          </Form>
        )}
      </Drawer>
      <Flex className="w-full " justify="space-between">
        <Button
          onClick={() => {
            setUpDrawer("todo");
          }}
          type="primary"
          className="w-28 bg-orange-500"
        >
          Todo
        </Button>
        <Button
          onClick={() => {
            setUpDrawer("note");
          }}
          type="primary"
          className="w-28 bg-black"
        >
          Notes
        </Button>
        <Button
          onClick={() => {
            setUpDrawer("link");
          }}
          type="primary"
          className="w-28"
        >
          Links
        </Button>
        <Button
          onClick={() => {
            setUpDrawer("file");
          }}
          type="primary"
          className="w-28 bg-yellow-500"
        >
          Files
        </Button>
      </Flex>
    </Modal>
  );
};

export default AddNoteModal;
