import config from '../config'

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(object) {
    return fetch(`${URL_VIDEOS}`, {
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

export default {
    create
}
