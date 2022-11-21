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
      <Link to={(videoId != null) ? `/video/${videoId as string}` : demoVideoUrl}>
        <CardMedia
          image={snippet.thumbnails.high.url}
          sx={{ width: { md: '320px', sx: '100%' }, height: 180 }}
        />
      </Link>
      <CardContent
        sx={{ backgroundColor: '#1e1e1e', height: '106px' }}
      >
        <Link to={(videoId != null) ? `/video/${videoId as string}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            color="#FFF"
            textOverflow="truncate"
          >
            {snippet.title ?? demoVideoTitle}
          </Typography>
        </Link>
        <Link to={snippet.channelId as string ? `/channel/${snippet.channelId as string}` : demoChannelUrl}>
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="gray"
          >
            {snippet.channelTitle.slice(0, 60) ?? demoChannelTitle}
            <CheckCircle
              sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
