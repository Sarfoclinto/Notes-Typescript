import { Form, Input, Select, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { Todo } from "../Modules/Todos";

interface valuesType {
  id?: number | string;
  time?: string;
  active: boolean;
  type: string;
  title: string;
  body: string;
}

type FieldType = {
  type?: string;
  title?: string;
  body?: string;
};

type SetTodoType = {
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodoForm = ({ setTodo, setDrawerOpen }: SetTodoType) => {
  const [values, setValues] = useState<valuesType>({
    id: "",
    active: false,
    time: "",
    type: "",
    title: "",
    body: "",
  });

  const handleValuesChange = (e) => {
    const { value, name } = e.target;
    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSelectChange = (value: string) => {
    setValues((prev) => {
      return {
        ...prev,
        type: value,
      };
    });
  };

  const submitTodo = () => {
    setTodo((prev) => {
      return [
        ...prev,
        {
          ...values,
          id: Math.floor(Math.random() * 10),
          time: "Just now",
        },
      ];
    });
    setValues(() => {
      return {
        id: "",
        active: false,
        time: "",
        type: "",
        title: "",
        body: "",
      };
    });
    setDrawerOpen(false);
  };

  return (
    <Form autoComplete="off">
      <Form.Item<FieldType>
        label="Title"
        name="title"
        rules={[
          { required: true, message: "Title is Required" },
          { min: 2, message: "Title can't be a character" },
        ]}
        wrapperCol={{ span: 20 }}
        labelCol={{ span: 6 }}
      >
        <Input
          name="title"
          value={values.title}
          onChange={handleValuesChange}
        />
      </Form.Item>

      <Form.Item<FieldType>
        name="type"
        label="Select Type"
        wrapperCol={{ span: 20 }}
        labelCol={{ span: 6 }}
      >
        <Select
          defaultValue="Work"
          onChange={handleSelectChange}
          options={[
            { value: "work", label: "Work" },
            { value: "personal", label: "Personal" },
            { value: "school", label: "School" },
          ]}
        />
      </Form.Item>

      <Form.Item
        label="Body"
        name="body"
        rules={[
          { required: true, message: "Body is required" },
          {
            min: 2,
            message: "Body can't be a single character",
          },
        ]}
        wrapperCol={{ span: 20 }}
        labelCol={{ span: 6 }}
      >
        <TextArea
          name="body"
          value={values.body}
          onChange={handleValuesChange}
          rows={10}
        />
      </Form.Item>
      <Button type="primary" block onClick={submitTodo}>
        Submit
      </Button>
    </Form>
  );
};

export default TodoForm;
