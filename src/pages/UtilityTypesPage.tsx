import { Typography, Box, Divider } from '@mui/material';
import CodeBlock from '../components/Code';

const partialExample = `
interface Todo {
  title: string;
  description: string;
}

// All properties become optional
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter"
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash"
});
`;

const pickExample = `
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Extracts a subset of keys
type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
`;

const omitExample = `
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

// Removes a subset of keys
type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
`;

const UtilityTypesPage = () => {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        Utility Types
      </Typography>
      <Typography variant="body1">
        TypeScript provides several utility types to facilitate common <b>type transformations</b>. This helps to make code more dry and avoid type repetition.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h2" gutterBottom>
          Partial&lt;Type&gt;
        </Typography>
        <Typography variant="body1">
          Constructs a type with all properties of <code>Type</code> set to optional. This utility will return a type that represents all subsets of a given type.
        </Typography>
        <CodeBlock code={partialExample} title="Partial Example" />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h2" gutterBottom>
          Pick&lt;Type, Keys&gt;
        </Typography>
        <Typography variant="body1">
          Constructs a type by picking the set of properties <code>Keys</code> (string literal or union of string literals) from <code>Type</code>.
        </Typography>
        <CodeBlock code={pickExample} title="Pick Example" />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h2" gutterBottom>
          Omit&lt;Type, Keys&gt;
        </Typography>
        <Typography variant="body1">
          Constructs a type by picking all properties from <code>Type</code> and then removing <code>Keys</code> (string literal or union of string literals).
        </Typography>
        <CodeBlock code={omitExample} title="Omit Example" />
      </Box>
    </Box>
  );
};

export default UtilityTypesPage;
