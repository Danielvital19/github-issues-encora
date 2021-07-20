import React from 'react'

const SearchList = ({word,issue}) => {

    console.log(issue);
    

    return (
        <div className="display-ib searchList">
            {`${word}: ${issue.title}`}
        </div>
    )
}

export default SearchList;