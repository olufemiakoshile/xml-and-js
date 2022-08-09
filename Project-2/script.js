const form = document.getElementById("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const { word } = event.target.elements;
  // const verses = await fetchData(word);
  await getData(word.value);
});
const getData = async (word) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "962d175bfcmsh8b71dc2d6b115e7p1ce2bejsndb310e39bc80",
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  };

  const resp = await fetch(
    `https://wordsapiv1.p.rapidapi.com/words/${word}/`,
    options
  );
  display(await resp.json());
};

const display = (data) => {
  const container = document.getElementById("data");
  if (data.message === "word not found") {
    container.innerHTML = `<p class='error'>Word not found</p>`;
    return;
  }

  var insert = `<p>word: ${data.word}</p>
            <p>Pronounciation: ${
              data.pronunciation && data.pronunciation.all
            }</p>`;

  for (const result in data.results) {
    insert =
      insert +
      `
                    <p> ${parseInt(result) + 1} - ${
        data.results[result].partOfSpeech
      } ||  Definition: ${data.results[result].definition} </p>
                `;
  }
  console.log();

  container.innerHTML = insert;
};
