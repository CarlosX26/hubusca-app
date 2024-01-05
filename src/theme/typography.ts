import styled from "styled-components/native"

export const TextRegular = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  font-family: ${({ theme }) => theme.FONT.FAMILY};
`
