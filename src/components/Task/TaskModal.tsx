import { Button } from '@mui/material'

import useNewTask from '@/utils/hooks/useNewTask'
import ModalTask from './Modal'

function TaskModal() {
  const { handleOpenModal, handleCloseModal, open } = useNewTask()

  return (
    <section>
      <Button
        variant="contained"
        sx={(theme) => ({
          position: 'absolute',
          bottom: theme.spacing(2),
          right: theme.spacing(3),
        })}
        onClick={handleOpenModal}
      >
        Crear una tarea
      </Button>
      <ModalTask handleCloseModal={handleCloseModal} open={open} />
    </section>
  )
}

export default TaskModal
