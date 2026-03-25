import React from 'react'
import { Typography, Box } from '@mui/material'

const drawings = [
  { file: 'sherman-6522.jpg', title: 'Sherman', year: '2022', medium: 'Graphite on Paper', size: '18×24' },
  { file: 'bang-bang-pie.jpg', title: 'Bang Bang Pie', year: '2022', medium: 'Graphite on Paper', size: '18×24' },
  { file: 'ipsento-606.jpg', title: 'Ipsento 606', year: '2022', medium: 'Graphite on Paper', size: '18×24' },
  { file: 'sherman-11721.jpg', title: 'Sherman II', year: '2021', medium: 'Graphite on Paper', size: '18×24' },
  { file: 'sherman-3622.jpg', title: 'Sherman III', year: '2022', medium: 'Graphite on Paper', size: '18×24' },
  { file: 'bekah-creparie.jpg', title: 'Bekah Creparie', year: '2021', medium: 'Graphite on Paper', size: '18×24' },
  { file: 'sherman-21322.jpg', title: 'Sherman IV', year: '2022', medium: 'Graphite on Paper', size: '18×24' },
  { file: 'big-star.jpg', title: 'Big Star', year: '2021', medium: 'Graphite on Paper', size: '18×24' },
  { file: 'sherman-undisclosed.jpg', title: 'Sherman V', year: '2022', medium: 'Graphite on Paper', size: '18×24' },
  { file: 'gram-and-rosa-parks.jpg', title: 'Gram & Rosa Parks', year: '2021', medium: 'Graphite on Paper', size: '18×24' },
  { file: 'sherman-2622.jpg', title: 'Sherman VI', year: '2022', medium: 'Graphite on Paper', size: '18×24' },
  { file: 'sherman-61222.jpg', title: 'Sherman VII', year: '2022', medium: 'Graphite on Paper', size: '18×24' },
]

const gap = 40

export default function Drawing() {
  return (
    <Box>
      <Box sx={{ textAlign: 'center', mt: { xs: 2, md: 4 }, mb: { xs: 5, md: 8 } }}>
        <Typography
          sx={{
            letterSpacing: 6,
            textTransform: 'uppercase',
            fontSize: 13,
            color: '#999',
            mb: 1,
          }}
        >
          Drawing
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontFamily: 'Prata, Georgia, serif' }}
        >
          Work
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: `${gap}px` }}>
        {drawings.map((d) => (
          <Box
            key={d.file}
            sx={{ width: `calc((100% - ${gap * 2}px) / 3)`, textAlign: 'center', mb: { xs: 2, md: 4 } }}
          >
            <img
              src={`/images/${d.file}`}
              alt={d.title}
              style={{ width: '100%', display: 'block' }}
            />
            <Box sx={{ pt: 2.5, pb: 2 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15 }}>
                {d.title}
              </Typography>
              <Typography sx={{ fontSize: 13, color: '#888' }}>
                {d.year}
              </Typography>
              <Typography sx={{ fontSize: 13, color: '#888' }}>
                {d.medium}
              </Typography>
              <Typography sx={{ fontSize: 13, color: '#888' }}>
                {d.size}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
