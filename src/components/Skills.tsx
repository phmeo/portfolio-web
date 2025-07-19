import { Box, Container, Heading, SimpleGrid, Text, Progress, VStack, HStack, Icon, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaFigma, FaDatabase, FaBook } from 'react-icons/fa'

const MotionBox = motion(Box)

const skills = [
  { name: 'Web Development', level: 85, color: 'brand.500' },
  { name: 'Programming', level: 80, color: 'accent.500' },
  { name: 'Problem Solving', level: 90, color: 'green.500' },
  { name: 'Creativity', level: 95, color: 'purple.500' },
  { name: 'Team Work', level: 88, color: 'orange.500' },
  { name: 'Communication', level: 92, color: 'teal.500' },
]

const tools = [
  { icon: FaReact, name: 'React' },
  { icon: FaNodeJs, name: 'Node.js' },
  { icon: FaPython, name: 'Python' },
  { icon: FaGitAlt, name: 'Git' },
  { icon: FaFigma, name: 'Figma' },
  { icon: FaDatabase, name: 'SQL' },
]

const learning = [
  'TypeScript',
  'Next.js',
  'GraphQL',
  'Docker',
]

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { colorMode } = useColorMode()

  return (
    <Box
      minH="100vh"
      py={16}
      position="relative"
      overflow="hidden"
      bg="transparent"
    >
      {/* Animated background shape */}
      <MotionBox
        position="absolute"
        bottom={-32}
        left={-32}
        w="400px"
        h="400px"
        borderRadius="50%"
        bgGradient="radial(primary.600, accent.500, transparent)"
        filter="blur(60px)"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        zIndex={0}
      />
      <Container maxW="1200px" position="relative" zIndex={1}>
        <VStack spacing={12} align="center" textAlign="center">
          <Heading as="h1" size="2xl" bgGradient="linear(to-r, text.heading, accent.600, text.heading)" bgClip="text" mb={4} fontWeight="extrabold" letterSpacing={2} textShadow="0 2px 16px #fffbe688">
            My Skills
          </Heading>
          <Text fontSize="lg" color="text.heading">
            Here are some of my key skills and areas of expertise
          </Text>

          {/* Animated Skill Bars */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} ref={ref} w="full">
            {skills.map((skill, index) => (
              <MotionBox
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <VStack align="stretch" spacing={2}>
                  <Text fontWeight="bold" color="text.heading">{skill.name}</Text>
                  <Progress
                    value={inView ? skill.level : 0}
                    colorScheme="primary"
                    size="lg"
                    borderRadius="full"
                    bg="background.light"
                    sx={{
                      '& > div[role="progressbar"]': {
                        background: 'linear-gradient(90deg, #e1b866 0%, #a14d2a 100%)',
                      },
                    }}
                  />
                  <Text fontSize="sm" color="text.heading" textAlign="right">
                    {skill.level}%
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* Tools I Use */}
          <VStack spacing={6} w="full">
            <Heading size="lg" color="brand.500">Tools I Use</Heading>
            <HStack justify="center" flexWrap="wrap" gap={8}>
              {tools.map((tool, idx) => (
                <MotionBox
                  key={tool.name}
                  p={4}
                  borderRadius="xl"
                  boxShadow="md"
                  bg={colorMode === 'light' ? 'white' : 'gray.700'}
                  whileHover={{ scale: 1.15, rotate: [0, 10, -10, 0] }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Icon as={tool.icon} w={10} h={10} color="brand.500" mb={2} />
                  <Text fontWeight="bold">{tool.name}</Text>
                </MotionBox>
              ))}
            </HStack>
          </VStack>

          {/* Learning Now */}
          <VStack spacing={4} w="full">
            <Heading size="lg" color="accent.500">Learning Now</Heading>
            <HStack justify="center" flexWrap="wrap" gap={4}>
              {learning.map((item, idx) => (
                <MotionBox
                  key={item}
                  px={6}
                  py={3}
                  borderRadius="xl"
                  boxShadow="md"
                  bg={colorMode === 'light' ? 'accent.50' : 'gray.700'}
                  whileHover={{ scale: 1.08 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <HStack>
                    <Icon as={FaBook} color="accent.500" />
                    <Text fontWeight="bold">{item}</Text>
                  </HStack>
                </MotionBox>
              ))}
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Skills 