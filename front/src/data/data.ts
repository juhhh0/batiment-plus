import qs from 'qs';

const baseUrl = 'http://localhost:1337';

export const getHomeData = async () => {
    try{
        const url = new URL("/api/home-page", baseUrl);

        url.search = qs.stringify({
            populate: {
              hero: {
                populate: "*",
              },
              content: {
                populate: "*",
              }
            },
          });
        
        const response = await fetch(url.href);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}