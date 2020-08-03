import styled, { css } from 'styled-components'

export const Title = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.accu};
    margin-top: 0;
    text-align: center;
  `}
`
