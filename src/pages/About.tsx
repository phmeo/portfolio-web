import { Box, Container, Heading, Text, VStack, SimpleGrid, HStack, Icon, Tag, TagLabel, Wrap, WrapItem } from '@chakra-ui/react'
import { FaLightbulb, FaHeart, FaUsers, FaFlagCheckered, FaRocket, FaSchool } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const timeline = [
  {
    icon: FaSchool,
    label: 'Start',
    title: 'Started High School',
    desc: 'Began my journey at XYZ High School, joined the coding club.',
    color: 'brand.400',
  },
  {
    icon: FaRocket,
    label: '2023',
    title: 'First Hackathon',
    desc: 'Participated in my first hackathon and built a web game in 48 hours.',
    color: 'accent.400',
  },
  
  {
    icon: FaUsers,
    label: 'Now',
    title: 'Open Source Contributor',
    desc: 'Contributed to open source projects and learned teamwork online.',
    color: 'green.400',
  },
  {
    icon: FaFlagCheckered,
    label: 'Future',
    title: 'Graduation & Beyond',
    desc: 'Aiming to study Computer Science and build impactful projects.',
    color: 'purple.400',
  },
]

const values = [
  {
    icon: FaLightbulb,
    title: 'Curiosity',
    desc: 'Always eager to learn and explore new ideas.',
    color: 'brand.400',
  },
  {
    icon: FaHeart,
    title: 'Passion',
    desc: 'Driven by a love for technology and creativity.',
    color: 'accent.400',
  },
  {
    icon: FaUsers,
    title: 'Collaboration',
    desc: 'Believes in the power of teamwork and sharing.',
    color: 'green.400',
  },
]

const quickFacts = [
  { label: 'Based in', value: 'Hanoi, Vietnam', color: 'brand' },
  { label: 'Favorite Language', value: 'JavaScript', color: 'accent' },
  { label: 'Dream Job', value: 'Software Engineer', color: 'green' },
  { label: 'Hobby', value: 'Digital Art', color: 'purple' },
  { label: 'Fun Fact', value: 'Built a game in 48 hours!', color: 'orange' },
]

const About = () => {
  return (
    <Box
      minH="100vh"
      py={16}
      position="relative"
      overflow="hidden"
      bg="transparent"
    >
      {/* Decorative blob */}
      <MotionBox
        position="absolute"
        top={-32}
        right={-32}
        w="400px"
        h="400px"
        borderRadius="50%"
        bgGradient="radial(primary.600, accent.500, transparent)"
        filter="blur(60px)"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        zIndex={0}
      />
      <Container maxW="1200px" position="relative" zIndex={1}>
        <VStack spacing={12} align="center" textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Heading as="h1" size="2xl" bgGradient="linear(to-r, text.heading, accent.600, text.heading)" bgClip="text" mb={6} fontWeight="extrabold" letterSpacing={2} textShadow="0 2px 16px #fffbe688">
              About Me
            </Heading>
            <Text fontSize="lg" color="text.heading" mb={8}>
              I am a passionate high school student with a keen interest in technology and programming.
            </Text>
          </MotionBox>

          {/* Quick Facts Section */}
          <VStack spacing={4} w="full" mt={4}>
            <Heading size="lg" bgGradient="linear(to-r, #e1b866, #a14d2a, #e1b866)" bgClip="text" fontWeight="extrabold" letterSpacing={1} mb={2} textAlign="left">
              Quick Facts
            </Heading>
            <Wrap justify="center">
              {quickFacts.map((fact, idx) => (
                <WrapItem key={fact.label}>
                  <Box
                    bg={
                      idx === 0 ? 'rgba(255,200,80,0.18)' : // bright gold
                      idx === 1 ? 'rgba(255,120,60,0.18)' : // bright orange
                      idx === 2 ? 'rgba(80,220,140,0.18)' : // bright green
                      idx === 3 ? 'rgba(160,100,255,0.18)' : // bright purple
                      'rgba(255,100,160,0.18)' // bright pink
                    }
                    color={
                      idx === 0 ? '#FFC850' : // gold text
                      idx === 1 ? '#FF783C' : // orange text
                      idx === 2 ? '#50DC8C' : // green text
                      idx === 3 ? '#A064FF' : // purple text
                      '#FF64A0' // pink text
                    }
                    borderRadius="lg"
                    boxShadow="md"
                    px={2}
                    py={1}
                    fontSize="md"
                    fontWeight="bold"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    style={{ backdropFilter: 'blur(6px)' }}
                  >
                    <Tag
                      size="md"
                      px={3}
                      py={1}
                      fontWeight="bold"
                      fontSize="md"
                      bg="transparent"
                      borderRadius="lg"
                      boxShadow="none"
                    >
                      <TagLabel color="inherit" fontSize="inherit" fontWeight="inherit">
                        {fact.label}: {fact.value}
                      </TagLabel>
                    </Tag>
                  </Box>
                </WrapItem>
              ))}
            </Wrap>
          </VStack>

          {/* Timeline Section */}
          <VStack spacing={8} align="stretch" w="full">
            <Heading size="lg" color="accent.500" mb={2} textAlign="left">
              My Journey
            </Heading>
            <VStack spacing={0} align="stretch" position="relative" _before={{ content: '""', position: 'absolute', left: '32px', top: 0, bottom: 0, w: '2px', bg: 'brand.100', zIndex: 0 }}>
              {timeline.map((item, idx) => (
                <MotionBox
                  key={item.title}
                  display="flex"
                  alignItems="flex-start"
                  position="relative"
                  zIndex={1}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  mb={8}
                >
                  <Box
                    minW="64px"
                    h="64px"
                    bg={item.color}
                    color="white"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="bold"
                    fontSize="2xl"
                    boxShadow="md"
                    mr={6}
                  >
                    <Icon as={item.icon} w={8} h={8} />
                  </Box>
                  <Box textAlign="left">
                    <HStack mb={1}>
                      <Tag size="md" colorScheme="accent" variant="solid" borderRadius="full">
                        <TagLabel>{item.label}</TagLabel>
                      </Tag>
                      <Heading size="md" color="accent.500">{item.title}</Heading>
                    </HStack>
                    <Text color="text.muted">{item.desc}</Text>
                  </Box>
                </MotionBox>
              ))}
            </VStack>
          </VStack>

          {/* My Values Section */}
          <VStack spacing={8} align="stretch" w="full">
            <Heading size="lg" color="accent.500" mb={2} textAlign="left">
              My Values
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {values.map((val, idx) => (
                <MotionBox
                  key={val.title}
                  p={8}
                  borderRadius="2xl"
                  boxShadow="lg"
                  bg="background.light"
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 #22312744' }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  <HStack justify="center" mb={4}>
                    <Icon as={val.icon} w={10} h={10} color="accent.500" />
                  </HStack>
                  <Heading size="md" color="accent.500" mb={2}>
                    {val.title}
                  </Heading>
                  <Text color="text.muted">{val.desc}</Text>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default About 