import { Box, List, ListItem, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

const MainPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h1">TypeScript</Typography>

      <Box>
        <Typography paragraph>
          TypeScript is a programming language created as a superset of JavaScript.
        </Typography>

        <Typography paragraph>
          TypeScript supports all JavaScript’s features, and adds an additional layer on top of
          these: TypeScript’s type system.
        </Typography>

        <Typography variant="h6" component="div" gutterBottom>
          TypeScript main features:
        </Typography>

        <List>
          <ListItem>
            <Stack spacing={1}>
              <Typography>
                1. TypeScript adds <b>static typing</b> to the language, allowing developers to
                catch errors at compile time rather than runtime.
              </Typography>
              <Typography>
                Type annotation can be explicit (set by developer) and implicit (type inference,
                TypeScipt can infer types based on assigned values).
              </Typography>
            </Stack>
          </ListItem>

          <ListItem>
            <Stack spacing={1}>
              <Typography>
                2. <b>Interfaces</b>
              </Typography>
              <Typography>
                Interfaces is a powerful way to define shape of objects. They specify the
                properties and methods the object must have, and their types.
              </Typography>
            </Stack>
          </ListItem>

          <ListItem>
            <Stack spacing={1}>
              <Typography>
                3. <b>Generics</b>
              </Typography>
              <Typography>
                Generics allow developers to create reusable components and functions that can
                work with a variety of types.
              </Typography>
            </Stack>
          </ListItem>

          <ListItem>
            <Stack spacing={1}>
              <Typography>
                4. <b>Enums</b>
              </Typography>
              <Typography>
                Enums are a way to define a set of named constants, making code more readable and
                maintainable.
              </Typography>
            </Stack>
          </ListItem>

          <ListItem>
            <Stack spacing={1}>
              <Typography>
                5. <b>Union and Intersection Types</b>
              </Typography>
              <Typography>
                Union types allow a variable to hold multiple types, while intersection types
                combine multiple types into one.
              </Typography>
            </Stack>
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default MainPage;
