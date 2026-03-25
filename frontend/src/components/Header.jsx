import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function Header() {
  return (
    <AppBar position="sticky" elevation={1} sx={{ mb: 3, backgroundColor: "#fff", color: "#000" }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h6" component={RouterLink} to="/" sx={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Prata, Georgia, serif' }}>
            A.K.BUENO
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button component={RouterLink} to="/painting" color="inherit" sx={{ fontFamily: 'Prata, Georgia, serif' }}>Painting</Button>
          <Button component={RouterLink} to="/drawing" color="inherit" sx={{ fontFamily: 'Prata, Georgia, serif' }}>Drawing</Button>
          <Button component={RouterLink} to="/about" color="inherit" sx={{ fontFamily: 'Prata, Georgia, serif' }}>About</Button>
          <Button component={RouterLink} to="/contact" color="inherit" sx={{ fontFamily: 'Prata, Georgia, serif' }}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
