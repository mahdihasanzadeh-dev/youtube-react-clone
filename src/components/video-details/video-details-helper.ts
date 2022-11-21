import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { ISetState } from '@common/common-interface';
import { logger } from '@common/common-function';
import type { IGetCategoriesVideoResponseBody, IVideoItem } from '@components/feed/feed-interface';
import type { IGetVideoDEtailsResponseBody, Item, IVideoDeailsState } from './video-details-interface';

export function videoDetailsHelper(
  state: IVideoDeailsState,
  setState: ISetState<IVideoDeailsState>,
  id: string | undefined,
) {
  async function getVideoDetails(): Promise<null | Item> {
    try {
      const { data, status } = await axios.get<IGetVideoDEtailsResponseBody, AxiosResponse<IGetVideoDEtailsResponseBody>, null>(`/videos?part=snippet,statistics,contentDetails&id=${id as string}`);

      if (status === 200) {
        return data.items[0];
      }
    } catch (error) {
      logger('Error in get video details:', error);
    }

    return null;
  }

  async function getRelatedVide(): Promise<[] | IVideoItem[]> {
    try {
      const { data, status } = await axios.get<IGetCategoriesVideoResponseBody, AxiosResponse<IGetCategoriesVideoResponseBody>, null>(`/search?part=id,snippet&relatedToVideoId=${id as string}&type=video, maxResults=50`);

      if (status === 200) {
        return data.items;
      }
    } catch (error) {
      logger('Error in get video details:', error);
    }

    return [];
  }

  async function getVideoInfo() {
    setState({
      ...state,
      isLoading: true,
    });

    const [videoDetail, relatedVideos] = await Promise.all([
      getVideoDetails(),
      getRelatedVide(),
    ]);

    setState({
      isLoading: false,
      videoDetail,
      relatedVideos,
    });
  }

  return {
    getVideoInfo,
  };
}
