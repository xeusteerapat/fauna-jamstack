const { DELETE_LINK } = require('./utils/linksQuery');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async event => {
  if (event.httpMethod !== 'DELETE') {
    return formattedResponse(405, { error: 'Method not supported' });
  }

  const { _id } = JSON.parse(event.body);
  const variables = { _id };

  try {
    const { deleteLink } = await sendQuery(DELETE_LINK, variables);

    return formattedResponse(200, deleteLink);
  } catch (err) {
    console.log(err);
    return formattedResponse(500, {
      error: `Something went wrong with ${err}`,
    });
  }
};
