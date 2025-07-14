import { Box, List, ListItem, Typography } from '@mui/material';

const MainPage = () => {
  return (
    <div>
      <Typography variant="h1">TypeScript</Typography>
      <p>test</p>
      <Box sx={{ py: 2 }}>
        <Typography>
          <p>TypeScript is a programming language created as a superset of JavaScript.</p>

          <p>
            TypeScript supports all JavaScript’s features, and adds an additional layer on top of
            these: TypeScript’s type system.
          </p>

          <div>TypeScript main features:</div>

          <List>
            <ListItem sx={{ display: 'block' }}>
              <p>
                1. TypeScript adds <b>static typing</b> to the language, allowing developers to
                catch errors at compile time rather than runtime.
              </p>
              <p>
                Type annotation can be explicit (set by developer) and implicit (type inference,
                TypeScipt can infer types based on assigned values).
              </p>
            </ListItem>

            <ListItem sx={{ display: 'block' }}>
              2. <b>Interfaces</b>
              <p>
                Interfaces is a powerful way to define shape of objects. They specify the properties
                and methods the object must have, and their types.
              </p>
            </ListItem>
            <ListItem sx={{ display: 'block' }}>
              3. <b>Generics</b>
              <p>
                Generics allow developers to create reusable components and functions that can work
                with a variety of types.
              </p>
            </ListItem>
            <ListItem sx={{ display: 'block' }}>
              4. <b>Enums</b>
              <p>
                Enums are a way to define a set of named constants, making code more readable and
                maintainable.
              </p>
            </ListItem>
            <ListItem sx={{ display: 'block' }}>
              5. <b>Union and Intersection Types</b>
              <p>
                Union types allow a variable to hold multiple types, while intersection types
                combine multiple types into one.
              </p>
            </ListItem>
          </List>
        </Typography>
      </Box>
    </div>
  );
};

export default MainPage;
