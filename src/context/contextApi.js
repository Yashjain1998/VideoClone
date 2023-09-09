import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


export const Context = createContext();

export const AppContext = (props) => {
    const [page, setpage] = useState(0);
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        fetchSelectedCategoryData(page);
    }, [page]);

    const fetchSelectedCategoryData = async (page) => {
        // setLoading(true);
        const {data:{data:{posts}}}=await axios.get(`https://internship-service.onrender.com/videos?page=${page}`);
        setSearchResults(posts)
    };

    return (
        <Context.Provider
            value={{
                page,
                setpage,
                searchResults,
                
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
