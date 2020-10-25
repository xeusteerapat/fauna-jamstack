import React from 'react';
import axios from 'axios';

const LinkCard = ({ link, refreshLinks }) => {
  const archiveLink = async () => {
    link.archived = true;

    try {
      await axios({
        url: '/.netlify/functions/updateLink',
        method: 'PUT',
        data: link,
      });

      refreshLinks();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteLink = async () => {
    const _id = link._id;

    try {
      await axios({
        url: '/.netlify/functions/deleteLink',
        method: 'DELETE',
        data: { _id },
      });

      refreshLinks();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='card my-4'>
      <div className='card-header'>{link.name}</div>
      <div className='card-body'>
        <a href={link.url} target='_blank' rel='noopener noreferrer'>
          {link.url}
        </a>
        <p>{link.description}</p>
      </div>
      <div className='card-footer'>
        <button className='btn btn-warning mr-2' onClick={archiveLink}>
          Archive
        </button>
        <button className='btn btn-danger' onClick={deleteLink}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default LinkCard;
