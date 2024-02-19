import { FormEvent, useState } from 'react'

import logoToDo from '../../assets/Logo.svg'
import { FormContainer, HeaderContainer, HeaderContent } from './styles'

interface TaskProps {
  createNewTask: (description: string) => void
}

export function Header({ createNewTask }: TaskProps) {
  const [inputValue, setInputValue] = useState('')

  const handleCreateNewTask = (e: FormEvent) => {
    e.preventDefault()
    createNewTask(inputValue)
    setInputValue('')
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoToDo} alt="Logo do ToDo List" />
        <FormContainer>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Adicione uma nova tarefa"
          />
          <button
            onClick={handleCreateNewTask}
            type="submit"
            disabled={inputValue === ''}
          >
            Criar
          </button>
        </FormContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
