import AppHeader from "../Components/AppHeader";
import { Outlet } from "react-router-dom";
import { Todo } from "../Modules/Todos";

type Props = {
  todos: Todo[];
  setCustomTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const EverDo = ({ todos, setCustomTodo }: Props) => {
  return (
    <>
      <AppHeader todos={todos} setCustomTodo={setCustomTodo} />
      <Outlet />
    </>
  );
};

export default EverDo;
