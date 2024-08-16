import { Button, Card, Flex } from "antd";
import { Todo } from "../Modules/Todos";

interface Todoss {
  todos: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  customTodo: Todo[];
  setCustomTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Todos = ({ customTodo, setCustomTodo }: Todoss) => {
  const setActive = (id: number) => {
    setCustomTodo((prev) => {
      return prev.map((item) => {
        return item.id == id
          ? {
              id: item.id,
              active: !item.active,
              body: item.body,
              time: item.time,
              title: item.title,
              type: item.type,
            }
          : item;
      });
    });
  };

  return (
    <Flex gap={20}>
      {customTodo.map((item) => {
        return (
          <Card
            onClick={() => {
              setActive(item.id);
            }}
            className={`w-4/12 cursor-pointer ${
              item.active ? "card" : "bg-gray-100"
            }`}
          >
            <Flex
              className="w-full mb-2"
              align="center"
              justify="space-between"
            >
              <span className="font-medium text-gray-400">{item.time}</span>
              {item.type && (
                <Button className="h-5 rounded-xl bg-gray-200 text-gray-500 font-medium">
                  {item.type}
                </Button>
              )}
            </Flex>
            <h1 className="font-bold text-lg">{item.title}</h1>
            <p className="font-medium text-gray-500">{item.body}</p>
          </Card>
        );
      })}
    </Flex>
  );
};

export default Todos;
