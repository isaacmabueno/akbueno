import React from 'react'
import { Typography, Box, Card } from '@mui/material'

const exhibitions = [
  'Parade of Homes | Fall 2024 | Alto, MI',
  'Grand Rapids Airport, Concourse A | 2024 | Grand Rapids, MI',
  'Ada Pharmacy | 2022 | Ada, MI',
  'Pennyroyal Provisions | 2021-2022 | Saugatuck, MI',
  "Anna's House | 2012- Present | Grand Rapids, MI",
  'Women Only | 2019 | Chicago, IL',
  "What Does it Mean – Q'ara Shem Gallery | 2017 | Chicago, IL",
  'Memory – Roots and Culture Gallery | 2015 | Chicago, IL',
  'Wells – Painted Door Gallery Space | 2014 | Chicago, IL',
  'Within and Without – Supernova Blast | 2013 | Chicago, IL',
  'Hunt and Gather | 2013-2014 | Grand Rapids, MI',
  'Art Downtown – Lantern Space | 2013 | Grand Rapids, MI',
  'Fliegen – Barbara and Stuart Padnos Gallery | 2011 | Allendale, MI',
]

export default function About(){
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'left',
          fontFamily: 'Prata, Georgia, serif',
          mb: { xs: 5, md: 8 },
          mt: { xs: 2, md: 4 },
        }}
      >
        About
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: { xs: 4, md: 8 },
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          mb: { xs: 6, md: 10 },
        }}
      >
        <Box sx={{ width: { xs: '100%', md: '40%' }, flexShrink: 0 }}>
          <img
            src="/images/AK-Bueno-headshot.jpg"
            alt="AK Bueno headshot"
            style={{ width: '100%', display: 'block' }}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Card sx={{ p: 6, lineHeight: 1.8, textAlign: 'left' }}>
            <span><strong>AK Bueno</strong> is a visual artist currently based in Grand Rapids, MI.
            Her work depicts heavily abstracted architectural spaces and deconstructed landscapes.
            A lover of all things specific, Bueno uses color, directional line, and mark-making
            to recall memories and feelings tied to spaces. She relies upon structure to work
            through anxieties and fears, points of pride, and relational rhythms. She likes to
            explore rigidity and play, freedom and uniformity, grace and chaos.</span>
            <br />
            <span><br />AK Bueno received her BFA in illustration from Grand Valley State University (2011)
            and her Masters of Arts in Teaching from the School of the Art Institute of Chicago
            (2014). She has displayed her work prominently throughout the midwest for the last decade.</span>
          </Card>
        </Box>
      </Box>

      <Box sx={{ mb: { xs: 4, md: 6 } }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
          Display / Exhibitions
        </Typography>
        {exhibitions.map((item) => (
          <Typography key={item} sx={{ fontSize: 14, lineHeight: 2, color: '#444' }}>
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}
