import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { type IExerciseItem } from '../interfaces';
import ReactPlayer from 'react-player/youtube';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { red } from '@mui/material/colors';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useStoreState } from '../stores/store';

const ExerciseDetail = () => {
  const getExerciseDetails = useStoreState((state) => state.getExerciseDetails);

  // id param
  const { id } = useParams();

  const defaultExerciseDetails: IExerciseItem = {
    id: '',
    exercise_name: '',
    muscle_exercised: [],
    video_url: '',
    image_src: '',
  };

  const exerciseItemDetail = getExerciseDetails(id) ?? defaultExerciseDetails;

  return (
    <Box className='content-section'>
      <Box id='content' sx={{ maxWidth: 'md', mx: 'auto' }}>
        <Box alignItems='center' justifyContent='center' p='20px'>
          {/* Render a YouTube video player */}
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url={exerciseItemDetail.video_url}
              width='100%'
              height='100%'
            />
          </div>
          {/* title and icon */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '10px',
            }}
          >
            <FitnessCenterIcon sx={{ color: red[600], mr: 1 }} />
            <Typography
              variant='h2'
              className='exercise-card__title'
              sx={{
                p: '10px 10px 10px 0',
                fontWeight: 'bold',
                fontSize: { xs: '1.2rem', sm: '1.5rem' },
              }}
            >
              {exerciseItemDetail.exercise_name}
            </Typography>
          </Box>
          {/* muscles used */}
          <Stack direction='column' spacing={1} sx={{ alignItems: 'left' }}>
            <Divider />
            <Typography
              className='exercise-card__title'
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1rem', sm: '1.2rem' },
              }}
            >
              Muscles used
            </Typography>
            <Stack direction='row' spacing={1} pl='10px'>
              {exerciseItemDetail.muscle_exercised.map(
                (muscle: string, idx: number) => (
                  <Chip
                    key={idx}
                    label={muscle}
                    sx={{
                      backgroundColor: red[600],
                      color: '#fff',
                    }}
                    size='small'
                  />
                )
              )}
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export { ExerciseDetail };
