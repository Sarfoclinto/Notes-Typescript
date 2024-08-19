import { Layout } from "antd";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppSidebar from "./Components/AppSidebar";
import Index from "./MainPages/Index";
import Completed from "./MainPages/Completed";
import Today from "./MainPages/Today";
import Trash from "./MainPages/Trash";
import Upcoming from "./MainPages/Upcoming";
import EverDo from "./MainPages/EverDo";
import Todos from "./Pages/Todos";
import Notes from "./Pages/Notes";
import Links from "./Pages/Links";
import Files from "./Pages/Files";
import { useState } from "react";
import { Todo } from "./Modules/Todos";

interface Todos {
  todos: Todo[];
  customTodo: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  setCustomTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const App: React.FC = () => {
  const [todos, setTodo] = useState<Todo[]>([
    {
      id: 1,
      active: false,
      time: "Just now",
      type: "Work",
      title: "Brainstorming",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, inventore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, inventore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, inventore.",
    },
    {
      id: 2,
      active: false,
      time: "2 months ago",
      type: null,
      title: "Everdo Product Planning",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, inventore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, inventore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, inventore.",
    },
    {
      id: 3,
      active: true,
      time: "2 months ago",
      type: "Work",
      title: "Everdo Product Planning",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, inventore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, inventore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, inventore.",
    },
  ]);
  const [customTodo, setCustomTodo] = useState<Todo[]>(
    todos.map((item) => item)
  );

  return (
    <>
      <Router>
        <Layout className="h-dvh">
          <AppSidebar />
          <Layout className="debug">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="today" element={<Today />} />
              <Route path="upcoming" element={<Upcoming />} />
              <Route path="completed" element={<Completed />} />
              <Route path="trash" element={<Trash />} />
              <Route
                path="EverDo"
                element={<EverDo todos={todos} setCustomTodo={setCustomTodo} />}
              >
                <Route
                  index
                  element={
                    <Todos
                      customTodo={customTodo}
                      setCustomTodo={setCustomTodo}
                    />
                  }
                />
                <Route path="notes" element={<Notes />} />
                <Route path="links" element={<Links />} />
                <Route path="files" element={<Files />} />
              </Route>
            </Routes>
          </Layout>
        </Layout>
      </Router>
    </>
  );
};

export default App;
