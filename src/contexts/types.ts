export interface IGithub {
  getProfile(username: string): void
  clearSearch(): void
  userProfile: IUserProfile | null
  currentUser: IUserProfile | null
  profileHistory: IUserProfile[]
  toggleCurrentUser(user: IUserProfile): void
}

export interface IUserProfile {
  id: number
  avatar_url: string
  name: string
  login: string
  location: string
  followers: number
  public_repos: number
}
