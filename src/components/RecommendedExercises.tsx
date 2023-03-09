import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ExerciseCard } from './index'
import { type IExerciseItem } from '../interfaces'
import { useStoreState } from '../stores/store'

const RecommendedExercises = () => {
  const exercises = useStoreState((state) => state.exercises)
  const currentExercises = [...exercises.slice(0, 6)]

  return (
    <Box component="section" className="content-section" sx={{ backgroundColor: '#e6e6e6' }}>
      {(currentExercises.length > 0) && (
        <Box sx={{ maxWidth: 'md', mx: 'auto' }}>
          {/* main title */}
          <Stack alignItems="center" justifyContent="center">
            <Typography variant="h2" className="main-titles" sx={{ fontWeight: 700, fontSize: { lg: '2.75rem', xs: '1.875rem' } }}>
              Recommended exercises
            </Typography>
          </Stack>
          {/* card grid */}
          <Grid container spacing={1}>
            {currentExercises.map((exerciseItem: IExerciseItem, idx: number) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <ExerciseCard exercise={exerciseItem} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  )
}

export { RecommendedExercises }
