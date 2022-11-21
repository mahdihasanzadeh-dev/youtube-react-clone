import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Loader } from '@components/loader/loader';
import type { ReactElement } from 'react';
import { Videos } from '@components/videos/videos';
import { useParams } from 'react-router-dom';
import type { ISearchFeedState } from './search-feed-interface';
import { searchFeedHelper } from './search-feed-helper';

export function SearchFeed():ReactElement {
  const { searchTerm } = useParams();

  const [state, setState] = useState<ISearchFeedState>({
    videos: [],
    isLoading: false,
  });

  const { videos, isLoading } = state;
  const helper = searchFeedHelper(state, setState, searchTerm);

  useEffect(() => {
    helper.getSearchTermData();
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        overflowY: 'auto',
        height: '90vh',
        flex: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ color: 'white' }}
      >
        Search Result for
        {' '}
        <span
          style={{ color: '#F31503' }}
        >
          {searchTerm}
        </span>
      </Typography>
      {
          isLoading
            ? <Loader />
            : <Videos videos={videos} />
        }

    </Box>

  );
}
