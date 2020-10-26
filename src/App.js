import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';
import Spinner from './components/Spinner';

function App() {
  const [links, setLinks] = useState([]);

  const loadLinks = async () => {
    try {
      const res = await axios.get('/.netlify/functions/getLinks');
      const data = res.data;
      setLinks(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const { _, status } = useQuery('links', loadLinks);

  const fetchLinks = () => {
    if (status === 'loading') return <Spinner />;
    if (status === 'error') return <div>Error fetching data</div>;
    if (status === 'success')
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
