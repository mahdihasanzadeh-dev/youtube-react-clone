import { Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import type { ILoaderProperties } from './loader-interface';

export function Loader({ title = 'loading' }: ILoaderProperties): ReactElement {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={2}
      minHeight="95vh"
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{ color: 'white' }}
      >
        {title}
      </Typography>
    </Stack>
  );
}
