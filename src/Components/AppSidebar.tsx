import {
  CalendarOutlined,
  CheckOutlined,
  DeleteOutlined,
  InboxOutlined,
  MenuOutlined,
  PlusOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Flex, FloatButton } from "antd";
import Sider from "antd/es/layout/Sider";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "index",
    label: (
      <Link to="/">
        <span>Index</span>
      </Link>
    ),
    icon: <InboxOutlined />,
  },
  {
    key: "today",
    label: (
      <Link to="today">
        <span>Today</span>
      </Link>
    ),
    icon: <StarOutlined />,
  },
  {
    key: "upcoming",
    label: (
      <Link to="upcoming">
        <span>Upcomoing</span>
      </Link>
    ),
    icon: <CalendarOutlined />,
  },
  {
    key: "completed",
    label: (
      <Link to="completed">
        <span>Completed</span>
      </Link>
    ),
    icon: <CheckOutlined />,
  },
  {
    key: "trash",
    label: (
      <Link to="trash">
        <span>Trash</span>
      </Link>
    ),
    icon: <DeleteOutlined />,
  },
  {
    key: "projects",
    label: <span>PROJECTS</span>,
    type: "group",
    children: [
      {
        key: "everdo",
        label: (
          <Link to="EverDo">
            <span>EverDo</span>
          </Link>
        ),
        icon: <MenuOutlined />,
      },
      {
        key: "gemshark",
        label: (
          <Link to="gemshark">
            <span>GemShark</span>
          </Link>
        ),
        icon: <MenuOutlined />,
      },
      {
        key: "rubicon",
        label: (
          <Link to="rubicon">
            <span>Rubicon</span>
          </Link>
        ),
        icon: <MenuOutlined />,
      },
    ],
  },
  {
    key: "personal",
    type: "group",
    label: <span>PERSONAL</span>,
    children: [
      {
        key: "shopping",
        label: (
          <Link to="shopping">
            <span>Shopping</span>
          </Link>
        ),
        icon: <MenuOutlined />,
      },
      {
        key: "health",
        label: (
          <Link to="health">
            <span>Health</span>
          </Link>
        ),
        icon: <MenuOutlined />,
      },
      {
        key: "entertainment",
        label: (
          <Link to="entertainment">
            <span>Entertainment</span>
          </Link>
        ),
        icon: <MenuOutlined />,
      },
    ],
  },
  {
    key: "learning",
    type: "group",
    label: <span>LEARNING</span>,
    children: [
      {
        key: "electron",
        label: (
          <Link to="electron">
            <span>Electron</span>
          </Link>
        ),
        icon: <MenuOutlined />,
      },
      {
        key: "flexbox",
        label: (
          <Link to="flexbox">
            <span>Flexbox</span>
          </Link>
        ),
        icon: <MenuOutlined />,
      },
    ],
  },
];

const AppSidebar = () => {
  return (
    <Sider
      theme="light"
      className="overflow-y-scroll hide-scroll border-r relative"
    >
      <Flex align="center" justify="center" className="py-2 border-b">
        <div className="h-5 w-2/3 bg-white dark" />
      </Flex>
      <Menu
        items={items}
        mode="inline"
        defaultOpenKeys={["projects", "personal", "learning"]}
        defaultSelectedKeys={["everdo"]}
      />
      <FloatButton
        className="absolute left-16 bottom-5"
        icon={<PlusOutlined />}
        type="primary"
      />
    </Sider>
  );
};

export default AppSidebar;
