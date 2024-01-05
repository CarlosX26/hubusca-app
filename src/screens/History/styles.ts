import styled from "styled-components/native"

export const HistoryWrapper = styled.View`
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  flex: 1;
  justify-content: start;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const ListSearchedUsers = styled.FlatList``

export const CardSearchedUser = styled.TouchableOpacity`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid #dee2e6;
  flex-direction: row;
  gap: 32px;
  align-items: center;
`
export const CardSearchedAvatar = styled.Image`
  width: 96px;
  height: 96px;
  border-radius: 256px;
`
export const BoxInfo = styled.View`
  gap: 8px;
`
