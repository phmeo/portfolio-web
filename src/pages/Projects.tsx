import { Box, Container, Heading, SimpleGrid, Text, VStack, Image, HStack, Link, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const MotionBox = motion(Box)

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, animated portfolio built with React and Chakra UI.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    title: 'Game Jam Project',
    description: 'A web game built in 48 hours for a hackathon.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    github: 'https://github.com',
    demo: '',
    featured: false,
  },
  {
    title: 'Open Source Contribution',
    description: 'Contributed to a popular open source project.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    github: 'https://github.com',
    demo: '',
    featured: false,
  },
]

const Projects = () => {
  return (
    <Box
      minH="100vh"
      py={16}
      bg="transparent"
      style={{ backdropFilter: 'blur(8px)' }}
      position="relative"
      overflow="hidden"
    >
      {/* Animated background shape */}
      <MotionBox
        position="absolute"
        top={-32}
        left={-32}
        w="400px"
        h="400px"
        borderRadius="50%"
        bgGradient="radial(primary.600, accent.500, transparent)"
        filter="blur(60px)"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        zIndex={0}
      />
      <Container maxW="1200px" position="relative" zIndex={1}>
        <VStack spacing={12} align="center" textAlign="center">
          <Heading as="h1" size="2xl" bgGradient="linear(to-r, text.heading, accent.600, text.heading)" bgClip="text" mb={4} fontWeight="extrabold" letterSpacing={2} textShadow="0 2px 16px #fffbe688">
            My Projects
          </Heading>
          <Text fontSize="lg" color="text.heading">
            Here are some of my favorite projects and contributions
          </Text>

          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project) => (
            <MotionBox
              key={project.title}
              p={8}
              borderRadius="2xl"
              boxShadow="2xl"
              bg="background.light"
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 #22312744' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              w="full"
              mb={8}
            >
              <HStack spacing={8} align="center" flexDir={{ base: 'column', md: 'row' }}>
                <Image src={project.image} alt={project.title} boxSize="180px" borderRadius="xl" objectFit="cover" boxShadow="md" />
                <Box textAlign={{ base: 'center', md: 'left' }}>
                  <Heading size="lg" color="brand.500" mb={2}>{project.title}</Heading>
                  <Text color="gray.500" mb={2}>{project.description}</Text>
                  <HStack spacing={4} justify={{ base: 'center', md: 'flex-start' }}>
                    <Link href={project.github} isExternal color="brand.500">
                      <Icon as={FaGithub} mr={1} /> GitHub
                    </Link>
                    {project.demo && (
                      <Link href={project.demo} isExternal color="accent.500">
                        <Icon as={FaExternalLinkAlt} mr={1} /> Live Demo
                      </Link>
                    )}
                  </HStack>
                </Box>
              </HStack>
            </MotionBox>
          ))}

          {/* Project Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {projects.filter(p => !p.featured).map((project, idx) => (
              <MotionBox
                key={project.title}
                p={8}
                borderRadius="2xl"
                boxShadow="2xl"
                bg="#232946"
                borderWidth={0}
                color="#e1b866"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 #22312744' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Image src={project.image} alt={project.title} boxSize="120px" borderRadius="xl" objectFit="cover" boxShadow="md" mx="auto" mb={4} />
                <Heading size="md" bgGradient="linear(to-r, text.heading, accent.600, text.heading)" bgClip="text" mb={2} fontWeight="extrabold">{project.title}</Heading>
                <Text color="text.heading" mb={2}>{project.description}</Text>
                <HStack spacing={4} justify="center">
                  <Link href={project.github} isExternal color="#e1b866" >
                    <Icon as={FaGithub} mr={1} /> GitHub
                  </Link>
                  {project.demo && (
                    <Link href={project.demo} isExternal color="accent.500">
                      <Icon as={FaExternalLinkAlt} mr={1} /> Live Demo
                    </Link>
                  )}
                </HStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
      {/* Decorative SVG Section Divider */}

    </Box>
  )
}

export default Projects 