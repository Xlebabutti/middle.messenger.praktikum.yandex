/* eslint-disable @typescript-eslint/no-explicit-any */
enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

type Options = {
    method: METHODS;
    data?: any;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

export class HTTPTransport {
    private apiUrl: string = '';
    constructor(apiPath: string) {
        this.apiUrl = `local${apiPath}`;
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

        const isJson = response.headers
            .get('content-type')
            ?.includes('application/json');
        const resultData = (await isJson) ? response.json() : null;

        return resultData as unknown as TResponse;
    }
}
