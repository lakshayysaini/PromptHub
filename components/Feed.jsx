'use client';

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";


const PromptCardList = ( { data, handleTagClick } ) => {
    return (
        <div className="mt-16 prompt_layout">
            {
                data?.map( ( post ) => (
                    <PromptCard
                        key={ post._id }
                        post={ post }
                        handleTagClick={ handleTagClick }
                    />
                ) )
            }
        </div>
    )

};

const Feed = () => {

    const [searchText, setSearchText] = useState( '' );
    const [allPosts, setAllPosts] = useState( [] );

    const handelSearchChange = ( e ) => {
    }

    const fetchPosts = async () => {
        const response = await fetch("/api/prompt", { cache: 'no-store' });
        const data = await response.json();
        setAllPosts(data);
    };
    
    useEffect(() => {
        fetchPosts();
    }, []);

    console.log( 'allPosts', allPosts )

    return (
        <section className="feed">
            <form className="relative w-full flex-center flex-col">
                <input

                    type="text"
                    placeholder="Search for a tag or username"
                    value={ searchText }
                    onChange={ handelSearchChange }
                    required
                    className="search_input peer"
                />

                <PromptCardList
                    data={ allPosts }
                    handleTagClick={ () => { } }
                />

            </form>
        </section>
    )
}

export default Feed