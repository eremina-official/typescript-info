import { Box, List, ListItem, Typography } from '@mui/material';

const DataTypes = () => {
  return (
    <div>
      <Typography variant="h1">Data Types</Typography>

      <Box sx={{ py: 2 }}>
        <Typography>
          <p>TypeScript supports all JavaScript’s data types, and adds some additional ones.</p>

          <div>TypeScript data types:</div>

          <List>
            <ListItem component="div" sx={{ display: 'block' }}>
              1. <b>Primitive Types</b>
              <div>Basic data types in JavaScript: string, number, boolean, null, undefined, and symbol.</div>
            </ListItem>
            <ListItem component="div" sx={{ display: 'block' }}>
              2. <b>Object Types</b>
              <div>Objects are collections of key-value pairs and can include arrays and functions.</div>
            </ListItem>
            <ListItem component="div" sx={{ display: 'block' }}>
              3. <b>any</b>
              <div>The any type allows a variable to hold any value, bypassing type checking.</div>
            </ListItem>
            <ListItem component="div" sx={{ display: 'block' }}>
              4. <b>unknown</b>
              <div>The unknown type is similar to any but requires type checking before use.</div>
            </ListItem>
            <ListItem component="div" sx={{ display: 'block' }}>
              5. <b>union</b>
              <div>Union types allow a variable to hold multiple types.</div>
            </ListItem>
            <ListItem component="div" sx={{ display: 'block' }}>
              6. <b>never</b>
              <div>The never type represents values that never occur.</div>
            </ListItem>
            <ListItem component="div" sx={{ display: 'block' }}>
              7. <b>tuple</b>
              <div>Tuples are fixed-length arrays with specified types for each element.</div>
            </ListItem>
          </List>
        </Typography>
      </Box>
    </div>
  );
};

export default DataTypes;
