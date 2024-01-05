import React, { createContext, useContext, useState } from "react"
import { IGithub, IUserProfile } from "./types"
import api from "../services/axios"

const github = createContext({} as IGithub)

export const GithubProvider = ({ children }: { children: React.ReactNode }) => {
  const [userProfile, setUserProfile] = useState<IUserProfile | null>(null)

  const getProfile = async (username: string) => {
    try {
      const usernameWithoutSpaces = username.trim()

      if (Boolean(usernameWithoutSpaces)) {
        const { data } = await api.get<IUserProfile>(
          `/users/${usernameWithoutSpaces}`
        )

        setUserProfile(data)

        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const clearSearch = () => {
    setUserProfile(null)
  }

  return (
    <github.Provider value={{ getProfile, userProfile, clearSearch }}>
      {children}
    </github.Provider>
  )
}

export const useGithubContext = (): IGithub => useContext(github)
