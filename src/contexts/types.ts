export interface IGithub {
  getProfile(username: string): void
  clearSearch(): void
  userProfile: IUserProfile | null
  currentUser: IUserProfile | null
  profileHistory: IUserProfile[]
  toggleCurrentUser(user: IUserProfile): void
  getRepositories(): Promise<void>
  repositories: IRepository[]
}

export interface IUserProfile {
  id: number
  avatar_url: string
  name: string
  login: string
  location: string
  followers: number
  public_repos: number
  repos_url: string
}

export interface IRepository {
  name: string
  language: string
  description: string | null
  created_at: string
  pushed_at: string
  html_url: string
}
