import type { IVideoItem } from '@components/feed/feed-interface';

export interface ISearchFeedState {
    videos: IVideoItem[];
    isLoading: boolean;
}
