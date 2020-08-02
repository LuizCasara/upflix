import config from '../config'
import repository from './repository'

const URL = `${config.URL_BACKEND}/videos`;

function getAll() {
    return repository.getAll(URL);
}

function getByCategoryId(id) {
    return repository.getBy(URL, id, 'categoriaId');
}

function create(object) {
    return repository.create(URL, object);
}

function remove(objectId) {
    return repository.remove(URL, objectId);
}

export default {
    create,
    getAll,
    remove,
    getByCategoryId,
}
