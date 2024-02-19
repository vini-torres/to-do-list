import { CheckCircle, Trash } from 'phosphor-react'

import { ButtonRemoveTask, ButtonStateCheck, TaskContainer } from './styles'

interface ITask {
  id: string
  description: string
  state: boolean
  changeTaskStatus: (taskId: string) => void
  removeTask: (taskId: string) => void
}

export function Task({
  description,
  changeTaskStatus,
  removeTask,
  id,
  state,
}: ITask) {
  const handlechangeTaskStatus = () => {
    changeTaskStatus(id)
  }

  const handleRemoveTaskFromList = () => {
    removeTask(id)
  }

  return (
    <TaskContainer
      taskcolor={state !== true ? 'backgroundDefault' : 'backgroundSecondary'}
    >
      <span>{description}</span>
      <ButtonStateCheck
        statecolor={state === true ? 'green' : 'gray'}
        className="button-check"
      >
        <CheckCircle
          size={20}
          className="check"
          onClick={handlechangeTaskStatus}
        />
      </ButtonStateCheck>
      <ButtonRemoveTask
        className="button-remove"
        onClick={handleRemoveTaskFromList}
      >
        <Trash size={20} />
      </ButtonRemoveTask>
    </TaskContainer>
  )
}
