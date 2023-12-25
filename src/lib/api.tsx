type RequestApi = {
    url: string,
    payload: any,
    filter?: Record<string, string | number | boolean | undefined>
}

export type PaginateResponse<T> = {
    data : T,
    meta: MetaType,
    links: LinksType
}

export type LinksType = {
    first: string,
    last: string,
    next: string,
    prev: string,
}

export type MetaType = {
    current_page:number,
    from:number,
    to:number,
    total:number,
    last_page:number,
    per_page: number
}
export const BASE_URL = process.env.API_URL;

export async function apiFetch<T>({url, filter}: Omit<RequestApi, 'payload'>): Promise<T> {
    const params = new URLSearchParams
    if(filter){
        Object.entries(filter).forEach(([key,value]) => {
            if(value) params.append(key,value?.toString())
        })
    }

    const response = await fetch(`${BASE_URL}/${url}?${params.toString()}`, {
        headers: {
            Authorization: `Bearer ${""}`,
        },
    });
    return await response.json();
}

export async function apiPost({url, payload}: Omit<RequestApi, 'filter'>) {
    const response = await fetch(`${BASE_URL}/${url}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${""}`,
        },
        body: JSON.stringify(payload)
    });
    return await response.json();
}

export async function apiPut({url, payload}: Omit<RequestApi, 'filter'>) {
    const response = await fetch(`${BASE_URL}/${url}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${""}`,
        },
        body: JSON.stringify(payload)
    });
    return await response.json();
}

export async function apiDelete({url}: Pick<RequestApi, 'url'>) {
    const response = await fetch(`${BASE_URL}/${url}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${""}`,
        },
    });
    return await response.json();
}
