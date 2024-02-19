import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme['gray-900']};
  position: relative;
`

export const HeaderContent = styled.div`
  max-width: 1440px;
  height: 12.5rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.form`
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  padding: 0 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  position: absolute;
  bottom: calc(-3.4rem / 2);

  input {
    flex: 1;
    padding: 1rem;
    border: 1px solid ${(props) => props.theme['gray-900']};
    border-radius: 8px;
    background-color: ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme.white};

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['blue-default']};
    }
  }

  button {
    width: 5.625rem;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    border: none;
    border-radius: 0.5rem;

    background-color: ${(props) => props.theme['blue-dark']};
    color: ${(props) => props.theme.white};

    transition: all 0.4s;

    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background-color: ${(props) => props.theme['blue-default']};
    }

    &:focus {
      box-shadow: none;
    }
  }
`
