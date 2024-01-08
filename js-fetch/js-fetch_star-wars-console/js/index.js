console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    console.log("response: ", response);
    const data = await response.json();
    console.log("data: ", data);
    const results = data.results;
    console.log("results: ", results);

    console.log(results[5].name);
    console.log(results[7]);
    console.log(results[7].eye_color);
  } catch {
    console.log("error");
  }
}

fetchData();
