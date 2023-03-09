import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import { type IExerciseItem } from '../interfaces';
import { ExerciseCard } from './index';
import { useStoreActions, useStoreState } from '../stores/store';
import { useState } from 'react';

const SearchExercises = () => {
  const [exerciseSearch, setExerciseSearch] = useState('');

  const exercises = useStoreState((state) => state.exercises);
  const exerciseSearchResults = useStoreState(
    (state) => state.exerciseSearchResults
  );
  const setExerciseSearchResults = useStoreActions(
    (state) => state.setExerciseSearchResults
  );

  const handleSearch = (
    e: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e?.preventDefault();

    if (exerciseSearch !== '') {
      const SearchResults = exercises.filter((item: IExerciseItem) =>
        item.exercise_name.toLowerCase().includes(exerciseSearch)
      );

      setExerciseSearch('');
      setExerciseSearchResults(SearchResults);
    } else {
      setExerciseSearchResults([]);
    }
  };

  return (
    <Box
      component='section'
      id='content'
      className='content-section'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ maxWidth: 'md' }}>
        <Stack alignItems='center' justifyContent='center'>
          {/* main title */}
          <Typography
            variant='h2'
            className='main-titles'
            sx={{
              fontWeight: 700,
              fontSize: { lg: '2.75rem', xs: '1.875rem' },
            }}
          >
            Looking for a specific exercise? Try our exercise search.
          </Typography>
          {/* search input */}
          <Box
            component='form'
            role='search'
            position='relative'
            sx={{ display: 'flex', width: '1', maxWidth: 360 }}
            noValidate
            autoComplete='off'
          >
            <TextField
              id='search'
              label='Search Exercises'
              sx={{
                flex: 1,
                input: {
                  padding: '7px',
                  fontWeight: '700',
                  border: 'none',
                  borderRadius: '4px',
                },
                width: { lg: '450px', xs: '30px' },
                backgroundColor: '#fff',
                borderRadius: '40px',
                pb: '30px',
                label: {
                  top: '-8px',
                  '&.Mui-focused': {
                    top: '0',
                  },
                },
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(e);
                }
              }}
              value={exerciseSearch}
              onChange={(e) => {
                setExerciseSearch(e.target.value.toLowerCase());
              }}
              aria-label='Search through exercises'
              type='text'
            />
            <Button
              className='search-btn'
              sx={{
                backgroundColor: red['600'],
                color: '#fff',
                textTransform: 'none',
                width: '80px',
                height: '37px',
                marginLeft: -1,
                fontSize: '1rem ',
                '&:hover': {
                  backgroundColor: red['900'],
                },
              }}
              disableElevation
              variant='contained'
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>
        </Stack>

        <Divider variant='middle' sx={{ mb: '15px' }} />
        {/* search results */}
        <Typography
          variant='h2'
          className='main-titles'
          sx={{
            fontWeight: 700,
            fontSize: { lg: '2.75rem', xs: '1.875rem' },
          }}
        >
          Search Results
        </Typography>
        {exerciseSearchResults.length > 0 ? (
          <Grid container spacing={1}>
            {exerciseSearchResults.map(
              (exerciseItem: IExerciseItem, idx: number) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <ExerciseCard exercise={exerciseItem} />
                </Grid>
              )
            )}
          </Grid>
        ) : (
          <Typography
            sx={{
              fontSize: {
                lg: '1.5rem',
                xs: '1.25rem',
                textAlign: 'center',
              },
            }}
          >
            No results
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export { SearchExercises };
