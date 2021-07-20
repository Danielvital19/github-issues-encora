import React, {useState, useEffect} from 'react';
import './App.css';
import  SearchBar from './components/searchBar/SearchBar'
import  SearchList from './components/searchList/SearchList'
import Fragment from 'react'

function App() {

  const [issuesList, updateList] = useState([]);
  const [word, updateWord] = useState("");


  return (
      <div className="centered">
        <SearchBar 
          updateList = {updateList}
          word = {word}
          updateWord = {updateWord}
        />
        <div className="col-4 display-ib">
        {issuesList.map((issue) => (
          <SearchList 
            word = {word}
            issue = {JSON.parse(issue)}
          />
        ))}
        </div>

      </div>
  );
}

export default App;
