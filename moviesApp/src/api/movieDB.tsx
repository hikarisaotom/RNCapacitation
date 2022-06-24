import axios from 'axios';

const movieDB=axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'7a30c243665f85825e8f7e6ae19711fa',
        language:'es-ES'
    }
});

export default movieDB;