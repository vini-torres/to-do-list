import styled from 'styled-components'

export const HomeContainer = styled.section`
  width: 100%;
  max-width: 50rem;
  margin: 4.0625rem auto;
  padding: 0 10px;
`

export const HomeHeader = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    h3 {
      font-size: 14px;
      font-style: bold;
    }

    span {
      font-size: 0.75rem;
      font-style: bold;
      padding: 2px 6px;
      color: #d9d9d9;
      background-color: #333;
      border-radius: 20px;
    }
  }
`

export const AllTasks = styled.div`
  h3 {
    color: ${(props) => props.theme['blue-default']};
  }
`

export const TasksCompleted = styled.div`
  h3 {
    color: #8284fa;
  }
`

export const TasksContainer = styled.div`
  max-height: 35rem;
  overflow-y: auto;
  margin-top: 1.25rem;

  &::-webkit-scrollbar {
    display: none;
  }

  .container {
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${(props) => props.theme['gray-300']};

    .icon {
      color: ${(props) => props.theme['gray-400']};
    }

    h3 {
      margin: 0.625rem 0 0.3125rem;
    }
  }
`
