/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Typography, CardContent, CardMedia, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoChannelUrl, demoProfilePicture } from '@assets/constants';
import type { ReactElement } from 'react';
import type { IVideoCardProperties } from './channel-card-interface';

export function ChannelCard({ channelDetail, marginTop = '0px' }:IVideoCardProperties):ReactElement {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { md: '320px', xs: '356px' },
        height: '326px',
        margin: 'auto',
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail.id.channelId ?? demoChannelUrl}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#FFFFFF',
          }}
        >
          <CardMedia
            image={channelDetail.snippet.thumbnails.high.url || demoProfilePicture}
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          />
          <Typography
            variant="h6"
          >
            {channelDetail.snippet.title}
            <CheckCircle
              sx={{ fontSize: '14px', color: 'gray', ml: '5px' }}
            />
          </Typography>
          <Typography
            fontWeight="bold"
            variant="subtitle1"
            sx={{ fontSize: '12px' }}
          >
            {channelDetail.statistics?.subscriberCount}
            {' '}
            {(channelDetail.statistics?.subscriberCount) ? 'Subscribers' : '' }
          </Typography>
        </CardContent>
      </Link>

    </Box>
  );
}
