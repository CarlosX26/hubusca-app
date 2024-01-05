import styled from "styled-components/native"
import * as Animatable from "react-native-animatable"

export const HomeWrapper = styled.View`
  padding-top: 32px;
  flex: 1;
  justify-content: start;
  align-items: center;
`

export const ButtonSearch = styled.TouchableOpacity`
  background: ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 256px;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
`
export const ButtonSearchInput = styled(ButtonSearch)`
  width: 30%;
  border-radius: 0 56px 56px 0;
  margin: 0;
`

export const InputWrapper = styled(Animatable.View)`
  background: ${({ theme }) => theme.COLORS.PRIMARY};
  width: 90%;
  flex-direction: row;
  border-radius: 56px;
  margin-top: 64px;
`

export const InputSearch = styled.TextInput`
  background: ${({ theme }) => theme.COLORS.PRIMARY};
  color: #fff;
  width: 70%;
  height: 80px;
  border-radius: 56px 0 0 56px;
  padding: 16px;
  padding-left: 32px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.FONT.FAMILY};
`

export const TextInfo = styled.Text`
  font-family: ${({ theme }) => theme.FONT.FAMILY};
  color: #495057;
  margin-top: 32px;
`
