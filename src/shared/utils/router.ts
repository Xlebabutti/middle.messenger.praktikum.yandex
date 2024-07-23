import { Block } from './block';
import { MiddlewareManager } from './middleware';
import Route from './route';

class Router {
    private routes: Record<string, Route> = {};

    private history: History = window.history;

    private _currentRoute: Route | null = null;

    private _rootQuery: string = '';

    private _middleware: MiddlewareManager<{
        redirect: (pathname: string) => void;
        pathname: string;
    }> = new MiddlewareManager();

    constructor(rootQuery: string) {
        this._rootQuery = rootQuery;
    }

    get middleware() {
        return this._middleware;
    }

    use(pathname: string, block: typeof Block) {
        const route = new Route(pathname, block, {
            rootQuery: this._rootQuery,
        });
        this.routes[pathname] = route;
        return this;
    }

    start() {
        window.onpopstate = (event) => {
            const window = event.currentTarget as Window;
            if (window) {
                this.onRoute(window.location.pathname);
            }
        };

        this.onRoute(window.location.pathname);
    }

    private async onRoute(pathname: string) {
        const route = this.getRoute(pathname);

        if (!route) {
            return;
        }

        if (this._currentRoute && this._currentRoute !== route) {
            this._currentRoute.leave();
        }

        const access = await this.middleware.execute({
            redirect: this.go.bind(this),
            pathname,
        });

        if (access) {
            this._currentRoute = route;
            route.render();
        }
    }

    go(pathname: string) {
        this.history.pushState({}, '', pathname);
        this.onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }

    getRoute(pathname: string) {
        return this.routes[pathname] ?? this.routes['*'];
    }
}

export default new Router('#app');
