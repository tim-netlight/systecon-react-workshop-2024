import { createContext, useContext } from 'react'
import { User } from '../models/User'

/**
 *
 * This file is for Exercise 2
 *
 */

/**
 * Defines what the context will contain
 *
 * users is an array of {@link User} objects
 */
interface IUserContext {
  isLoading: boolean
  users: User[] | null
}

/**
 * Define and create a new {@link React.Context} object, typed to our custom interface
 * {@link IUserContext} or undefined.
 */
export const UserContext: React.Context<IUserContext | undefined> = createContext<
  IUserContext | undefined
>(undefined)

/**
 * Custom hook to get the current context value
 *
 * @returns {@link UserContext}
 */
export const useUsers = (): IUserContext => {
  // The useContext hook brings in the current Context related to the passed Context object
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}

/**
 *
 * @param children The component the Context should be provided to by wrapping it
 * @returns {@link UserContext.Provider}
 */
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  // Define state and other logic to compute the contextValue prop that goes into the Context Provider

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}
