import { extendTheme } from '@chakra-ui/react';
import type { ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const colors = {
  background: {
    dark: '#10141a', // Deep Navy Blue
    light: '#232946',
  },
  primary: {
    500: '#223127', // Dark Forest Green
    600: '#3a5c5c', // Desaturated Teal
  },
  accent: {
    500: '#a14d2a', // Burnt Sienna
    600: '#e1b866', // Golden Ochre
  },
  text: {
    base: '#e1b866', // Golden Ochre for main text
    muted: '#b3b8b8',
    heading: '#fffbe6',
    link: '#e1b866',
    rust: '#a14d2a',
    teal: '#3a5c5c',
  },
  mustard: '#e1b866',
  rust: '#a14d2a',
  teal: '#3a5c5c',
  navy: '#10141a',
  forest: '#223127',
};

const theme = extendTheme({
  config,
  colors,
  styles: {
    global: {
      body: {
        bg: 'background.dark',
        color: 'text.base',
      },
      html: {
        bg: 'background.dark',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'xl',
      },
      variants: {
        solid: {
          bg: 'accent.500',
          color: 'background.dark',
          _hover: { bg: 'accent.600', color: 'background.dark' },
        },
        outline: {
          borderColor: 'accent.500',
          color: 'accent.500',
          _hover: { bg: 'accent.500', color: 'background.dark' },
        },
      },
    },
    Link: {
      baseStyle: {
        color: 'text.link',
        _hover: { color: 'accent.600', textDecoration: 'underline' },
      },
    },
    Heading: {
      baseStyle: {
        color: 'text.heading',
        fontWeight: 'extrabold',
      },
    },
    Input: {
      baseStyle: {
        field: {
          bg: 'background.light',
          color: 'text.base',
        },
      },
    },
  },
});

export default theme; 