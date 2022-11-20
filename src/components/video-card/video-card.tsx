import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle } from '@assets/constants';
import type { ReactElement } from 'react';
import type { IVideoCardProperties } from './video-card-interface';

export function VideoCard({ video }:IVideoCardProperties):ReactElement {
  const { id: { videoId }, snippet } = video;
  return (
    <Card
      sx={{
        width: { md: '320px', sx: '100%' },
        boxShadow: 'none',
        borderRadius: 0,
      }}
    >
      <Link to={(videoId != null) ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet.thumbnails.high.url}
          sx={{ width: { md: '320px', sx: '100%' }, height: 180 }}
        />
      </Link>
      <CardContent
        sx={{ backgroundColor: '#1e1e1e', height: '106px' }}
      >
        <Link to={(videoId != null) ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#FFF"
            textOverflow="truncate"
          >
            {snippet.title || demoVideoTitle}
          </Typography>
        </Link>
        <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="gray"
          >
            {snippet.channelTitle || demoChannelTitle}
            <CheckCircle
              sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
