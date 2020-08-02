function getAll(url) {
    return fetch(`${url}`)
        .then(async (response) => {
            if (response.ok) {
                return await response.json();
            }
            throw new Error("Não foi possível pegar os dados");
        });
}

function getBy(url, id, filter) {
    return fetch(`${url}?${filter}=${id}`)
        .then(async (response) => {
            if (response.ok) {
                return await response.json();
            }
            throw new Error("Não foi possível pegar os dados");
        });
}

function create(url, object) {
    return fetch(`${url}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(object),
    })
        .then(async (response) => {
            if (response.ok) {
                return await response.json();
            }
            throw new Error("Não foi possível cadastrar os dados");
        });
}

function remove(url, id) {
    return fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    })
        .then(async (response) => {
            if (response.ok) {
                return await response.json();
            }
            throw new Error("Não foi possível deletar os dados");
        });
}

export default {
    create,
    getAll,
    remove,
    getBy,
}
