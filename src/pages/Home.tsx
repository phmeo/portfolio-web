import { Box, Container, Heading, Text, VStack, HStack, Image, SimpleGrid, Avatar, Tag, TagLabel, Wrap, WrapItem, Icon, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaUser, FaBirthdayCake, FaMapMarkerAlt, FaEnvelope, FaPhone, FaSchool, FaGraduationCap, FaClock } from 'react-icons/fa'

const MotionBox = motion(Box)

const RUNE_GLYPHS = ['ᚠ', 'ᚱ', 'ᛉ', 'ᛞ', 'ᛟ', 'ᛝ', 'ᛃ', 'ᚨ', 'ᚾ', 'ᛋ', 'ᛏ', 'ᛗ'];

const featureData = [
  {
    title: 'Aspiring Developer',
    desc: 'Building cool things with code and always learning new tech.',
    color: 'brand.400',
  },
  {
    title: 'Creative Thinker',
    desc: 'Loves design, art, and creative problem solving.',
    color: 'accent.400',
  },
  {
    title: 'Team Player',
    desc: 'Enjoys collaborating and sharing ideas with others.',
    color: 'green.400',
  },
]

const keywords = [
  { label: 'Curious', color: 'brand' },
  { label: 'Creative', color: 'accent' },
  { label: 'Collaborative', color: 'green' },
  { label: 'Problem Solver', color: 'purple' },
  { label: 'Tech Lover', color: 'orange' },
]

