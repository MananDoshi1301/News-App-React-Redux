import API_KEY from './API_KEY';

const requests = {
    fetchTopHeadlinesIndia: `top-headlines?country=in&apiKey=${API_KEY}`,
    fetchTopHeadlinesUS: `top-headlines?country=us&apiKey=${API_KEY}`,
}

export default requests;