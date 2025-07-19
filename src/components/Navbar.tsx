import { Box, IconButton, useDisclosure, VStack, Collapse, Avatar, Tooltip, useBreakpointValue, useOutsideClick, Button } from '@chakra-ui/react'
import { NavLink, useLocation } from 'react-router-dom'
import { HamburgerIcon, CloseIcon, ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaGamepad, FaEnvelope, FaThumbtack } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', path: '/', icon: FaHome },
  { name: 'About', path: '/about', icon: FaUser },
  { name: 'Skills', path: '/skills', icon: FaTools },
  { name: 'Projects', path: '/projects', icon: FaProjectDiagram },
  { name: 'Hobbies', path: '/hobbies', icon: FaGamepad },
  { name: 'Contact', path: '/contact', icon: FaEnvelope },
]

const MotionNavLink = motion(NavLink)
const MotionAvatar = motion(Avatar)
const MotionBox = motion(Box)

const RUNE_GLYPHS = ['ᚠ', 'ᚱ', 'ᛉ', 'ᛞ', 'ᛟ', 'ᛝ', 'ᛃ', 'ᚨ', 'ᚾ', 'ᛋ', 'ᛏ', 'ᛗ'];

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [pinned, setPinned] = useState(false)
  const location = useLocation()
  const isMobile = useBreakpointValue({ base: true, md: false })
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Click-outside-to-collapse (when not pinned)
  useOutsideClick({
    ref: navRef as React.RefObject<HTMLElement>,
    handler: () => {
      if (expanded && !pinned) setExpanded(false)
    },
  })

  // Navbar background
  const navbarBg = 'rgba(16,20,26,0.82)'

  // Mini rune halo (always visible)
  const miniRunes = Array.from({ length: 3 }).map((_, i) => {
    const angle = (i / 3) * 2 * Math.PI
    return (
      <MotionBox
        key={i}
        position="absolute"
        left={`calc(50% + ${18 * Math.cos(angle)}px - 7px)`}
        top={`calc(50% + ${18 * Math.sin(angle)}px - 7px)`}
        fontSize="0.9rem"
        color="#ffe066"
        opacity={0.7}
        pointerEvents="none"
        zIndex={1}
        fontFamily="serif"
        textShadow="0 0 6px #e1b866, 0 0 12px #fffbe6, 0 0 4px #ffe066"
        animate={{
          scale: [1, 1.18, 1],
          rotate: [0, 360],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.2 + i * 0.2,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {RUNE_GLYPHS[i % RUNE_GLYPHS.length]}
      </MotionBox>
    )
  })

  // Full rune halo (expanded)
  const runes = expanded ? Array.from({ length: 5 }).map((_, i) => {
    const angle = (i / 5) * 2 * Math.PI
    return (
      <MotionBox
        key={i}
        position="absolute"
        left={`calc(50% + ${38 * Math.cos(angle)}px - 12px)`}
        top={`calc(50% + ${38 * Math.sin(angle)}px - 12px)`}
        fontSize="1.3rem"
        color="#ffe066"
        opacity={0.7}
        pointerEvents="none"
        zIndex={1}
        fontFamily="serif"
        textShadow="0 0 12px #e1b866, 0 0 24px #fffbe6, 0 0 8px #ffe066"
        animate={{
          scale: [1, 1.18, 1],
          rotate: [0, 360],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3.2 + i * 0.2,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {RUNE_GLYPHS[i % RUNE_GLYPHS.length]}
      </MotionBox>
    )
  }) : null

  // Helper: fixed height for avatar/expand and pin button
  const AVATAR_SECTION_HEIGHT = expanded ? 140 : 90;
  const PIN_SECTION_HEIGHT = 60;

  // Mobile: keep hamburger/slide-in
  if (isMobile) {
    return (
      <Box position="fixed" top={6} left={6} zIndex={200}>
        <IconButton
          aria-label="Open Menu"
          icon={isOpen ? <CloseIcon boxSize={6} /> : <HamburgerIcon boxSize={7} />}
          onClick={onToggle}
          borderRadius="full"
          size="lg"
          bg="rgba(16,20,26,0.85)"
          color="#ffe066"
          boxShadow="0 4px 24px #e1b86644"
          _hover={{ bg: 'rgba(35,41,70,0.95)' }}
        />
        <Collapse in={isOpen} animateOpacity>
          <VStack
            align="stretch"
            spacing={2}
            mt={4}
            px={4}
            py={6}
            borderRadius="2xl"
            bg={navbarBg}
            boxShadow="2xl"
            position="absolute"
            top={12}
            left={0}
            zIndex={201}
          >
            {navLinks.map((link) => (
              <Button
                as={NavLink}
                to={link.path}
                key={link.name}
                leftIcon={<Box as={link.icon} fontSize="1.2em" />}
                variant="ghost"
                colorScheme="brand"
                onClick={onToggle}
                _activeLink={{ bg: 'accent.500', color: 'white' }}
                _hover={{ bg: 'brand.600' }}
                fontWeight={700}
                fontSize="lg"
              >
                {link.name}
              </Button>
            ))}
          </VStack>
        </Collapse>
      </Box>
    )
  }

  // Desktop: mini, logical, magical vertical navbar
  return (
    <Box
      as="nav"
      className="navbar-no-outline"
      ref={navRef}
      position="fixed"
      top="50%"
      left={6}
      zIndex={150}
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      h="700px"
      maxH="90vh"
      w={expanded ? '220px' : '60px'}
      bg={navbarBg}
      borderRadius="2xl"
      // Remove border, use strong magical box-shadow and gradient overlay
      boxShadow="0 0 32px 8px #e1b86655, 0 2px 32px 0 #10141a88, 0 0 0 2px #ffe06633 inset"
      style={{
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: 'none',
        transition: 'box-shadow 0.3s, width 0.3s',
        transform: 'translateY(-50%)',
        background: 'linear-gradient(135deg, rgba(225,184,102,0.08) 0%, rgba(35,41,70,0.92) 100%)',
      }}
      aria-expanded={expanded}
      aria-label="Main navigation"
      tabIndex={0}
    >
      {/* Top: Avatar and expand/collapse */}
      <Box flexShrink={0} minH={`${AVATAR_SECTION_HEIGHT}px`} display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
        <Box position="relative" pt={6} pb={2} display="flex" flexDir="column" alignItems="center" justifyContent="center">
          <Box position="relative" w={expanded ? '80px' : '40px'} h={expanded ? '80px' : '40px'} transition="all 0.3s" display="flex" alignItems="center" justifyContent="center">
            <MotionAvatar
              size={expanded ? 'lg' : 'sm'}
              name="Quan"
              src="/avatar.png"
              boxShadow="md"
              style={{ zIndex: 2, position: 'relative' }}
              animate={{ scale: expanded ? 1 : 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            {/* Mini or full rune halo */}
            <Box position="absolute" left="50%" top="50%" transform="translate(-50%, -50%)" w="full" h="full" pointerEvents="none">
              {expanded ? runes : miniRunes}
            </Box>
          </Box>
          {/* Expand/collapse button */}
          <Tooltip label={expanded ? 'Collapse Navbar' : 'Expand Navbar'} placement="right" hasArrow>
            <IconButton
              aria-label={expanded ? 'Collapse Navbar' : 'Expand Navbar'}
              icon={expanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              size="sm"
              borderRadius="full"
              bg="rgba(35,41,70,0.85)"
              color="#ffe066"
              boxShadow="0 2px 8px #e1b86644"
              _hover={{ bg: 'accent.600' }}
              mt={1}
              mb={1}
              onClick={() => setExpanded(e => !e)}
              tabIndex={0}
            />
          </Tooltip>
        </Box>
      </Box>
      {/* Center: Nav links */}
      <Box flex={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center" minH={0}>
        <VStack spacing={3} align="center">
          {navLinks.map((link) => (
            <Tooltip
              key={link.name}
              label={link.name}
              placement="right"
              hasArrow
              openDelay={200}
            >
              <MotionNavLink
                to={link.path}
                role="group"
                style={({ isActive }) => ({
                  display: 'grid',
                  gridTemplateColumns: expanded ? '2.2em 1fr' : '1fr',
                  alignItems: 'center',
                  justifyContent: expanded ? 'flex-start' : 'center',
                  textAlign: expanded ? 'left' : 'center',
                  gap: expanded ? '1rem' : '0.5rem',
                  padding: expanded ? '0.9rem 1.2rem' : '0.9rem 0.7rem',
                  fontWeight: 700,
                  color: isActive ? '#e1b866' : '#fffbe6',
                  textDecoration: 'none',
                  borderRadius: '1.5rem',
                  background: isActive ? 'rgba(161,77,42,0.13)' : 'transparent',
                  fontSize: '1.18rem',
                  boxShadow: 'none',
                  transition: 'all 0.22s cubic-bezier(.4,2,.6,1)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  zIndex: 2,
                  width: expanded ? '100%' : undefined,
                  minWidth: expanded ? '160px' : undefined,
                  outline: 'none',
                  boxSizing: 'border-box',
                  // Remove square border for all focus/active states
                  ':focus': { outline: 'none', boxShadow: 'none' },
                  ':active': { outline: 'none', boxShadow: 'none' },
                  ':focus-visible': { outline: 'none', boxShadow: 'none' },
                })}
                whileHover={{ color: '#ffe066' }}
                whileTap={{ scale: 0.97 }}
                tabIndex={0}
              >
                <Box position="relative" display="flex" alignItems="center" justifyContent="center" minW="2em" mx="auto">
                  {/* Glow behind icon */}
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w={expanded ? '3.2em' : '2.4em'}
                    h={expanded ? '3.2em' : '2.4em'}
                    borderRadius="full"
                    zIndex={0}
                    pointerEvents="none"
                    opacity={0}
                    transition="opacity 0.22s, transform 0.22s"
                    _groupHover={{ opacity: 1, transform: 'translate(-50%, -50%) scale(1.18)' }}
                    _groupActive={{ opacity: 1, transform: 'translate(-50%, -50%) scale(1.18)' }}
                    _groupFocus={{ opacity: 1, transform: 'translate(-50%, -50%) scale(1.18)' }}
                    bgGradient="radial(#fffbe6 60%, #ffe066 80%, #a14d2a 100%)"
                    filter="blur(12px)"
                  />
                  <Box as={link.icon} fontSize="1.3em" zIndex={1} transition="transform 0.22s" _groupHover={{ transform: 'scale(1.18)' }} _groupActive={{ transform: 'scale(1.18)' }} _groupFocus={{ transform: 'scale(1.18)' }} />
                </Box>
                {expanded && (
                  <Box as="span" flex={1} textAlign="left" whiteSpace="nowrap">{link.name}</Box>
                )}
              </MotionNavLink>
            </Tooltip>
          ))}
        </VStack>
      </Box>
      {/* Bottom: Pin button */}
      <Box flexShrink={0} minH={`${PIN_SECTION_HEIGHT}px`} w="full" display="flex" justifyContent="center" alignItems="flex-end" pb={3} pt={2}>
        <Tooltip label={pinned ? 'Unpin Navbar' : 'Pin Navbar'} placement="right" hasArrow>
          <IconButton
            aria-label={pinned ? 'Unpin Navbar' : 'Pin Navbar'}
            icon={<FaThumbtack />}
            size="sm"
            borderRadius="full"
            bg={pinned ? 'accent.600' : 'rgba(35,41,70,0.85)'}
            color={pinned ? '#fffbe6' : '#ffe066'}
            boxShadow="0 2px 8px #e1b86644"
            _hover={{
              bg: 'accent.500',
              color: '#fffbe6',
              boxShadow: '0 0 16px 4px #e1b866cc',
              filter: 'brightness(1.1) saturate(1.2)',
            }}
            transition="all 0.22s cubic-bezier(.4,2,.6,1)"
            onClick={() => setPinned(p => !p)}
            tabIndex={0}
          />
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Navbar 