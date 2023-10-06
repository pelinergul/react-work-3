import axios from 'axios';


export const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
          Authorization:'Client-ID YbzRvMYAGDrCUKv9husUbPVB3vCJGTmowd1TPg1Oe_I'
        },
        params:{
          query:term,
        }
      })
      return response.data.results;
  };
