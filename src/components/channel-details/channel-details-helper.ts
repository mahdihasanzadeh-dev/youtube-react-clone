import { logger } from '@common/common-function';
import type { ISetState } from '@common/common-interface';
import type { IGetCategoriesVideoResponseBody, IVideoItem } from '@components/feed/feed-interface';
import type { AxiosResponse } from 'axios';
import axios from 'axios';
import type { IChannelDetailsState, IGetChannelDetailsResponseBody } from './channel-details-interface';

export function channelDetailsHelper(
  state: IChannelDetailsState,
  setState:ISetState<IChannelDetailsState>,
  id: string | undefined,
) {
  async function getChannelDetails(): Promise<null | IVideoItem> {
    try {
      const { data, status } = await axios.get<IGetChannelDetailsResponseBody, AxiosResponse<IGetChannelDetailsResponseBody>, null>(`/channels?part=snippet,statistics&id=${id as string}`);

      if (status === 200) {
        return data.items[0];
      }
    } catch (error) {
      logger('getCategoriesDataError: ', error);
    }

    return null;
  }

  async function getChannelVideos(): Promise<[] | IVideoItem[]> {
    try {
      const { data, status } = await axios.get<IGetCategoriesVideoResponseBody, AxiosResponse<IGetCategoriesVideoResponseBody>, null>(`/search?channelId=${id as string}&part=snippet&order=date&maxResults=50`);

      if (status === 200) {
        return data.items;
      }
    } catch (error) {
      logger('getCategoriesDataError: ', error);
    }

    return [];
  }

  async function getChannelInfo() {
    setState({
      ...state,
      isLoading: true,
    });

    const [channelDetails, videos] = await Promise.all([
      getChannelDetails(), getChannelVideos(),
    ]);

    setState({
      isLoading: false,
      channelDetails,
      videos,
    });
  }

  return {
    getChannelInfo,
  };
}
