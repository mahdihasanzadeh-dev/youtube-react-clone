import type { IVideoItem } from '@components/feed/feed-interface';

export interface IVideosProperties {
    videos: IVideoItem[];
    direction?: 'row' | 'column';
}
