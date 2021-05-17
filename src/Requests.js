import API_KEY from './API_KEY';

const requests = {
    fetchTopHeadlinesIndia: `top-headlines?country=in&pageSize=40&apiKey=${API_KEY}`,
    fetchTopHeadlinesUS: `top-headlines?country=us&apiKey=${API_KEY}`,
    fetchTopHeadlinesBusiness: `top-headlines?category=business&apiKey=${API_KEY}`,
}

export default requests;