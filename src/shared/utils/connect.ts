/* eslint-disable @typescript-eslint/no-explicit-any */

import { AppState } from '../../features/auth/type';
import { Block } from './block';
import isEqual from './is-equal';
import { StoreEvents } from './store';

export function connect(
    mapStateToProps: (state: AppState) => Partial<AppState>,
) {
    return function (Component: typeof Block) {
        return class extends Component {
            private onChangeStoreCallback: () => void;
            constructor(props: any) {
                const store = window.store;

                let state = mapStateToProps(store.getState());

                super({ ...props, ...state });

                this.onChangeStoreCallback = () => {
                    const newState = mapStateToProps(store.getState());

                    if (!isEqual(state, newState)) {
                        this.setProps({ ...newState });
                    }

                    state = newState;
                };

                store.on(StoreEvents.Updated, this.onChangeStoreCallback);
            }

            componentWillUnmount() {
                super.componentWillUnmount();
                window.store.off(
                    StoreEvents.Updated,
                    this.onChangeStoreCallback,
                );
            }
        };
    };
}
