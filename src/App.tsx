import { Layout } from "antd";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppSidebar from "./Components/AppSidebar";
import AppHeader from "./Components/AppHeader";
import AppContent from "./Components/AppContent";
import { useState } from "react";
import { Todo } from "./Modules/Todos";
import Index from "./MainPages/Index";
import Completed from "./MainPages/Completed";
import Today from "./MainPages/Today";
import Trash from "./MainPages/Trash";
import Upcoming from "./MainPages/Upcoming";

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
              <Route
                path="EverDo"
                element={
                  <>
                    <AppHeader
                      todos={todos}
                      setTodo={setTodo}
                      customTodo={customTodo}
                      setCustomTodo={setCustomTodo}
                    />
                    <AppContent
                      todos={todos}
                      setTodo={setTodo}
                      customTodo={customTodo}
                      setCustomTodo={setCustomTodo}
                    />
                  </>
                }
              />
              <Route path="completed" element={<Completed />} />
              <Route path="today" element={<Today />} />
              <Route path="trash" element={<Trash />} />
              <Route path="upcoming" element={<Upcoming />} />
            </Routes>
          </Layout>
        </Layout>
      </Router>
    </>
  );
};

export default App;
