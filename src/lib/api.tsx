type GeneralTypeApi = {
    url: string,
    payload: any,
    filter: object
}
export const BASE_URL = ""

export async function apiFetch({url, filter}: Omit<GeneralTypeApi, 'payload'>) {
    // const params = new URLSearchParams
    const response = await fetch(`${BASE_URL}${url}`, {
        headers: {
            Authorization: `Bearer ${""}`,
        },
    });
    return await response.json();
}

export async function apiPost({url, payload}: Omit<GeneralTypeApi, 'filter'>) {
    const response = await fetch(`${BASE_URL}${url}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${""}`,
        },
        body: JSON.stringify(payload)
    });
    return await response.json();
}

export async function apiPut({url, payload}: Omit<GeneralTypeApi, 'filter'>) {
    const response = await fetch(`${BASE_URL}${url}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${""}`,
        },
        body: JSON.stringify(payload)
    });
    return await response.json();
}

export async function apiDelete({url}: Pick<GeneralTypeApi, 'url'>) {
    const response = await fetch(`${BASE_URL}${url}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${""}`,
        },
    });
    return await response.json();
}
