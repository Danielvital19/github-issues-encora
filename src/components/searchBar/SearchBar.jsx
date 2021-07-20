import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SearchBar = ({updateList, word, updateWord}) => {
    function onWordChange(e){
        e.preventDefault();
        updateWord(e.target.value);
    }

    useEffect(() => {
        if(word){
            const ac = new AbortController();
            Promise.all([
            axios.get(`https://api.github.com/search/issues?q=${word}`)
            ]).then((response) => {
                const list = response[0].data.items;
                let issuesList = []
                list.forEach(element => {
                    issuesList.push(JSON.stringify(element));
                });
                updateList([...issuesList]);
            })
            .catch(ex => console.error(ex));
            return () => ac.abort(); // Abort both fetches on unmount
        }
    }, [word]);


    
    return(
        <div className="centered mt-1">
            <input 
                className="col-4 h-1 b-gray"
                name="word"
                type="text"
                placeholder="Serch"
                onChange = {e => onWordChange(e)}
            />
            
        </div>
    );
}

export default SearchBar;