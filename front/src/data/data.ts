import qs from "qs";

const baseUrl = "http://localhost:1337";

export const getHomeData = async () => {
  try {
    const url = new URL("/api/home-page", baseUrl);

    url.search = qs.stringify({
      populate: {
        hero: {
          populate: "*",
        },
        content: {
          populate: "*",
        },
      },
    });

    const response = await fetch(url.href);
    const data = await response.json();
    return data.data.attributes;
  } catch (error) {
    console.error(error);
  }
};

const getNavbar = async () => {
  const url = new URL("/api/navbar", baseUrl);

  url.search = qs.stringify({
    populate: {
      links: {
        populate: "*",
      },
    },
  });

  const response = await fetch(url.href);
  return response.json();
};

const getGlobal = async () => {
  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    populate: {
      logo: {
        populate: true,
      },
    },
  });

  const response = await fetch(url.href);
  return response.json();
};

export const getGlobalsData = async () => {
  try {
    const navbarData = await getNavbar();
    const globalData = await getGlobal();

    return {
      navbar: navbarData.data.attributes,
      globals: globalData.data.attributes,
    };
  } catch (error) {
    console.error(error);
  }
};
