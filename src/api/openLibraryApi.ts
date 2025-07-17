import axios from "axios";
import type { Book, Work } from "../types/book";

const PAGE_SIZE = 20;

export async function searchBooks(query: string): Promise<Book[]> {
  const response = await axios.get("https://openlibrary.org/search.json", {
    params: { q: query, limit: PAGE_SIZE },
  });

  return response.data.docs.map((item: Book) => ({
    key: item.key,
    title: item.title,
    author: item.author_name?.[0] || "Неизвестен",
    coverId: item.cover_i,
  }));
}

export async function getDailyTrendingBooks(): Promise<Work[]> {
  const response = await axios.get("https://openlibrary.org/trending/daily.json", {
    params: { limit: PAGE_SIZE },
  });

  return response.data.works.map((item: Work) => ({
    key: item.key,
    title: item.title,
    author: item.author_name?.[0] || "Неизвестен",
    coverId: item.coverId || item.cover_i

  }));
}

export async function getWork(bookId: string): Promise<Work> {
  const response = await axios.get(`https://openlibrary.org/works/${bookId}.json`, {
    // params: { limit: PAGE_SIZE  },
  });
  return response.data

}