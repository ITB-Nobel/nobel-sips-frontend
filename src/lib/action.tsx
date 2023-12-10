'use server'

export async function postAction<T>({url, payload}: { url: string, payload: T }) {
    return new Promise((resolve) => {
        setTimeout(() => resolve('berhasil'), 3000)
    })
}


export async function putAction<T>({url, payload}: { url: string, payload: T }) {

}

export async function deleteAction() {

}


export async function getAllAction() {

}

export async function getDetailAction() {

}

export async function filterAction({url, filter, search}: {
    url: string,
    filter?: object,
    search?: string
}) {
    return new Promise((resolve) => {
        setTimeout(() => resolve('berhasil'), 3000)
    })
}
