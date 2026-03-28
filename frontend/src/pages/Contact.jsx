import React from 'react'
import { Typography, Box, Button } from '@mui/material'

const EMAIL = 'akbueno330@gmail.com'
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent('Website Inquiry')}`

const displayLocations = [
  {
    name: 'Ada Pharmacy',
    address: '7505 River Street',
    city: 'Ada, MI 49301',
  },
  {
    name: 'Pennyroyal Provisions',
    address: '3319 Blue Star Hwy',
    city: 'Saugatuck, MI 49453',
  },
  {
    name: 'Grand Valley State University – Permanent Collection',
    address: '[Zumberge Admin Building, Seidman Center, Bike Factory]',
    city: '',
  },
]

export default function Contact() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontFamily: 'Prata, Georgia, serif', mb: { xs: 5, md: 8 }, mt: { xs: 2, md: 4 } }}
      >
        Contact the Artist
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: { xs: 4, md: 6 },
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          mb: { xs: 6, md: 10 },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: 'uppercase',
              fontSize: 13,
              mb: 1,
            }}
          >
            Work Inquiries:
          </Typography>
          <Typography sx={{ fontSize: 14, color: '#555', mb: 3, lineHeight: 1.8 }}>
            For inquiries about available work, commissions, or anything else,
            feel free to reach out directly via email. I look forward to
            hearing from you!
          </Typography>

          <Button
            href={MAILTO}
            variant="contained"
            size="large"
          >
            Contact Me
          </Button>
        </Box>

        <Box sx={{ width: { xs: '100%', md: '45%' }, flexShrink: 0 }}>
          <img
            src="/images/AK-Bueno-headshot.jpg"
            alt="AK Bueno"
            style={{ width: '100%', display: 'block' }}
          />
        </Box>
      </Box>

      <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
        <Typography
          sx={{
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: 'uppercase',
            fontSize: 14,
            mb: 1,
          }}
        >
          Current Display Locations
        </Typography>
        <Typography sx={{ fontSize: 14, color: '#666',           mb: { xs: 4, md: 6 } }}>
          Places to see AK Bueno's work in person:
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 4,
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            textAlign: 'left',
          }}
        >
          {displayLocations.map((loc) => (
            <Box key={loc.name} sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 0.5 }}>
                {loc.name}
              </Typography>
              <Typography sx={{ fontSize: 14, color: '#555' }}>
                {loc.address}
              </Typography>
              {loc.city && (
                <Typography sx={{ fontSize: 14, color: '#555' }}>
                  {loc.city}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
