/* eslint-disable @typescript-eslint/naming-convention */

import type { IVideoItem } from '@components/feed/feed-interface';

interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

interface RegionRestriction {
    blocked: string[];
}

interface ContentDetails {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    regionRestriction: RegionRestriction;
    contentRating: Record<string, never>;
    projection: string;
}
interface Default {
    url: string;
    width: number;
    height: number;
}

interface Localized {
    title: string;
    description: string;
}

interface Thumbnails {
    default: Default;
    medium: Default;
    high: Default;
    standard: Default;
    maxres: Default;
}

interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: Localized;
}

  interface Statistics {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
  }

export interface Item {
    kind: string;
    id: string;
    snippet: Snippet;
    contentDetails: ContentDetails;
    statistics: Statistics;
  }

export interface IGetVideoDEtailsResponseBody {
    kind: string;
    items: Item[];
    pageInfo: PageInfo;
}

export interface IVideoDeailsState {
    isLoading: boolean;
    videoDetail: Item | null;
    relatedVideos: IVideoItem[];
}
