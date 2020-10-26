const { CREATE_LINK } = require('./utils/linksQuery');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async event => {
  const { name, url, description } = JSON.parse(event.body);
  const variables = { name, url, description, archived: false };

  try {
    const { createLink } = await sendQuery(CREATE_LINK, variables);

    return formattedResponse(201, createLink);
  } catch (err) {
    console.log(err);
    return formattedResponse(500, {
      error: `Something went wrong with ${err}`,
    });
  }
};
