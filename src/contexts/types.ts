export interface IGithub {
  getProfile(username: string): void
  clearSearch(): void
  userProfile: IUserProfile | null
  profileHistory: IUserProfile[]
}

export interface IUserProfile {
  avatar_url: string
  name: string
  login: string
}
