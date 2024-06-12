import qs from "qs";

const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export const getHomeData = async () => {
  try {
    const url = new URL("/api/home-page", baseUrl);

    url.search = qs.stringify({
      populate: {
        seo: {
          populate: true,
        },
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

export const getPageData = async (slug: string) => {
  try {
    const url = new URL(`/api/pages`, baseUrl);

    url.search = qs.stringify({
      filters: {
        $or: [{ slug: { $eq: slug } }],
      },
      populate: {
        seo: {
          populate: true,
        },
        hero: {
          populate: "*",
        },
        content: {
          populate: "*",
          on: {
            "blocks.icones": {
              populate: {
                icones: {
                  populate: "*",
                },
              },
            },
            "blocks.texte-and-image": {
              populate: "*"
            },
            "blocks.texte-and-texte": {
              populate: "*"
            },
            "blocks.texte": {
              populate: "*"
            },
          },
        },
      },
    });

    const response = await fetch(url.href);
    const data = await response.json();
    return data.data[0].attributes;
  } catch (error) {
    console.error(error);
  }
};
