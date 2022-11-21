/* eslint-disable @typescript-eslint/naming-convention */

import type { IVideoItem } from '@components/feed/feed-interface';

interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export interface IGetChannelDetailsResponseBody {
    kind: string;
    pageInfo: PageInfo;
    items: IVideoItem[];
}

export interface IChannelDetailsState{
    isLoading: boolean;
    channelDetails: IVideoItem | null;
    videos: IVideoItem[],
}
