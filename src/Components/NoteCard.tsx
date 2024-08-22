import { Card, Flex } from "antd";

interface Note {
  time: string;
  title: string;
  body: string;
}
const NoteCard = ({ time, title, body }: Note) => {
  return (
    <Card className="w-full">
      <Flex
        align="center"
        justify="center"
        className="text-sm font-semibold text-gray-300"
      >
        {time}
      </Flex>
      <Flex align="center" justify="center" className="font-bold ">
        {title}
      </Flex>
      <Flex
        align="center"
        justify="center"
        className="font-medium text-gray-600"
      >
        {body}
      </Flex>
    </Card>
  );
};

export default NoteCard;
