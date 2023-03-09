import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <Box role="navigation" component="nav" sx={{ maxWidth: 'md', mx: 'auto' }}>
      <Stack direction="row" justifyContent="space-around" p="15px 15px 0" sx={{ gap: { sm: '23px', xs: '20px' }, justifyContent: 'none' }} px="20px">
        <Stack direction="column" gap="20px" fontSize="1rem" alignItems="flex-start">
          {/* skip to content */}
          <a href="#content" aria-label="Skip to content" className="header__skip-to-content">
            skip to content
          </a>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'link__active' : 'link')} style={{ textDecoration: 'none', color: '#3A1212' }}>
            Home
          </NavLink>
        </Stack>
      </Stack>
    </Box>
  )
}

export { NavBar }
