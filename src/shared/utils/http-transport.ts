/* eslint-disable @typescript-eslint/no-explicit-any */
import constants from '../../features/auth/constants';

enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

type Options = {
    method: METHODS;
    data?: any;
    timeout?: number;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

// function queryStringify(data: object): string {
//     let query = '?';
//     for (const [key, value] of Object.entries(data)) {
//         query = query.concat(key, '=', value, '&');
//     }
//     query = query.slice(0, -1);
//     return query;
// }

// function setHeaders(xhr: XMLHttpRequest, headers: object) {
//     for (const [header, value] of Object.entries(headers)) {
//         xhr.setRequestHeader(header, value);
//     }
// }

export class HTTPTransport {
    private apiUrl: string = '';
    constructor(apiPath: string) {
        this.apiUrl = `${constants.HOST}${apiPath}`;
    }

    get<TResponse>(
        url: string,
        options: OptionsWithoutMethod = {},
    ): Promise<TResponse> {
        return this.request<TResponse>(`${this.apiUrl}${url}`, {
            ...options,
            method: METHODS.GET,
        });
    }

    post<TResponse>(
        url: string,
        options: OptionsWithoutMethod = {},
    ): Promise<TResponse> {
        return this.request<TResponse>(`${this.apiUrl}${url}`, {
            ...options,
            method: METHODS.POST,
        });
    }

    async request<TResponse>(
        url: string,
        options: Options = { method: METHODS.GET },
    ): Promise<TResponse> {
        const { method, data } = options;

        const response = await fetch(url, {
            method,
            credentials: 'include',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: data ? JSON.stringify(data) : null,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(
                `HTTP error! status: ${response.status}, message: ${errorText}`,
            );
        }

        const isJson = response.headers
            .get('content-type')
            ?.includes('application/json');
        const resultData = (await isJson) ? response.json() : null;

        return resultData as unknown as TResponse;
    }
}
