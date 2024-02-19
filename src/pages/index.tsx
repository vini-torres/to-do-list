import { ClipboardText } from 'phosphor-react'
import { useEffect, useState } from 'react'

import { Header } from '../components/Header'
import { Task } from '../components/Task'
import {
  AllTasks,
  HomeContainer,
  HomeHeader,
  TasksCompleted,
  TasksContainer,
} from './styles'

interface TaskProps {
  id: string
  description: string
  state: boolean
}

const LOCAL_STORAGE_KEY = 'igniteTasks'

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }, [])

  function setTaskAndSave(newTask: TaskProps[]) {
    setTasks(newTask)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTask))
  }

  const createNewTasks = (task: string) => {
    const newTask: TaskProps = {
      id: String(new Date().getMilliseconds()),
      description: task,
      state: false,
    }

    setTaskAndSave([...tasks, newTask])
  }

  const changeTaskStatus = (taskId: string) => {
    const newListWithConfirmedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, state: !task.state }
      } else {
        return task
      }
    })

    setTaskAndSave(newListWithConfirmedTasks)
  }

  const removeTask = (taskId: string) => {
    const newListAfterDeletion = tasks.filter((task) => task.id !== taskId)

    setTaskAndSave(newListAfterDeletion)
  }

  const allTasks = tasks.length
  const allTasksCompleted = tasks.filter((task) => task.state === true).length
  return (
    <main>
      <Header createNewTask={createNewTasks} />
      <HomeContainer>
        <HomeHeader>
          <AllTasks>
            <h3>Tarefas Criadas</h3>
            <span>{allTasks}</span>
          </AllTasks>

          <TasksCompleted>
            <h3>Concluídas</h3>
            <span>
              {tasks.length === 0 ? 0 : `${allTasksCompleted} de ${allTasks}`}
            </span>
          </TasksCompleted>
        </HomeHeader>
        <TasksContainer>
          {tasks.length === 0 ? (
            <div className="container">
              <ClipboardText className="icon" size={45} />
              <h3 className="title">Você ainda não tem tarefas cadastradas</h3>
              <p className="description">
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          ) : (
            <>
              {tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    id={task.id}
                    description={task.description}
                    state={task.state}
                    changeTaskStatus={changeTaskStatus}
                    removeTask={removeTask}
                  />
                )
              })}
            </>
          )}
        </TasksContainer>
      </HomeContainer>
    </main>
  )
}
