import { Box, Container, Heading, SimpleGrid, Text, VStack, Icon, useColorMode, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaMusic, FaBook, FaGamepad, FaCamera, FaPalette, FaSmile } from 'react-icons/fa'

const MotionBox = motion(Box)

const hobbies = [
  {
    title: 'Coding',
    description: 'Exploring new technologies and building cool projects',
    icon: FaCode,
    color: 'brand.500',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Music',
    description: 'Playing guitar and discovering new genres',
    icon: FaMusic,
    color: 'accent.500',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Reading',
    description: 'Science fiction and tech books enthusiast',
    icon: FaBook,
    color: 'green.500',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Gaming',
    description: 'Strategy games and puzzle solving',
    icon: FaGamepad,
    color: 'purple.500',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Photography',
    description: 'Capturing moments and learning composition',
    icon: FaCamera,
    color: 'orange.500',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Art',
    description: 'Digital art and creative expression',
    icon: FaPalette,
    color: 'teal.500',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
]

const funFacts = [
  'Coding helps me turn ideas into reality!',
  'Music is my way to relax and recharge.',
  'Books open up new worlds and inspire creativity.',
  'Games teach me strategy and quick thinking.',
  'Photography lets me capture the beauty around me.',
  'Art is my outlet for self-expression.',
]

const Hobbies = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { colorMode } = useColorMode()

  return (
    <Box
      minH="100vh"
      py={16}
      position="relative"
      overflow="hidden"
    >
      {/* Animated floating icon */}
      <MotionBox
        position="absolute"
        top={-24}
        right={-24}
        w="120px"
        h="120px"
        borderRadius="50%"
        bgGradient="radial(accent.100, brand.100, transparent)"
        filter="blur(30px)"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        zIndex={0}
      />
      <Container maxW="1200px" position="relative" zIndex={1} bg="transparent" style={{backdropFilter: 'blur(8px)'}} borderRadius="2xl">
        <VStack spacing={12} align="center" textAlign="center">
          <Heading as="h1" size="2xl" bgGradient="linear(to-r, text.heading, accent.600, text.heading)" bgClip="text" mb={4} fontWeight="extrabold" letterSpacing={2} textShadow="0 2px 16px #fffbe688">
            My Hobbies
          </Heading>
          <Text fontSize="lg" color="text.heading">
            Things I love to do in my free time
          </Text>

          {/* Animated Hobby Cards / Gallery */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} ref={ref} w="full">
            {hobbies.map((hobby, index) => (
              <MotionBox
                key={hobby.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                p={0}
                borderRadius="xl"
                boxShadow="lg"
                bg="background.light"
                overflow="hidden"
              >
                <Image src={hobby.image} alt={hobby.title} w="100%" h="180px" objectFit="cover" />
                <VStack spacing={4} align="center" p={6}>
                  <Box
                    p={4}
                    borderRadius="full"
                    bg={`${hobby.color}20`}
                    color={hobby.color}
                  >
                    <Icon as={hobby.icon} w={8} h={8} />
                  </Box>
                  <Heading as="h3" size="md" bgGradient="linear(to-r, text.heading, accent.600, text.heading)" bgClip="text" fontWeight="extrabold">{hobby.title}</Heading>
                  <Text color="text.heading" textAlign="center">
                    {hobby.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* Why I Love These Section */}
          <VStack spacing={6} w="full">
            <Heading size="lg" color="accent.500">Why I Love These</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {funFacts.map((fact, idx) => (
                <MotionBox
                  key={fact}
                  p={6}
                  borderRadius="xl"
                  boxShadow="md"
                  bg={colorMode === 'light' ? 'accent.50' : 'gray.700'}
                  whileHover={{ scale: 1.08 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  display="flex"
                  alignItems="center"
                  gap={3}
                >
                  <Icon as={FaSmile} color="accent.500" w={6} h={6} />
                  <Text fontWeight="bold">{fact}</Text>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Hobbies 