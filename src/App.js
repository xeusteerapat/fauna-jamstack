import axios from 'axios';
import { useState, useEffect } from 'react';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';

function App() {
  const [links, setLinks] = useState([]);

  const loadLinks = async () => {
    try {
      const res = await axios.get('/api/getLinks');
      const data = res.data;

      setLinks(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <div className='container py-5'>
      <h1 className='text-center mb-5'>My Favorite Links</h1>
      <LinkForm refreshLinks={loadLinks} />
      <LinkList links={links} refreshLinks={loadLinks} />
    </div>
  );
}

export default App;
