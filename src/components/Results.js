import ResultItem from './ResultItem';

const Results = ({ results }) => {
  const resultItems = results.map((result) => {
    return (
      <ResultItem result={result} key={result.videoId} />
    );
  })

  return (
    <div className="results">
      <div className="results__summery">Results:<span className="results__number">{Object.keys(results).length}</span></div>
      <div className="results__container">
        {resultItems}
      </div>
    </div>


  );
};

export default Results;
