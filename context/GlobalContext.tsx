import { useAppwrite } from '@/hooks/useAppwrite'
import { createContext, useContext } from 'react'
import { getCurrentUser } from '@/libs/appwrite'
export const GlobalContext = createContext()

type GlocalContextType = {
    isLoggedIn:boolean
    loading: boolean
   
}

export function useGlobalContext() {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalContext debe estar dentro de un provider')
  }
  return context
}

export function GlobalProvider({ children }) {
const {data:user,loading,reFetchData} = useAppwrite(getCurrentUser)

const isLoggedIn = !!user

  return <GlobalContext.Provider value={{isLoggedIn,loading,user,reFetchData}}>{children}</GlobalContext.Provider>
}


