import { Suspense, useId } from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard } from '@components/video-card/video-card';
import { ChannelCard } from '@components/channel-card/channel-card';
import { Loader } from '@components/loader/loader';
import type { ReactElement } from 'react';
import type { IVideosProperties } from './videos-interface';

export function Videos({ videos, direction = 'row' }: IVideosProperties): ReactElement {
  return (
    <Suspense fallback={<Loader />}>
      <Stack
        direction={direction}
        flexWrap="wrap"
        justifyContent="start"
        gap={2}
      >
        {videos.map((item) => (
          <Box key={useId()}>
            {(item.id.videoId != null) && <VideoCard video={item} />}
            {(item.id.channelId != null) && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
      </Stack>
    </Suspense>
  );
}
