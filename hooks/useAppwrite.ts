import { Alert } from 'react-native'
import { useEffect, useState, useCallback } from 'react'

interface UseAppwriteOptions<T, P extends Record<string, string | number>> {
  asyncFunc: (params: P) => Promise<T>
  defaultParams?: P
  skipAutoFetch?: boolean
}

interface UseAppwriteReturn<T, P> {
  data: T | null
  loading: boolean
  error: string | null
  reFetchData: (newParams?: P) => Promise<void>
}

export const useAppwrite = <T, P extends Record<string, string | number>>({
  asyncFunc,
  defaultParams = {} as P,
  skipAutoFetch = false,
}: UseAppwriteOptions<T, P>): UseAppwriteReturn<T, P> => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(!skipAutoFetch)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(
    async (fetchParams: P) => {
      setLoading(true)
      setError(null)

      try {
        const result = await asyncFunc(fetchParams)
        setData(result)
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : 'An unknown error occurred'
        setError(errorMessage)
        Alert.alert('Error', errorMessage)
      } finally {
        setLoading(false)
      }
    },
    [asyncFunc]
  )

  useEffect(() => {
    if (!skipAutoFetch) {
      fetchData(defaultParams)
    }
  }, [])

  const reFetchData = async (newParams?: P) => await fetchData(newParams!)

  return { data, loading, error, reFetchData }
}
