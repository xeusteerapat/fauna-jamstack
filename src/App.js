import axios from 'axios';
import { useState, useEffect } from 'react';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';

function App() {
  const [links, setLinks] = useState([]);

  const loadLinks = async () => {
    try {
      const res = await axios.get('/.netlify/functions/getLinks');
      const data = res.data;

      setLinks(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadLinks();
  }, []);

  const fetchLinks = () => {
    if (links.length === 0) {
      return (
        <div className='text-center pt-4'>
          <div
            className='spinner-border text-primary'
            style={{
              width: '3rem',
              height: '3rem',
            }}
            role='status'
          >
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      );
    }

    return <LinkList links={links} refreshLinks={loadLinks} />;
  };

  return (
    <div className='container py-5'>
      <h1 className='text-center mb-5'>My Favorite Links</h1>
      <LinkForm refreshLinks={loadLinks} />
      {fetchLinks()}
    </div>
  );
}

export default App;
