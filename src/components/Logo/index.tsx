import styled from "styled-components/native"

const LogoWrapper = styled.View`
  flex-direction: row;
`

const LogoTextColorBrand = styled.Text`
  font-size: 40px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONT.FAMILY};
`
const LogoText = styled.Text`
  font-size: 40px;
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  font-family: ${({ theme }) => theme.FONT.FAMILY};
`

export const Logo = () => (
  <LogoWrapper>
    <LogoTextColorBrand>HUB</LogoTextColorBrand>
    <LogoText>usca</LogoText>
  </LogoWrapper>
)
