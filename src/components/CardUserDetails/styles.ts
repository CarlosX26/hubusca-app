import styled from "styled-components/native"
import * as Animatable from "react-native-animatable"

export const CardUserDetailsWrapper = styled(Animatable.View)`
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  background: #fff;
  height: 100%;
  align-items: center;
  position: relative;
`

export const Avatar = styled.Image`
  width: 184px;
  height: 184px;
  border-radius: 256px;
  margin-bottom: 32px;
`

export const BoxTexts = styled.View`
  align-items: center;
  gap: 8px;
`
export const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  top: 32px;
  right: 16px;
`

export const CardRepository = styled.TouchableOpacity`
  border: 2px solid #dee2e6;
  gap: 4px;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 8px;
  width: 100%;
`
