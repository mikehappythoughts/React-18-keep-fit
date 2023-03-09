import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Route, Routes } from 'react-router-dom';
import Exercise from './pages/exercise';
import Home from './pages/Home';
import './App.css';
import { fetchData } from './utils/fetchData';
import { useEffect, useState } from 'react';
import { asError } from 'catch-unknown';
import { FooterBar, HeroBanner, NavBar } from './components/index';
import { useStoreActions } from './stores/store';

export default function App() {
  const [fetchError, setFetchError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const setExercises = useStoreActions((state) => state.setExercises);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
        const response = await fetchData(API_URL);
        setExercises(response);

        setFetchError('');
      } catch (err) {
        setFetchError(asError(err).message);
        console.log(fetchError);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchItems();
  }, []);

  return (
    <Box m='auto'>
      <>
        <header role='banner'>
          <NavBar />
        </header>
        <main className='main' role='main'>
          <HeroBanner />
          {isLoading ? (
            <>
              <div className='sr-only' role='alert'>
                loading content...
              </div>
              <Backdrop
                sx={{
                  color: '#fff',
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={true}
              >
                <CircularProgress color='inherit' />
              </Backdrop>
            </>
          ) : (
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/exercise/:id' element={<Exercise />} />
            </Routes>
          )}
        </main>
        <footer role='contentinfo'>
          <FooterBar />
        </footer>
      </>
    </Box>
  );
}
