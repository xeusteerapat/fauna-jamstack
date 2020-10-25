const GET_LINKS = `
  query {
    allLinks{
      data{
        _id
        name
        description
        archived
      }
    }
  }
`;

module.exports = { GET_LINKS };
