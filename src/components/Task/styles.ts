import styled from 'styled-components'

const TASK_COLOR = {
  backgroundDefault: 'gray-600',
  backgroundSecondary: 'gray-900',
} as const

interface TaskColorProps {
  taskcolor: keyof typeof TASK_COLOR
}

export const TaskContainer = styled.div<TaskColorProps>`
  height: 64px;
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  background-color: ${(props) => props.theme[TASK_COLOR[props.taskcolor]]};
  border-left: 0.25rem solid
    ${(props) =>
      props.theme[
        props.taskcolor === 'backgroundSecondary' ? 'green-700' : 'transparent'
      ]};
  border-radius: 4px;

  &:not(:first-child) {
    margin-top: 0.8rem;
  }

  span {
    flex: 1;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-300']};
  }
`

const STATES_COLOR = {
  green: 'green-500',
  gray: 'gray-400',
} as const

interface StateProps {
  statecolor: keyof typeof STATES_COLOR
}

export const ButtonStateCheck = styled.button<StateProps>`
  height: 0;
  background-color: transparent;
  border: 0;

  transition: color 200ms;

  display: flex;
  align-items: center;

  cursor: pointer;

  color: ${(props) =>
    props.theme[STATES_COLOR[props.statecolor] || 'gray-400']};

  &:hover {
    color: ${(props) => props.theme['green-500']};
  }
`

export const ButtonRemoveTask = styled.button`
  height: 0;
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme['gray-400']};
  transition: all 200;

  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['red-500']};
  }
`
