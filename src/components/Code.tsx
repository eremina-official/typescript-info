import React from 'react';
import { Paper, Typography } from '@mui/material';

type CodeBlockProps = {
  code: string;
  title?: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code, title }) => (
  <>
    {title ? (
      <Typography variant="subtitle2" sx={{ mt: 3 }}>
        {title}
      </Typography>
    ) : null}

    <Paper
      variant="outlined"
      sx={{
        p: 2,
        my: 2,
        background: '#f7f7f7',
        fontFamily: 'monospace',
        fontSize: '1em',
        mb: 2,
        overflowX: 'auto',
      }}
      aria-label={title ? `Code: ${title}` : 'Code block'}
    >
      <pre style={{ margin: 0 }}>{code.trim()}</pre>
    </Paper>
  </>
);

export default CodeBlock;
