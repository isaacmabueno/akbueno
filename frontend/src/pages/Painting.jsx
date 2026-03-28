import React from 'react'
import { Typography, Box } from '@mui/material'

const paintings = [
  { file: 'lake-drive.jpg', title: 'Lake Drive', year: '2025', medium: 'Acrylic on Canvas', size: '36×48' },
  { file: 'pilsen-alley.jpg', title: 'Pilsen Alley', year: '2025', medium: 'Acrylic on Canvas', size: '48×36' },
  { file: 'pasteur.jpg', title: 'Pasteur', year: '2025', medium: 'Acrylic on Canvas', size: '30×40' },
  { file: 'indie-walls.jpg', title: 'Lake Tahoe', year: '2025', medium: 'Acrylic on Canvas', size: '48×72' },
  { file: 'fred-meijer.jpg', title: 'Fred Meijer Gardens', year: '2025', medium: 'Acrylic on Canvas', size: '60×40' },
  { file: 'baby-window.jpg', title: 'Baby Window', year: '2025', medium: 'Acrylic on Canvas', size: '30×40' },
  { file: 'daeco-1.jpg', title: 'Daeco 1', year: '2024', medium: 'Acrylic on Canvas', size: '52×40' },
  { file: 'daeco-2.jpg', title: 'Daeco 2', year: '2024', medium: 'Acrylic on Canvas', size: '36×48' },
  { file: 'kelley.jpg', title: 'Kelley', year: '2024', medium: 'Acrylic on Canvas', size: '30×36' },
  { file: 'GR-Ford-Mural-Excerpt.jpg', title: 'Excerpt from Gerald R Ford Airport', year: '2024', medium: 'Acrylic on Canvas', size: '45ftx4ft' },
  { file: 'Lindsay-Hall.jpg', title: 'Lindsay Hall', year: '2023', medium: 'Acrylic on Canvas', size: '30×40' },
  { file: 'Art-Institute.jpg', title: 'Art Institute', year: '2023', medium: 'Acrylic on Canvas', size: '20×30' },
  { file: 'ada-1.jpg', title: 'Ada 1', year: '2025', medium: 'Acrylic on Canvas', size: '36×48' },
  { file: 'ada-2.jpg', title: 'Ada 2', year: '2025', medium: 'Acrylic on Canvas', size: '48×36' },
  { file: 'ben-alley.jpg', title: 'Ben Alley', year: '2025', medium: 'Acrylic on Canvas', size: '30×40' },
  { file: 'palmer-1.jpg', title: 'Palmer', year: '2024', medium: 'Acrylic on Canvas', size: '36×48' },
  { file: 'chicago-green.jpg', title: 'Chicago Green', year: '2024', medium: 'Acrylic on Canvas', size: '30×40' },
  { file: 'baby.jpg', title: 'Baby', year: '2024', medium: 'Acrylic on Canvas', size: '24×30' },
  { file: 'baby-2.jpg', title: 'Baby II', year: '2024', medium: 'Acrylic on Canvas', size: '24×30' },
  { file: 'chicago-pink.jpg', title: 'Chicago Pink', year: '2023', medium: 'Acrylic on Canvas', size: '36×48' },
  { file: 'sara.jpg', title: 'Sara', year: '2023', medium: 'Acrylic on Canvas', size: '30×40' },
  { file: 'rosewood.jpg', title: 'Rosewood', year: '2023', medium: 'Acrylic on Canvas', size: '30×40' },
  { file: 'arwen-1.jpg', title: 'Arwen', year: '2022', medium: 'Acrylic on Canvas', size: '36×48' },
  { file: 'culls-1.jpg', title: 'Culls', year: '2022', medium: 'Acrylic on Canvas', size: '24×36' },
  { file: 'darnell.jpg', title: 'Darnell', year: '2022', medium: 'Acrylic on Canvas', size: '30×40' },
  { file: 'gibsons.jpg', title: 'Gibsons', year: '2021', medium: 'Acrylic on Canvas', size: '36×48' },
  { file: 'homan-final-real-size.jpg', title: 'Homan', year: '2021', medium: 'Acrylic on Canvas', size: '48×60' },
]

const gap = { xs: 16, sm: 24, md: 40 }

export default function Painting() {
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
          Painting
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontFamily: 'Prata, Georgia, serif' }}
        >
          Work
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: { xs: `${gap.xs}px`, sm: `${gap.sm}px`, md: `${gap.md}px` },
        }}
      >
        {paintings.map((p) => (
          <Box
            key={p.file}
            sx={{
              width: {
                xs: '100%',
                sm: `calc((100% - ${gap.sm}px) / 2)`,
                md: `calc((100% - ${gap.md * 2}px) / 3)`,
              },
              textAlign: 'center',
              mb: { xs: 2, md: 4 },
            }}
          >
            <img
              src={`/images/${p.file}`}
              alt={p.title}
              style={{ width: '100%', display: 'block' }}
            />
            <Box sx={{ pt: 2.5, pb: 2 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 15 }}>
                {p.title}
              </Typography>
              <Typography sx={{ fontSize: 13, color: '#888' }}>
                {p.year}
              </Typography>
              <Typography sx={{ fontSize: 13, color: '#888' }}>
                {p.medium}
              </Typography>
              <Typography sx={{ fontSize: 13, color: '#888' }}>
                {p.size}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
