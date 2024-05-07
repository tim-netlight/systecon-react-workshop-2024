import { createContext, useContext, useEffect, useState } from 'react'
import { getUsers } from '../api/apiService'
import { User } from '../models/User'

interface IUserContext {
  isLoading: boolean
  users: User[] | null
}

export const UserContext: React.Context<IUserContext | undefined> = createContext<
  IUserContext | undefined
>(undefined)

export const useUsers = (): IUserContext => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setData] = useState<User[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const fetchCostData = async () => {
      await getUsers().then((response) => {
        if (response) {
          setData(response)
        }
        // setData(null) // uncomment for ErrorPage trigger demonstration
        setIsLoading(false)
      })
    }

    // setTimeout(() => { // uncomment for LoadingPage trigger demonstration
    fetchCostData().catch((error) => {
      console.error(error)
      setIsLoading(false)
    })
    // }, 3000) // uncomment for LoadingPage trigger demonstration
  }, [])

  const contextValue = { isLoading, users }

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}
