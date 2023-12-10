'use server'

import {apiDelete, apiPost, apiPut} from "@/lib/api";

type GeneralActionType<T> = {
    url: string,
    payload: T
}

export async function postAction<T>({url, payload}: GeneralActionType<T>) {
    return new Promise((resolve, reject) => {
        apiPost({url, payload})
            .then(result => resolve(result))
            .catch(error => reject(error))
    })
}


export async function putAction<T>({url, payload}: GeneralActionType<T>) {
    return new Promise((resolve, reject) => {
        apiPut({url, payload})
            .then(result => resolve(result))
            .catch(error => reject(error))
    })
}

export async function deleteAction<T>({url}: Omit<GeneralActionType<T>, 'payload'>) {
    return new Promise((resolve, reject) => {
        apiDelete({url})
            .then(result => resolve(result))
            .catch(error => reject(error))
    })
}

