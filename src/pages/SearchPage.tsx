import React from "react";
import { useParams } from "react-router-dom";
import type { Book } from "../types/book";
import MainLayout from "../layouts/MainLayout";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const SearchPage = (props: any) => {
    const results = useSelector((state: RootState) => state.search.results);
    console.log(results, 'results')
    return (
        <MainLayout>
            <div>
                <h2>поиск книг</h2>
                {results.map(p => <div  >{p.title}</div>)}
            </div>
        </MainLayout>
    );
};

export default SearchPage;
