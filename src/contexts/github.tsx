import React, { createContext, useContext, useEffect, useState } from "react"
import { IGithub, IRepository, IUserProfile } from "./types"
import { Keyboard } from "react-native"
import api from "../services/axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

const github = createContext({} as IGithub)

export const GithubProvider = ({ children }: { children: React.ReactNode }) => {
  const [userProfile, setUserProfile] = useState<IUserProfile | null>(null)
  const [profileHistory, setProfileHistory] = useState<IUserProfile[]>([])
  const [currentUser, setCurrentUser] = useState<IUserProfile | null>(null)
  const [repositories, setRepositories] = useState<IRepository[]>([])
  const [loadingProfile, setLoadingProfile] = useState(false)
  const [userIsNotfound, setUserIsNotFound] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        const profiles = await AsyncStorage.getItem("@profileHistory")
        if (profiles) {
          setProfileHistory(JSON.parse(profiles))
        }
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  const toggleCurrentUser = (user: IUserProfile) => {
    setCurrentUser(user)
  }

  const saveProfiles = async (userProfile: IUserProfile) => {
    try {
      const filterProfile = profileHistory.filter(
        (profile) => profile.login == userProfile.login
      )

      if (filterProfile.length > 0) {
        return null
      }

      setProfileHistory([...profileHistory, userProfile])
      await AsyncStorage.setItem(
        "@profileHistory",
        JSON.stringify(profileHistory)
      )
    } catch (error) {
      console.error(error)
    }
  }

  const getProfile = async (username: string) => {
    setLoadingProfile(true)
    setUserIsNotFound(false)
    setUserProfile(null)
    try {
      const usernameWithoutSpaces = username.trim()

      if (Boolean(usernameWithoutSpaces)) {
        const { data } = await api.get<IUserProfile>(
          `/users/${usernameWithoutSpaces}`
        )

        saveProfiles(data)
        setUserProfile(data)

        Keyboard.dismiss()
      }
    } catch (error) {
      setUserIsNotFound(true)
    } finally {
      setLoadingProfile(false)
    }
  }

  const getRepositories = async () => {
    try {
      const { data } = await api.get<IRepository[]>(currentUser!.repos_url)
      setRepositories(data)
    } catch (error) {
      console.error(error)
    }
  }

  const clearSearch = () => {
    setUserProfile(null)
    setUserIsNotFound(false)
  }

  return (
    <github.Provider
      value={{
        getProfile,
        userProfile,
        clearSearch,
        profileHistory,
        currentUser,
        toggleCurrentUser,
        getRepositories,
        repositories,
        loadingProfile,
        userIsNotfound,
      }}
    >
      {children}
    </github.Provider>
  )
}

export const useGithubContext = (): IGithub => useContext(github)
