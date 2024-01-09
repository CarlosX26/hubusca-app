import styled from "styled-components/native"

interface ITextRegularProps {
  fontSize?: number
}

export const TextRegular = styled.Text<ITextRegularProps>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "24px")};
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  font-family: ${({ theme }) => theme.FONT.FAMILY};
`
