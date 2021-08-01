import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const data = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${term}`)
        .then(response => response.json())
      setResults(data.query.search);
    };

    if (term && !results.length) {
      search();
    }

    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [term]); // option to have empty array, array with term inside, or no argument

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">GO</a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <div className="body">
            <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  )
}
export default Search;