const basicInfo = [
  { icon: FaUser, label: 'Name', value: 'Quan Minh Tran' },
  { icon: FaBirthdayCake, label: 'Age', value: '17' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Hanoi, Vietnam' },
  { icon: FaEnvelope, label: 'Email', value: 'Click', isLink: true, link: 'mailto:mphuong295ct@email.com' },
  { icon: FaPhone, label: 'Phone', value: '+84 96 353 5158', isLink: true, link: 'tel:+84123456789' },
  { icon: FaSchool, label: 'School', value: 'Sentia School' },
  { icon: FaGraduationCap, label: 'Education', value: 'Senior High' },
  { icon: FaClock, label: 'YOE', value: '0 years' },
]

const Home = () => {
  return (
    <Box
      minH="100vh"
      py={16}
      position="relative"
      overflow="hidden"
      bg="transparent"
    >
      {/* Animated floating blob */}
      <MotionBox
        position="absolute"
        top={-24}
        left={-24}
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
        <VStack spacing={16} align="center" textAlign="center">
          {/* Avatar, Tag, Slogan */}
          <VStack spacing={4}>
            <MotionBox position="relative" display="inline-block">
              {/* Glowing animated ring */}
              <Box
                position="absolute"
                top={-8}
                left={-8}
                w="88px"
                h="88px"
                borderRadius="full"
                zIndex={0}
                pointerEvents="none"
                as={motion.div}
                animate={{
                  boxShadow: [
                    '0 0 0 0px #fffbe6',
                    '0 0 0 12px #e1b86644',
                    '0 0 0 0px #fffbe6',
                  ],
                }}
                transition="all 2.5s ease-in-out"
              />
              {/* Rune shiny effect */}
              {Array.from({ length: 6 }).map((_, i) => {
                const angle = (i / 6) * 2 * Math.PI;
                return (
                  <MotionBox
                    key={i}
                    position="absolute"
                    left={`calc(50% + ${38 * Math.cos(angle)}px - 14px)`}
                    top={`calc(50% + ${38 * Math.sin(angle)}px - 14px)`}
                    fontSize="1.7rem"
                    color="#ffe066"
                    opacity={0.85}
                    pointerEvents="none"
                    zIndex={1}
                    fontFamily="serif"
                    textShadow="0 0 16px #e1b866, 0 0 32px #fffbe6, 0 0 12px #ffe066"
                    animate={{
                      scale: [1, 1.18, 1],
                      rotate: [0, 360],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 3.2 + i * 0.2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    {RUNE_GLYPHS[i % RUNE_GLYPHS.length]}
                  </MotionBox>
                );
              })}
              <Avatar
                size="2xl"
                name="Quan"
                src="/avatar.png"
                borderWidth={4}
                borderColor="text.heading"
                boxShadow="none"
                mb={2}
                zIndex={2}
                position="relative"
              />
            </MotionBox>
            {/* Glassy textbox for High School Student */}
            <Box
              mt={-2}
              px={6}
              py={2}
              borderRadius="xl"
              bg="rgba(35,41,70,0.55)"
              style={{ backdropFilter: 'blur(10px)' }}
              borderWidth={2}
              borderColor="rgba(225,184,102,0.25)"
              fontWeight="bold"
              fontSize="md"
              color="#ffe066"
              boxShadow="0 2px 16px #e1b86633"
              display="inline-block"
              zIndex={2}
            >
              High School Student
            </Box>
            <Text fontSize="2xl" color="text.heading" fontStyle="italic" fontWeight="light" letterSpacing={1}>
              "Dream. Code. Create."
            </Text>
          </VStack>

          {/* Info Box */}
          <MotionBox
            w={{ base: '100%', md: '700px' }}
            mx="auto"
            p={8}
            borderRadius="2xl"
            boxShadow="2xl"
            bg="rgba(35,41,70,0.45)"
            style={{ backdropFilter: 'blur(12px)' }}
            borderWidth={2}
            borderColor="rgba(225,184,102,0.25)"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
              {basicInfo.map((info) => (
                <HStack key={info.label} align="center" spacing={3} py={1}>
                  <Icon as={info.icon} color="brand.500" w={5} h={5} />
                  <Text fontWeight="bold" minW="110px">{info.label}:</Text>
                  {info.isLink ? (
                    <Link href={info.link} color="accent.500" isExternal fontWeight="bold">{info.value}</Link>
                  ) : (
                    <Text>{info.value}</Text>
                  )}
                </HStack>
              ))}
            </SimpleGrid>
          </MotionBox>

          {/* Slogan/Headline */}
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, text.heading, accent.600, text.heading)"
              bgClip="text"
              mb={2}
              fontWeight="extrabold"
              letterSpacing={2}
              textShadow="0 2px 16px #fffbe688"
            >
              Hi, I'm Quan 👋
            </Heading>
            <Text fontSize="xl" color="text.heading" maxW="600px" mx="auto">
              A passionate high school student exploring the world of technology and creativity.
            </Text>
          </MotionBox>

          {/* Short Bio/Keywords */}
          <VStack spacing={2}>
            <Text fontWeight="bold" color="brand.500" fontSize="lg">
              A few words that describe me:
            </Text>
            <Wrap justify="center">
              {keywords.map((kw) => (
                <WrapItem key={kw.label}>
                  <Tag size="lg" colorScheme={kw.color} variant="subtle" px={4} py={2} fontWeight="bold" fontSize="md">
                    <TagLabel>{kw.label}</TagLabel>
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </VStack>

          {/* Feature Boxes */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
            {featureData.map((feature, idx) => (
              <MotionBox
                key={feature.title}
                p={8}
                borderRadius="2xl"
                boxShadow="lg"
                bg="rgba(35,41,70,0.45)"
                style={{ backdropFilter: 'blur(12px)' }}
                borderWidth={2}
                borderColor="rgba(225,184,102,0.25)"
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 #22312744' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <Image
                  src={
                    feature.title === 'Aspiring Developer'
                      ? 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80'
                      : feature.title === 'Creative Thinker'
                      ? 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
                      : 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
                  }
                  alt={feature.title}
                  borderRadius="xl"
                  mb={4}
                  w="100%"
                  h="120px"
                  objectFit="cover"
                />
                <Heading size="md" color={feature.color} mb={2}>
                  {feature.title}
                </Heading>
                <Text color="text.muted">{feature.desc}</Text>
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* Fun Fact/Testimonial Box */}
          <MotionBox
            p={8}
            borderRadius="2xl"
            boxShadow="2xl"
            bg="rgba(35,41,70,0.45)"
            style={{ backdropFilter: 'blur(12px)' }}
            borderWidth={2}
            borderColor="rgba(225,184,102,0.25)"
            maxW="lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Text fontSize="lg" fontWeight="bold" color="accent.500" mb={2}>
              Fun Fact
            </Text>
            <Text color="text.muted">
              "I once built a game in 48 hours for a hackathon and it actually worked!"
            </Text>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}

export default Home 