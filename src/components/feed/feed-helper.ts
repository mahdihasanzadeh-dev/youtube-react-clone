import { logger } from '@common/common-function';
import type { ISetState } from '@common/common-interface';
import type { AxiosResponse } from 'axios';
import axios from 'axios';
import type { IGetCategoriesVideoResponseBody, IFeedState } from './feed-interface';

export function feedHelper(state: IFeedState, setState: ISetState<IFeedState>) {
  async function getCategoriesData(): Promise<void> {
    try {
      const { selectedCategory } = state;

      setState({
        ...state,
        isLoading: true,
      });

      const { data, status } = await axios.get<IGetCategoriesVideoResponseBody, AxiosResponse<IGetCategoriesVideoResponseBody>, null>(`/search?part=snippet&q=${selectedCategory}&maxResults=50`);

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
    getCategoriesData,

  };
}
