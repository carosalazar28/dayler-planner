import { useState } from 'react'

const useNewTask = () => {
  const [open, setOpen] = useState(false)

  const handleOpenModal = () => setOpen(true)

  const handleCloseModal = () => setOpen(false)

  return { handleOpenModal, handleCloseModal, open }
}

export default useNewTask
