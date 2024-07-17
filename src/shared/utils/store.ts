/* eslint-disable @typescript-eslint/no-explicit-any */
import EventBus from './event-bus';

export enum StoreEvents {
    Updated = 'Updated',
}

export class Store extends EventBus {
    private state = {};
    static set: any;

    public getState() {
        return this.state;
    }

    public set(nextState: object) {
        const prevState = { ...this.state };

        this.state = { ...this.state, ...nextState };

        this.emit(StoreEvents.Updated, prevState, nextState);
    }
}
