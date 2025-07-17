export interface Book extends Work{
  author_key?: string[];
  key: string;
  title: string;
  author: string;
  cover_i?: number;
  author_name?: string[];
}


export interface Work {
  key: string;  
  title: string;
  author_name?: string[];
  author_key?: string[];
  coverId?: number;
  cover_i?: number;
  edition_count?: number;
  first_publish_year?: number;
  has_fulltext?: boolean;
  ebook_access?: string;
  language?: string[];
  public_scan_b?: boolean;
  ia?: string[];
  editions?: {
    numFound: number;
    start: number;
    docs: { key: string; title: string; }[];
  };
}