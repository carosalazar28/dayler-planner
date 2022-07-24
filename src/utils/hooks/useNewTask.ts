import { useState } from 'react'

const useNewTask = () => {
  const [open, setOpen] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const handleOpenModal = () => setOpen(true)
  const handleCloseModal = () => setOpen(false)

  const handleOpenDeleteModal = () => setOpenDeleteModal(true)
  const handleCloseDeleteModal = () => setOpenDeleteModal(false)

  return {
    handleOpenModal,
    handleCloseModal,
    open,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    openDeleteModal,
  }
}

export default useNewTask
