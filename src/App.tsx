import { ChannelDetails } from '@components/channel-details/channel-details';
import { Feed } from '@components/feed/feed';
import { Navbar } from '@components/navbar/navbar';
import { SearchFeed } from '@components/search-feed/search-feed';
import { VideoDeails } from '@components/video-details/video-details';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import type { ReactElement } from 'react';

export function App(): ReactElement {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDeails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>

  );
}
