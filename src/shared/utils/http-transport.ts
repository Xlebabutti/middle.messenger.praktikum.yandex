import constants from '../../features/auth/constants';
import { APIError } from '../../features/type';

function queryStringify(data: Record<string, unknown>) {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }
    const keys = Object.keys(data);
    return keys.reduce(
        (result, key, index) =>
            `${result}${key}=${encodeURIComponent(data[key] as string)}${index < keys.length - 1 ? '&' : ''}`,
        '',
    );
}

type Indexed<T> = {
    [key in string]: T;
};

function merge<T = unknown>(lhs: Indexed<T>, rhs: Indexed<T>): Indexed<T> {
    Object.entries(rhs).forEach(([key, value]) => {
        if (lhs[key] && typeof lhs[key] === 'object') {
            merge(lhs[key] as Indexed<T>, rhs[key] as Indexed<T>);
        } else {
            lhs[key] = value;
        }
    });
    return lhs;
}

enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

type Header = Record<string, string>;

type Options = {
    data?: Record<string, unknown> | FormData;
    headers?: Header;
    timeout?: number;
    method: METHODS;
};

export type Responce<T> = {
    status: number;
    data?: T;
    error?: APIError;
};

type HTTPMethod = <T = unknown>(
    url: string,
    options?: Omit<Options, 'method'>,
) => Promise<Responce<T>>;

export class HTTPTransport {
    private url: string;
    private header: Header;

    constructor(url: string, header: Header = {}) {
        this.url = constants.HOST + url;
        this.header = header;
    }

    GET: HTTPMethod = (url, options) => {
        let str = url;
        if (options?.data && !(options.data instanceof FormData)) {
            str += queryStringify(options.data);
        }
        return this.request(
            str,
            { ...options, method: METHODS.GET },
            options?.timeout,
        );
    };

    POST: HTTPMethod = (url, options) =>
        this.request(
            url,
            { ...options, method: METHODS.POST },
            options?.timeout,
        );

    PUT: HTTPMethod = (url, options) =>
        this.request(
            url,
            { ...options, method: METHODS.PUT },
            options?.timeout,
        );

    DELETE: HTTPMethod = (url, options) =>
        this.request(
            url,
            { ...options, method: METHODS.DELETE },
            options?.timeout,
        );

    request = <T>(
        url: string,
        options: Options,
        timeout = 5000,
    ): Promise<Responce<T>> => {
        const { method, data, headers = {} } = options;

        return new Promise<Responce<T>>((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            if (!(data instanceof FormData)) {
                headers['Content-Type'] = 'application/json';
            } else {
                headers['Content-Type'] = '';
            }

            xhr.open(method, this.url + url);
            xhr.withCredentials = true;

            const headersMerge = merge(this.header, headers ?? {});
            Object.entries(headersMerge).forEach(([key, value]) => {
                if (value) xhr.setRequestHeader(key, value);
            });

            xhr.onload = () => {
                const isJson = xhr
                    .getResponseHeader('Content-Type')
                    ?.includes('application/json');
                const body = isJson ? JSON.parse(xhr.response) : xhr.response;
                const response: Responce<T> = { status: xhr.status };
                if (xhr.status < 400) {
                    response.data = body;
                } else {
                    response.error = body;
                }
                resolve(response);
            };

            xhr.onabort = () => reject(new Error('Request was aborted'));
            xhr.onerror = () => reject(new Error('Request failed'));
            xhr.timeout = timeout;
            xhr.ontimeout = () => reject(new Error('Request timed out'));

            if (method === 'GET' || !data) {
                xhr.send();
            } else if (!(data instanceof FormData)) {
                xhr.send(JSON.stringify(data));
            } else {
                xhr.send(data);
            }
        });
    };
}
