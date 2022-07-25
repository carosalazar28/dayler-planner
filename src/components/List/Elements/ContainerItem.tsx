import { Item as ItemType } from '@/components/interfaces/Board.interfaces'

import Title from './Title'
import Item from './Item'

interface ContainerItemProps {
  title: string
  task: ItemType[]
  handleDelete: () => void
  handleEdit: () => void
}

function ContainerItem({
  title,
  task,
  handleDelete,
  handleEdit,
}: ContainerItemProps) {
  return (
    <div>
      <Title title={title} />
      {task.map((item) => (
        <Item
          text={item.body}
          key={item.id}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  )
}

export default ContainerItem
