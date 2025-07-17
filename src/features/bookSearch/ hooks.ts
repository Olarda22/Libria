import { useState } from 'react'
import type { Book } from '../../types/book'
import { searchBooks } from '../../api/openLibraryApi'

export const useBookSearch = () => {
  const [results, setResults] = useState<Book[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async (query: string) => {
    setLoading(true)
    const books = await searchBooks(query)

    setResults(books)
    setLoading(false)
  }

  return { results, loading, handleSearch }
}