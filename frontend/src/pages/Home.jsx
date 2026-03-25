import React from 'react'
import { Typography, Box, Button, Link } from '@mui/material'

const features = [
  {
    title: 'Ada Pharmacy',
    artist: 'AK Bueno',
    description:
      'A set of commissioned pieces with Kristie Koning Design for the newly opened Ada Pharmacy in Ada, Michigan.',
    image: '/images/ada-pharmacy.jpg',
    alt: 'Ada Pharmacy installation',
    imagePosition: 'left',
  },
  {
    title: 'Pennyroyal Provisions',
    artist: 'AK Bueno',
    description:
      'Selected pieces on display at Pennyroyal Provisions in Saugatuck, Michigan.',
    image: '/images/IMG-2064-scaled.jpg',
    alt: 'Pennyroyal Provisions installation',
    imagePosition: 'right',
  },
]

function FeatureBlock({ title, artist, description, image, alt, imagePosition }) {
  const imageEl = (
    <Box sx={{ width: { xs: '100%', md: '58%' }, flexShrink: 0 }}>
      <img
        src={image}
        alt={alt}
        style={{
          width: '100%',
          display: 'block',
          boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
          borderRadius: 10,
        }}
      />
    </Box>
  )

  const textEl = (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        py: { xs: 2, md: 4 },
      }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: 22, mb: 0.5 }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: 14, color: '#888', mb: 2 }}>
        {artist}
      </Typography>
      <Typography sx={{ fontSize: 15, color: '#555', lineHeight: 1.8, mb: 2.5 }}>
        {description}
      </Typography>
      <Link
        href="/painting"
        underline="always"
        sx={{ fontSize: 14, fontWeight: 600, color: '#222' }}
      >
        View Work
      </Link>
    </Box>
  )

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: imagePosition === 'left' ? 'row' : 'row-reverse',
        },
        gap: { xs: 3, md: 5 },
        alignItems: 'center',
        mb: { xs: 8, md: 12 },
      }}
    >
      {imageEl}
      {textEl}
    </Box>
  )
}

export default function Home() {
  return (
    <Box sx={{ mt: { xs: -4, md: -6 } }}>
      <Box
        component="section"
        aria-label="Hero"
        sx={{
          width: '100vw',
          position: 'relative',
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)',
          minHeight: { xs: 420, md: 560 },
          backgroundImage: `url('/images/Ada-1-painting-BANNER.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: { xs: 'scroll', md: 'fixed' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.45)', pointerEvents: 'none' }} />
        <Box sx={{ width: '100%', maxWidth: 1100, mx: 'auto', px: 2, textAlign: 'center', color: '#111', position: 'relative' }}>
          <Typography variant="h1" sx={{ fontSize: { xs: 40, md: 96 }, fontFamily: 'Prata, Georgia, serif', color: '#111' }}>
            A.K.BUENO
          </Typography>
          <Typography variant="subtitle1" sx={{ letterSpacing: 4, mt: 1, color: '#000' }}>VISUAL ARTIST</Typography>
          <Typography sx={{ mt: 1, color: '#000' }}>Chicago | Denver | Grand Rapids</Typography>
          <Box sx={{ mt: 2 }}>
            {/* // remove border radius from buttons */}
            <Button href="/painting" variant="contained" size="large" sx={{ mr: 2, borderRadius: 1 }}>View Work</Button>
            <Button href="/contact" variant="outlined" size="large">Contact</Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: { xs: 6, md: 10 }, mb: { xs: 4, md: 8 } }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            fontFamily: 'Prata, Georgia, serif',
            mb: { xs: 5, md: 8 },
          }}
        >
          Recent Work
        </Typography>

        {features.map((f) => (
          <FeatureBlock key={f.title} {...f} />
        ))}
      </Box>
    </Box>
  )
}
