import { gql, GraphQLClient } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || "default_endpoint";

export const hygraph = new GraphQLClient(graphqlAPI);

const getNewsQuery = gql`
  query Blogs {
    blogs(orderBy: createdAt_DESC) {
      createdAt
      id
      slug
      title
      featuredImage {
        url
      }
      officer {
        bio
        fullName
        profileImage {
          url
        }
      }
    }
  }
`;

export async function getNews() {
  try {
    const limit = 10; // Example limit value
    const variables = { limit };
    const news = hygraph
      .request(getNewsQuery, variables)
      .then((data) => {
        // Handle successful response
        return data.blogs;
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
    return news;
  } catch (error) {
    // Handle error
    console.error(error);
  }
}

const get3NewsQuery = gql`
  query Blogs {
    blogs(orderBy: createdAt_DESC, first: 3) {
      createdAt
      id
      slug
      title
      featuredImage {
        url
      }
      officer {
        bio
        fullName
        profileImage {
          url
        }
      }
    }
  }
`;

export async function get3News() {
  try {
    const news = hygraph
      .request(get3NewsQuery)
      .then((data) => {
        // Handle successful response
        return data.blogs;
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
    return news;
  } catch (error) {
    // Handle error
    console.error(error);
  }
}

const get5NewsQuery = gql`
  query Blogs {
    blogs(orderBy: createdAt_DESC, first: 5) {
      createdAt
      id
      slug
      title
      featuredImage {
        url
      }
      officer {
        bio
        fullName
        profileImage {
          url
        }
      }
    }
  }
`;

export async function get5News() {
  try {
    const news = hygraph
      .request(get5NewsQuery)
      .then((data) => {
        // Handle successful response
        return data.blogs;
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
    return news;
  } catch (error) {
    // Handle error
    console.error(error);
  }
}

const getNewsDetailQuery = gql`
  query BlogDetail($slug: String!) {
    blog(where: { slug: $slug }) {
      detail {
        html
      }
      featuredImage {
        url
      }
      officer {
        fullName
        bio
        profileImage {
          url
        }
      }
      title
    }
  }
`;

export async function getNewsDetail(slug) {
  // console.log(slug);
  try {
    const detail = hygraph
      .request(getNewsDetailQuery, { slug })
      .then((data) => {
        // Handle successful response
        return data.blog;
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
    return detail;
  } catch (error) {
    // Handle error
    console.error(error);
  }
}
