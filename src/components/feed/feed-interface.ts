/* eslint-disable @typescript-eslint/naming-convention */

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

export interface Item {
    kind: string;
    id: Id;
    snippet: Snippet;
}

export interface IGetCategoriesVideoResponseBody {
    kind: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: PageInfo;
    items: Item[];
}

export interface IFeedState {
    selectedCategory: string;
    videos: Item[];
    isLoading: boolean;
}
