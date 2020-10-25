const GET_LINKS = `
  query {
    allLinks{
      data{
        _id
        name
        url
        description
        archived
      }
    }
  }
`;

const CREATE_LINK = `
  mutation(
    $name: String!
    $url: String!
    $description: String!
  ) {
    createLink(data: {
      name: $name,
      url: $url,
      description: $description,
      archived: false
    }) {
      _id
      name
      url
      description
      archived
    }
  }
`;

const UPDATE_LINK = `
  mutation(
    $_id: ID!
    $archived: Boolean!
    $name: String!
    $url: String!
    $description: String!
  ) {
    updateLink(
      id: $_id
      data: {
        name: $name
        url: $url
        description: $description
        archived: $archived
      }
    ) {
      name
      _id
      url
      description
      archived
    }
  }
`;

const DELETE_LINK = `
  mutation($_id: ID!) {
    deleteLink(id: $_id) {
      _id
    }
  }
`;

module.exports = {
  GET_LINKS,
  CREATE_LINK,
  UPDATE_LINK,
  DELETE_LINK,
};
