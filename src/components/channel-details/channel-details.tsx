import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos } from '@components/videos/videos';
import { ChannelCard } from '@components/channel-card/channel-card';
import type { ReactElement } from 'react';
import { Loader } from '@components/loader/loader';
import { channelDetailsHelper } from './channel-details-helper';
import type { IChannelDetailsState } from './channel-details-interface';

export function ChannelDetails():ReactElement {
  const { id } = useParams();

  const [state, setState] = useState<IChannelDetailsState>({
    isLoading: false,
    channelDetails: null,
    videos: [],
  });

  const { channelDetails, videos, isLoading } = state;
  const helper = channelDetailsHelper(state, setState, id);

  useEffect(() => {
    helper.getChannelInfo();
  }, [id]);

  return (
    <Box
      minHeight="95vh"
    >
      {
        isLoading
          ? <Loader />
          : (
            <>
              <Box>
                <div
                  style={{
                    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(189,3,153,1) 35%, rgba(0,212,255,1) 100%)',
                    zIndex: 10,
                    height: '300px',
                  }}
                />
                {channelDetails && <ChannelCard channelDetail={channelDetails} marginTop="-110px" />}
              </Box>
              <Box
                display="flex"
                p="2"
              >
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
              </Box>
            </>
          )
      }

    </Box>
  );
}
