import { Block } from './block';

interface RouteProps {
    rootQuery: string;
}

class Route {
    protected _pathname: string;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    protected _blockClass: typeof Block;

    protected _block: Block | null = null;

    protected _props;

    constructor(pathname: string, view: typeof Block, props: RouteProps) {
        this._pathname = pathname;
        this._blockClass = view;
        // this._block = null;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string) {
        return pathname === this._pathname;
    }

    _renderDom(query: string, block: Block) {
        const root = document.querySelector(query) as HTMLElement;
        if (root) root.append(block?.getContent() as Node);
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass({});
            this._renderDom(this._props.rootQuery, this._block);
            return;
        }

        this._block.show();
    }
}

export default Route;
