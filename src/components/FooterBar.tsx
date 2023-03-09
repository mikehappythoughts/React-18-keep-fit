import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FooterBar = () => {
  return (
    <Box sx={{ backgroundColor: '#000', padding: '15px' }}>
      <Box sx={{ maxWidth: 'md', mx: 'auto' }}>
        <Typography variant='body2' color='#fff' align='center'>
          {'Copyright © Mike Oscar '}
          {new Date().getFullYear()}.
        </Typography>
      </Box>
    </Box>
  );
};

export { FooterBar };
