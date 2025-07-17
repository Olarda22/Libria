import { useState } from 'react'
import type { Book, Work } from '../../types/book'
import { getDailyTrendingBooks, searchBooks } from '../../api/openLibraryApi'

export const useDailyTrendBooks = () => {
  const [results, setResults] = useState<Work[]>([])
  const [loading, setLoading] = useState(false)

  const getDailyTrendBooks = async () => {
    setLoading(true)
    const books = await getDailyTrendingBooks()
    setResults(books)
    setLoading(false)
  }

  return { results, loading, getDailyTrendBooks }
}