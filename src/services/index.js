import { gql, GraphQLClient } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || "default_endpoint";

export const hygraph = new GraphQLClient(graphqlAPI);

const getNewsQuery = gql`
  query Blogs {
    blogs {
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
