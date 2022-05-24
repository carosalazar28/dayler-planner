import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'

import colors from './colors'

declare module '@mui/material/styles' {
  interface Palette {
    status: {
      INFO: React.CSSProperties['color']
      SUCCESS: React.CSSProperties['color']
      WARNING: React.CSSProperties['color']
      ERROR: React.CSSProperties['color']
    }
    neutral: {
      orange: React.CSSProperties['color']
      green: React.CSSProperties['color']
      blueDark: React.CSSProperties['color']
      pink: React.CSSProperties['color']
    }
  }
  interface PaletteOptions {
    status: {
      INFO: React.CSSProperties['color']
      SUCCESS: React.CSSProperties['color']
      WARNING: React.CSSProperties['color']
      ERROR: React.CSSProperties['color']
    }
    neutral: {
      orange: React.CSSProperties['color']
      green: React.CSSProperties['color']
      blueDark: React.CSSProperties['color']
      pink: React.CSSProperties['color']
    }
  }
}

function ThemeContainer({ children }: React.ReactNode) {
  const {
    primary: PRIMARY,
    secondary: SECONDARY,
    grey: GREY,
    actions: ACTIONS,
    complementary: COMPLEMENTARY,
  } = colors

  const theme = createTheme({
    palette: {
      primary: PRIMARY,
      secondary: SECONDARY,
      grey: GREY,
      status: {
        INFO: ACTIONS.info,
        SUCCESS: ACTIONS.success,
        WARNING: ACTIONS.warning,
        ERROR: ACTIONS.error,
      },
      neutral: COMPLEMENTARY,
    },
  })

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeContainer
