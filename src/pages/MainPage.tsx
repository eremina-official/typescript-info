import { Box, List, ListItem, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

const MainPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h1">TypeScript</Typography>

      <Box>
        <Typography>
          <p>TypeScript is a programming language created as a superset of JavaScript.</p>

          <p>
            TypeScript supports all JavaScript’s features, and adds an additional layer on top of
            these: TypeScript’s type system.
          </p>

          <div>TypeScript main features:</div>

          <List>
            <ListItem>
              <Stack spacing={1}>
                <p>
                  1. TypeScript adds <b>static typing</b> to the language, allowing developers to
                  catch errors at compile time rather than runtime.
                </p>
                <p>
                  Type annotation can be explicit (set by developer) and implicit (type inference,
                  TypeScipt can infer types based on assigned values).
                </p>
              </Stack>
            </ListItem>

            <ListItem>
              <Stack spacing={1}>
                <p>
                  2. <b>Interfaces</b>
                </p>
                <p>
                  Interfaces is a powerful way to define shape of objects. They specify the
                  properties and methods the object must have, and their types.
                </p>
              </Stack>
            </ListItem>

            <ListItem>
              <Stack spacing={1}>
                <p>
                  3. <b>Generics</b>
                </p>
                <p>
                  Generics allow developers to create reusable components and functions that can
                  work with a variety of types.
                </p>
              </Stack>
            </ListItem>

            <ListItem>
              <Stack spacing={1}>
                <p>
                  4. <b>Enums</b>
                </p>
                <p>
                  Enums are a way to define a set of named constants, making code more readable and
                  maintainable.
                </p>
              </Stack>
            </ListItem>

            <ListItem>
              <Stack spacing={1}>
                <p>
                  5. <b>Union and Intersection Types</b>
                </p>
                <p>
                  Union types allow a variable to hold multiple types, while intersection types
                  combine multiple types into one.
                </p>
              </Stack>
            </ListItem>
          </List>
        </Typography>
      </Box>
    </div>
  );
};

export default MainPage;
