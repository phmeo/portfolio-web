import { Box, Container, HStack, Text, Icon, Link, useColorMode, VStack } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'

const socials = [
  { icon: FaGithub, label: 'GitHub', url: 'https://github.com' },
  { icon: FaLinkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
  { icon: FaTwitter, label: 'Twitter', url: 'https://twitter.com' },
]

const MotionBox = motion(Box)

const Footer = () => {
  const { colorMode } = useColorMode()
  return (
    <Box as="footer" mt={16} position="relative" bgGradient={colorMode === 'light' ? 'linear(to-r, brand.100, accent.100)' : 'linear(to-r, gray.800, brand.900)'} color={colorMode === 'light' ? 'gray.700' : 'gray.200'}>
      {/* SVG Wave */}
      <Box as="svg" viewBox="0 0 1440 120" w="full" h="60px" position="absolute" top={-1} left={0} zIndex={2}>
        <path
          fill={colorMode === 'light' ? '#fff' : '#23263a'}
          fillOpacity="1"
          d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,112C672,96,768,64,864,69.3C960,75,1056,117,1152,133.3C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </Box>
      <Container maxW="1200px" pt={20} pb={8} position="relative" zIndex={3}>
        <VStack spacing={4}>
          <HStack spacing={2}>
            <Text fontWeight="bold" fontSize="lg">Quan Nguyen</Text>
            <MotionBox
              as="span"
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              display="inline-block"
            >
              
            </MotionBox>
            <Text fontSize="md">Portfolio</Text>
          </HStack>
          <HStack spacing={6}>
            {socials.map((social) => (
              <Link key={social.label} href={social.url} isExternal _hover={{ color: 'brand.500' }}>
                <Icon as={social.icon} w={6} h={6} />
              </Link>
            ))}
          </HStack>
          <Text fontSize="sm" color={colorMode === 'light' ? 'gray.500' : 'gray.400'}>
            &copy; {new Date().getFullYear()} Quan Nguyen. All rights reserved.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Footer 