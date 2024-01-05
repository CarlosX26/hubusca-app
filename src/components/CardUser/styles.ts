import styled from "styled-components/native"

export const CardWrapper = styled.View`
  margin-top: 32px;
  width: 90%;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  padding: 32px 16px;
  align-items: center;
  gap: 16px;
  background-color: #fff;
`
export const Avatar = styled.Image`
  width: 184px;
  height: 184px;
  border-radius: 256px;
  margin-bottom: 32px;
`
export const LinkMoreInfo = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT.FAMILY};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`
