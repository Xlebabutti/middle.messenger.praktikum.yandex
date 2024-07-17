import { Block } from './block';
import Route from './route';

class Router {
    static __instance?: Router;

    private routes: Record<string, Route> = {};

    private history: History = window.history;

    private _currentRoute: Route | null = null;

    private _rootQuery: string = '';

    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this._rootQuery = rootQuery;
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
                this._onRoute(window.location.pathname);
            }
        };

        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);

        if (!route) {
            return;
        }

        if (this._currentRoute && this._currentRoute !== route) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        if (route !== null) {
            route.render(); // need fix
        }
    }

    go(pathname: string) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
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

export default Router;
