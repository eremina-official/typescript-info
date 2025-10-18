import { Box, List, ListItem, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

const DataTypes = () => {
  return (
    <div>
      <Typography variant="h1">Data Types</Typography>

      <Box>
        <Typography>
          <p>TypeScript supports all JavaScript’s data types, and adds some additional ones.</p>

          <div>TypeScript data types:</div>

          <List>
            <ListItem>
              <Stack spacing={1}>
                <b>1. Primitive Types</b>
                <div>
                  Basic data types in JavaScript: string, number, boolean, null, undefined, and
                  symbol.
                </div>
              </Stack>
            </ListItem>

            <ListItem>
              <Stack spacing={1}>
                <b>2. Object Types</b>
                <div>
                  Objects are collections of key-value pairs and can include arrays and functions.
                </div>
              </Stack>
            </ListItem>

            <ListItem>
              <Stack spacing={1}>
                <b>3. any</b>
                <div>
                  The any type allows a variable to hold any value, bypassing type checking.
                </div>
              </Stack>
            </ListItem>

            <ListItem>
              <Stack spacing={1}>
                <b>4. unknown</b>
                <div>The unknown type is similar to any but requires type checking before use.</div>
              </Stack>
            </ListItem>

            <ListItem>
              <Stack spacing={1}>
                <b>5. union</b>
                <div>Union types allow a variable to hold multiple types.</div>
              </Stack>
            </ListItem>

            <ListItem>
              <Stack spacing={1}>
                <b>6. intersection</b>
                <div>Intersection types combine multiple types into one.</div>
              </Stack>
            </ListItem>

            <ListItem>
              <Stack spacing={1}>
                <b>7. never</b>
                <div>The never type represents values that never occur.</div>
              </Stack>
            </ListItem>

            <ListItem>
              <Stack spacing={1}>
                <b>8. tuple</b>
                <div>Tuples are fixed-length arrays with specified types for each element.</div>
              </Stack>
            </ListItem>
          </List>
        </Typography>
      </Box>
    </div>
  );
};

export default DataTypes;
