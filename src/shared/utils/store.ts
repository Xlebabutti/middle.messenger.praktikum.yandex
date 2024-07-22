/* eslint-disable @typescript-eslint/no-explicit-any */
import EventBus from './event-bus';

export enum StoreEvents {
    Updated = 'Updated',
}

export class Store<State extends Record<string, any>> extends EventBus {
    private state: State = {} as State;
    static set: any;
    static getState: any;

    constructor(defaultState: State) {
        super();
        this.state = defaultState;
        this.set(defaultState);
    }

    public getState() {
        return this.state;
    }

    public set(nextState: Partial<State>) {
        const prevState = { ...this.state };

        this.state = { ...this.state, ...nextState };

        this.emit(StoreEvents.Updated, prevState, nextState);
    }
}
