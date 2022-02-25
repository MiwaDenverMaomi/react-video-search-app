import { useEffect } from 'react';

const Route = ({ path, children }) => {
  useEffect(() => {
    const onPageChange = () => {
      console.log('onPageChange');
    }
    window.addEventListener();
  }, []);
  return window.location.pathname === path ?
    children : null;
};
export default Route;
