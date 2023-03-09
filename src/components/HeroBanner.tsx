import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import HeroBannerImage from '../assets/images/hero.jpg'

const HeroBanner = () => {
  return (
    <Box
      component="section"
      className="hero-banner"
      sx={{
        backgroundImage: `url(${HeroBannerImage})`,
        backgroundPositionX: { xs: '11%', lg: '10%' },
        backgroundPositionY: { lg: '-40px', xs: '10%' },
      }}
    >
      <Box className="hero-banner__title" sx={{ maxWidth: 'md' }}>
        <Typography
          className="hero-banner__text"
          variant="h1"
          sx={{
            fontWeight: '600',
            fontSize: { xs: '2.313rem', sm: '3.125rem', md: '4.375rem', lg: '4.75rem' },
          }}
        >
          Time to make fat cry
        </Typography>
      </Box>
    </Box>
  )
}

export { HeroBanner }
