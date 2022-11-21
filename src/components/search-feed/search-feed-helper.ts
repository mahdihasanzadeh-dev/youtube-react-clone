import { logger } from '@common/common-function';
import type { ISetState } from '@common/common-interface';
import type { AxiosResponse } from 'axios';
import axios from 'axios';
import type { IGetCategoriesVideoResponseBody } from '@components/feed/feed-interface';
import type { ISearchFeedState } from './search-feed-interface';

export function searchFeedHelper(
  state: ISearchFeedState,
  setState: ISetState<ISearchFeedState>,
  searchTerm: string | undefined,
) {
  async function getSearchTermData(): Promise<void> {
    try {
      setState({
        ...state,
        isLoading: true,
      });

      const { data, status } = await axios.get<IGetCategoriesVideoResponseBody, AxiosResponse<IGetCategoriesVideoResponseBody>, null>(`/search?part=snippet&q=${searchTerm as string}&maxResults=50`);

      if (status === 200) {
        setState({
          ...state,
          videos: data.items,
          isLoading: false,
        });
      }
    } catch (error) {
      logger('getCategoriesDataError: ', error);
    }
  }

  return {
    getSearchTermData,

  };
}
