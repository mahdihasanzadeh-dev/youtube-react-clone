import type { ISetState } from '@common/common-interface';
import type { IFeedState } from '@components/feed/feed-interface';

export interface ISidebarProperties {
    state: IFeedState;
    setState: ISetState<IFeedState>
}
