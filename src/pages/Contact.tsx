import { Box, Container, Heading, Text, VStack, Input, Textarea, Button, HStack, Icon, Link } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const socials = [
  { icon: FaGithub, label: 'GitHub', url: 'https://github.com' },
  { icon: FaLinkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
  { icon: FaTwitter, label: 'Twitter', url: 'https://twitter.com' },
  { icon: FaEnvelope, label: 'Email', url: 'mailto:your@email.com' },
]

const Contact = () => {
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
        bottom={-32}
        right={-32}
        w="300px"
        h="300px"
        borderRadius="50%"
        bgGradient="radial(primary.600, accent.500, transparent)"
        filter="blur(60px)"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        zIndex={0}
      />
      <Container maxW="600px" position="relative" zIndex={1}>
        <VStack spacing={12} align="center" textAlign="center">
          <Heading as="h1" size="2xl" bgGradient="linear(to-r, text.heading, accent.600, text.heading)" bgClip="text" mb={4} fontWeight="extrabold" letterSpacing={2} textShadow="0 2px 16px #fffbe688">
            Contact Me
          </Heading>
          <Text fontSize="lg" color="text.heading">
            Feel free to reach out to me for any opportunities or questions!
          </Text>

          {/* Creative Contact Form */}
          <MotionBox
            as="form"
            w="full"
            p={8}
            borderRadius="2xl"
            boxShadow="2xl"
            bg="background.light"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <VStack spacing={4}>
              <Input
                placeholder="Your Name"
                size="lg"
                focusBorderColor="primary.500"
                _focus={{ boxShadow: '0 0 0 2px var(--chakra-colors-primary-500)' }}
                bg="background.dark"
              />
              <Input
                placeholder="Your Email"
                size="lg"
                type="email"
                focusBorderColor="accent.500"
                _focus={{ boxShadow: '0 0 0 2px var(--chakra-colors-accent-500)' }}
                bg="background.dark"
              />
              <Textarea
                placeholder="Your Message"
                size="lg"
                rows={6}
                focusBorderColor="primary.500"
                _focus={{ boxShadow: '0 0 0 2px var(--chakra-colors-primary-500)' }}
                bg="background.dark"
              />
              <Button colorScheme="accent" size="lg" w="100%" type="submit" _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}>
                Send Message
              </Button>
            </VStack>
          </MotionBox>

          {/* Find Me On Socials */}
          <VStack spacing={4} w="full">
            <Heading size="lg" color="accent.500">Find Me On</Heading>
            <HStack justify="center" spacing={6}>
              {socials.map((social) => (
                <MotionBox
                  key={social.label}
                  whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <Link href={social.url} isExternal>
                    <Icon as={social.icon} w={8} h={8} color="brand.500" />
                  </Link>
                </MotionBox>
              ))}
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact 