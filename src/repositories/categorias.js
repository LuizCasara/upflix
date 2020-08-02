import config from '../config'
import repository from './repository'

const URLS = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
    return fetch(`${URLS}?_embed=videos`)
        .then(async (response) => {
            if (response.ok) {
                return await response.json();
            }
            throw new Error("Não foi possível pegar os dados");
        });
}

function getAll() {
    return repository.getAll(URLS);
}

function create(object) {
    return repository.create(URLS, object);
}

function remove(objectId) {
    return repository.remove(URLS, objectId);
}

export default {
    getAllWithVideos,
    getAll,
    create,
    remove,
}
