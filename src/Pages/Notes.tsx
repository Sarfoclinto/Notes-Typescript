import NoteCard from "../Components/NoteCard";
import { NotesTypes } from "../Modules/Todos";
import { useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState<NotesTypes[]>([
    {
      id: 1,
      title: "First Day In College",
      time: "Just Now",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, non, repudiandae ut debitis, dolor veritatis consequatur corporis earum doloremque dolorem id reprehenderit! Consequuntur impedit nobis, laboriosam praesentium illo cumque nam",
    },
    {
      id: 2,
      title: "My Girlfriend Left Me",
      time: "1w",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, non, repudiandae ut debitis, dolor veritatis consequatur corporis earum doloremque dolorem id reprehenderit! Consequuntur impedit nobis, laboriosam praesentium illo cumque nam",
    },
    {
      id: 3,
      title: "That Total Stranger",
      time: "3m",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, non, repudiandae ut debitis, dolor veritatis consequatur corporis earum doloremque dolorem id reprehenderit! Consequuntur impedit nobis, laboriosam praesentium illo cumque nam",
    },
    {
      id: 4,
      title: "My First Ex.",
      time: "10yrs",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, non, repudiandae ut debitis, dolor veritatis consequatur corporis earum doloremque dolorem id reprehenderit! Consequuntur impedit nobis, laboriosam praesentium illo cumque nam",
    },
  ]);
  return (
    <div className="px-5 overflow-y-scroll hide-scroll h-[398px]">
      <div className="card-grid w-full my-2 ">
        {notes.map(({ time, body, title, id }) => {
          return <NoteCard time={time} body={body} title={title} key={id} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
