import { MoreOutlined } from "@ant-design/icons";
import { Avatar, Button, Flex, Menu } from "antd";
import { Link } from "react-router-dom";
import { Todo } from "../Modules/Todos";

interface Todos {
  todos: Todo[];
  setCustomTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const AppHeader = ({ todos, setCustomTodo }: Todos) => {
  const filter = (value: string) => {
    setCustomTodo(() => {
      return todos.filter((item) => {
        return item.type === value;
      });
    });
    console.log(value);
  };
  return (
    <header className="p-7">
      <div className="font-medium text-stone-400  mb-3">
        <span className="text-blue-500 m-0 ">EverDo&nbsp;-&nbsp;</span>MVF
      </div>
      <Flex align="center" justify="space-between" className="mb-5">
        <span className="text-3xl font-bold">Design</span>
        <Menu
          className="custom-menu bg-inherit w-[330px] border-b-0 "
          direction="ltr"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              label: (
                <Button
                  className="h-5 border-none rounded-xl"
                  onClick={() => {
                    setCustomTodo(todos.map((item) => item));
                  }}
                >
                  All
                </Button>
              ),
            },
            {
              key: "2",
              label: (
                <Button
                  className="h-5 border-none rounded-xl"
                  onClick={() => filter("1h")}
                >
                  1h
                </Button>
              ),
            },
            {
              key: "3",
              label: (
                <Button
                  className="h-5 border-none rounded-xl"
                  onClick={() => filter("2h")}
                >
                  2h
                </Button>
              ),
            },
            {
              key: "4",
              label: (
                <Button
                  className="h-5 border-none rounded-xl"
                  onClick={() => filter("Work")}
                >
                  Work
                </Button>
              ),
            },
          ]}
        />
      </Flex>
      <Flex className="w-full mb-5 ">
        <Menu
          className="custom w-full bg-inherit"
          mode="horizontal"
          defaultSelectedKeys={["todos"]}
          items={[
            {
              key: "todos",
              label: (
                <Link to="/EverDo">
                  <Flex align="center" gap={10}>
                    <Avatar className="avatar w-6 h-6 font-semibold">10</Avatar>
                    <span className="text-black font-medium">Todos</span>
                  </Flex>
                </Link>
              ),
            },
            {
              key: "notes",
              label: (
                <Link to="/EverDo/notes">
                  <Flex align="center" gap={10}>
                    <Avatar className="avatar w-6 h-6 font-semibold">3</Avatar>
                    <span className="text-black font-medium">Notes</span>
                  </Flex>
                </Link>
              ),
            },
            {
              key: "links",
              label: (
                <Link to="links">
                  <Flex align="center" gap={10}>
                    {false && (
                      <Avatar className="avatar w-6 h-6 font-semibold">
                        10
                      </Avatar>
                    )}
                    <span className="text-black font-medium">Links</span>
                  </Flex>
                </Link>
              ),
            },
            {
              key: "files",
              label: (
                <Link to="files">
                  <Flex align="center" gap={10}>
                    {false && (
                      <Avatar className="avatar w-6 h-6 font-semibold">
                        10
                      </Avatar>
                    )}
                    <span className="text-black font-medium">Files</span>
                  </Flex>
                </Link>
              ),
            },
          ]}
        />
      </Flex>
      <Flex align="center" justify="space-between" className="py-2 border-b">
        <span className="text-xl font-semibold">Product planning</span>
        <MoreOutlined className="rotate-90 text-2xl text-stone-400" />
      </Flex>
    </header>
  );
};

export default AppHeader;
