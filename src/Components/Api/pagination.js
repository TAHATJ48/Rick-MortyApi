import React from "react";

const Pagination = ({ api, info, }) => {
 const Next = async() => {
    api=info.next
    console.log(api)
    const response = await fetch(api);
    const data = await response.json();
    const data2 = data.results
 }
    let chars;

  if (info.next !== null) {
    chars = info
      return (
          <div>
            <button onClick={Next()}>Next Page</button>
          </div>
      );
  }
  else {
    chars = "No Characters Found :/";
  }

  return <>{chars}</>;
};

export default Pagination;