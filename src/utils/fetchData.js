export const exerciseOptions =  {
    method: 'GET',
    // params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': 'e6b4df30d8msh509712949ee26f4p1bc0bejsnc49a5d4c75d5',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };
export const fetchData = async (url, options)=>{
    const response = await fetch(url, options);
    const data = await response.json();


    return data;
}