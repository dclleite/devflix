const URL_BACKEND = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080'
    : 'url-de-produção';

export default {
    URL_BACKEND,
};

