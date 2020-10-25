import React, { useState } from 'react';
import axios from 'axios';

const LinkForm = ({ refreshLinks }) => {
  const initialFormValue = {
    name: '',
    url: '',
    description: '',
  };

  const [formValue, setFormvalue] = useState(initialFormValue);
  const { name, url, description } = formValue;

  const handleChange = e => {
    setFormvalue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormvalue(initialFormValue);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios({
        url: '/.netlify/functions/createLink',
        method: 'POST',
        data: {
          name,
          url,
          description,
        },
      });

      resetForm();
      refreshLinks();
    } catch (err) {}
  };

  return (
    <div className='card'>
      <div className='card-header'>
        <div className='card-body'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                className='form-control'
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='url'>URL</label>
              <input
                type='text'
                name='url'
                className='form-control'
                value={url}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <textarea
                name='description'
                className='form-control'
                value={description}
                onChange={handleChange}
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LinkForm;
