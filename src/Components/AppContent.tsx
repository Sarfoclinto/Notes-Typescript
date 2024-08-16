import { Routes, Route } from "react-router-dom";
import Todos from "../Pages/Todos";
import Links from "../Pages/Links";
import Notes from "../Pages/Notes";
import Files from "../Pages/Files";
import { Todo } from "../Modules/Todos";
import TodoLayout from "./TodoLayout";

interface Todos {
  todos: Todo[];
  customTodo: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  setCustomTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const AppContent = ({ todos, setTodo, customTodo, setCustomTodo }: Todos) => {
  return (
    <main className="px-7 h-full">
      <Routes>
        <Route element={<TodoLayout />}>
          <Route
            index
            element={
              <Todos
                todos={todos}
                setTodo={setTodo}
                customTodo={customTodo}
                setCustomTodo={setCustomTodo}
              />
            }
          />
          <Route path="notes" element={<Notes />} />
          <Route path="/EverDo/links" element={<Links />} />
          <Route path="/EverDo/files" element={<Files />} />
        </Route>
      </Routes>
    </main>
  );
};

export default AppContent;
