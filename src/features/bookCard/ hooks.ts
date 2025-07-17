import { useState } from 'react'
import type { Work } from '../../types/book'
import { getWork } from '../../api/openLibraryApi'

export const useBookDetails = () => {
  const [results, setResults] = useState<Work | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getBookDetails = async (id: string) => {
    setLoading(true)
    setError(null)

    try {
      const bookInfo = await getWork(id)
      console.log(bookInfo, 'bookInfo')
      setResults(bookInfo)
    } catch (err) {
      setError('Ошибка при загрузке книги')
    } finally {
      setLoading(false)
    }
  }

  return { results, loading, error, getBookDetails }
}
