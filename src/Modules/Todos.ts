export interface Todo {
  id: number | string;
  active: boolean;
  type: string | any;
  time: string;
  title: string;
  body: string;
}

export type NotesTypes = Omit<Todo, "type" | "active">;
