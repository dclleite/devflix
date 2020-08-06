import config from '../config'

const URL_CATEGORIAS = `${config.URL_BACKEND}/categorias`;

function getAll() {
    return fetch(URL_CATEGORIAS)
        .then( async (respostaDoServidor) => {

            if(respostaDoServidor.ok){
                const resposta = await respostaDoServidor.json();
                return resposta;
            }

            throw new Error('Não foi possivel pegar os dados');
            
        });
}

function getAllWithVideos() {
    return fetch(`${URL_CATEGORIAS}?_embed=videos`)
        .then( async (respostaDoServidor) => {

            if(respostaDoServidor.ok){
                const resposta = await respostaDoServidor.json();
                return resposta;
            }

            throw new Error('Não foi possivel pegar os dados');
            
        });
}

export default {
    getAllWithVideos,
    getAll,
};