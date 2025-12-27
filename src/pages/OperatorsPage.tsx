import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import { operators } from '../data/operators';

const OperatorsPage = () => {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        Operators
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="operators table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Operator</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Example</strong></TableCell>
              <TableCell><strong>Function</strong></TableCell>
              <TableCell><strong>Returns</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {operators.map((row) => (
              <TableRow
                key={row.operator}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <code style={{ color: 'primary.main', padding: '10px', fontSize: '1.2rem', textAlign: 'center' }}>{row.operator}</code>
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.example}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell><code style={{ color: 'primary.main', padding: '10px', fontSize: '1.2rem', textAlign: 'center' }}>{row.returns}</code></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OperatorsPage;
