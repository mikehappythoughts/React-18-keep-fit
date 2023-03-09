import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { ImageBlock } from './index';
import { type IExerciseCardProps } from '../interfaces';

const ExerciseCard = ({ exercise }: IExerciseCardProps) => {
  return (
    <Box className='exercise-card'>
      {/* exercise title */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '10px',
        }}
      >
        <FitnessCenterIcon sx={{ color: red[600] }} />
        <Link
          aria-label={`View ${exercise.exercise_name} exercise details`}
          className='exercise-card__link'
          to={`/exercise/${exercise.id}`}
        >
          <Typography
            variant='h3'
            className='exercise-card__title'
            sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}
          >
            {exercise.exercise_name}
          </Typography>
        </Link>
      </Box>
      {/* image */}
      <ImageBlock
        imageUrl={`/src/assets/images/${exercise.image_src}`}
        altText={`${exercise.exercise_name}`}
        imageClass={'img__responsive-width'}
      />
    </Box>
  );
};

export { ExerciseCard };
