/* eslint-disable @typescript-eslint/naming-convention */
import type { Statistics } from '@components/channel-details/channel-details-interface';

interface Default {
    url: string;
    width?: number;
    height?: number;
}

interface Thumbnails {
    default: Default;
    medium: Default;
    high: Default;
}

interface Id {
    kind: string;
    videoId?: string;
    channelId?: string;
}

interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
}

export interface IVideoItem {
    kind: string;
    id: Id;
    snippet: Snippet;
    statistics?: Statistics;
}

export interface IGetCategoriesVideoResponseBody {
    kind: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: PageInfo;
    items: IVideoItem[];
}

export interface IFeedState {
    selectedCategory: string;
    videos: IVideoItem[];
    isLoading: boolean;
}
