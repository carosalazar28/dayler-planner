import { styled } from '@mui/material/styles'

const ActionContainer = styled('section')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  columnGap: theme.spacing(2),
}))

function ActionsContainer({ children }: { children: React.ReactNode }) {
  return <ActionContainer>{children}</ActionContainer>
}

export default ActionsContainer
