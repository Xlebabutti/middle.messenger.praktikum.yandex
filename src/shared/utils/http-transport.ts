type Options = {
    data?: Record<string, unknown>;
    headers?: Record<string, string>;
    timeout?: number;
    method: string;
};

type HTTPMethod = (url: string, options?: Options) => Promise<XMLHttpRequest>;

const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

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

export class HTTPTransport {
    GET: HTTPMethod = (url, options) => {
        let str = url;
        if (options?.data) {
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

    request = (url: string, options: Options, timeout = 5000) => {
        const { method, data, headers } = options;

        return new Promise<XMLHttpRequest>((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open(method, url);

            Object.entries(headers ?? {}).forEach(([key, value]) => {
                xhr.setRequestHeader(key, value);
            });

            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr);
                } else {
                    reject(
                        new Error(`Request failed with status ${xhr.status}`),
                    );
                }
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = function () {
                reject(new Error('Request timed out'));
            };

            if (method === 'GET' || !data) {
                xhr.send();
            } else {
                xhr.setRequestHeader(
                    'Content-Type',
                    'application/json;charset=UTF-8',
                );
                xhr.send(JSON.stringify(data));
            }
        });
    };
}
