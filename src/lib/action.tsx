'use server'

export async function handleCreate<T>({url, payload}: { url: string, payload: T }) {
    return new Promise((resolve) => {
        setTimeout(() => resolve('berhasil'), 3000)
    })
}


export async function handleUpdate() {

}

export async function handleDelete() {

}


export async function handleGetAll() {

}

export async function handleGetDetail() {

}

export async function handleFilter({url, filter, search}: {
    url: string,
    filter?: object,
    search?: string
}) {
    return new Promise((resolve) => {
        setTimeout(() => resolve('berhasil'), 3000)
    })
}
