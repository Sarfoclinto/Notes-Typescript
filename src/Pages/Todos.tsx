import { Button, Card, Flex } from "antd";
import { Todo } from "../Modules/Todos";

interface Todoss {
  customTodo: Todo[];
  setCustomTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Todos = ({ customTodo, setCustomTodo }: Todoss) => {
  const setActive = (id: number | string) => {
    setCustomTodo((prev) => {
      return prev.map((item) => {
        return item.id == id
          ? {
              ...item,
              active: !item.active,
            }
          : item;
      });
    });
  };

  return (
    <div className="card-grid w-full my-2 overflow-y-scroll hide-scroll">
      {customTodo.map((item) => {
        return (
          <Card
            onClick={() => {
              setActive(item.id);
            }}
            className={`w-full cursor-pointer ${
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
    </div>
  );
};

export default Todos;
