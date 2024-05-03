import { createContext, useContext, useEffect, useState } from 'react'
import { CostPoint, getCostData } from '../api/apiService'

interface IDataContext {
  data: CostPoint[] | null
}

export const DataContext: React.Context<IDataContext | undefined> = createContext<
  IDataContext | undefined
>(undefined)

export const useData = (): IDataContext => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<CostPoint[] | null>(null)

  // TODO: Improve logic, this looks not nice
  useEffect(() => {
    const fetchCostData = async () => {
      await getCostData().then((res) => {
        setData(res.data ?? undefined)
      })
    }

    fetchCostData().catch((error) => console.error(error))
  }, [])

  const contextValue = { data }

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
}
