import { styled } from '@mui/material/styles'

const ActionContainer = styled('section')(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(4.375),
  right: theme.spacing(3.25),
}))

function ActionsContainer({ children }: { children: React.ReactNode }) {
  return <ActionContainer>{children}</ActionContainer>
}

export default ActionsContainer
