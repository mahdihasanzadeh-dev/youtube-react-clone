import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import type { ReactElement } from 'react';
import { Loader } from '@components/loader/loader';
import { Videos } from '@components/videos/videos';
import type { IVideoDeailsState } from './video-details-interface';
import { videoDetailsHelper } from './video-details-helper';

export function VideoDeails():ReactElement {
  const { id } = useParams();

  const [state, setState] = useState<IVideoDeailsState>({
    isLoading: false,
    videoDetail: null,
    relatedVideos: [],
  });

  const { videoDetail, isLoading, relatedVideos } = state;
  const helper = videoDetailsHelper(state, setState, id);

  useEffect(() => {
    helper.getVideoInfo();
  }, [id]);

  if (isLoading) return <Loader />;

  return (
    <Box
      minHeight="95vh"
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
      >
        <Box flex={1}>
          <Box
            sx={{ width: '100%', position: 'sticky', top: '86px' }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id as string}`}
              className="react-player"
              controls
            />
            <Typography
              variant="h5"
              color="#FFF"
              fontWeight="bold"
              p={2}
            >
              {videoDetail?.snippet.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: '#FFF' }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${videoDetail?.snippet.channelId as string}`}>
                <Typography
                  variant="subtitle1"
                  color="#FFF"
                >
                  {videoDetail?.snippet.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
                  />
                </Typography>
              </Link>
              <Stack
                direction="row"
                gap="20px"
                alignItems="center"
              >
                <Typography
                  variant="body1"
                  sx={{ opacity: '.7' }}
                >
                  {parseInt(videoDetail?.statistics.viewCount as string, 10).toLocaleString() }
                  {' '}
                  views
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ opacity: '.7' }}
                >
                  {parseInt(videoDetail?.statistics.likeCount as string, 10).toLocaleString() }
                  {' '}
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={relatedVideos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}
