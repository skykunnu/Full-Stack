const form = document.querySelector("form");
const baseURL = "https://opentdb.com/api.php";
const questionsWrapper = document.querySelector(".questionsWrapper");

form.addEventListener("submit", createURL);

function createURL(e) {
  e.preventDefault();
  const formdata = new FormData(form);
  const playerData = Object.fromEntries(formdata);
  //   console.log(playerData);
  const actualURL = `${baseURL}?${getQueryString(playerData)}`;
  //   const actualURL = `${baseURL}?amount=${playerData.amount}&category=${playerData.category}&difficulty=${playerData.difficulty}&type=${playerData.type}`;
  //   console.log(actualURL);
  fetchData(actualURL);
}

function getQueryString(data) {
  let queryString = "";
  for (let x in data) {
    queryString +=
      queryString.length === 0 ? `${x}=${data[x]}` : `&${x}=${data[x]}`;
  }
  return queryString;
}

function fetchData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
        // console.log(result.results);
      showData(result.results);
    });
}

function showData(data) {
  const newData = data.map((obj) => {
    obj.incorrect_answers.push(obj.correct_answer);
    return obj;
  });
  //   console.log(newData);

  //   console.log(
  //     newData.map((obj) => {
  //       return randomize(obj.incorrect_answers);
  //     })
  //   );

  const questionWrapper = document.createElement("div");
  questionWrapper.classList.add("questionWrapper");

  newData.forEach((obj) => {
    const randomOptions = randomize(obj.incorrect_answers);

    const question = document.createElement("p");
    question.classList.add("question");
    question.innerText = obj.question;

    const options = document.createElement("div");
    options.classList.add("options");

    for (let i = 0; i < 4; i++) {
      const option = document.createElement("p");
      option.classList.add("option");
      option.innerText = randomOptions[i];
      options.append(option);
    }

    questionWrapper.append(question, options);
  });
  questionsWrapper.append(questionWrapper);
}

function randomize(arr) {
  const randomValues = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[Math.floor(Math.random() * arr.length)];
    if (randomValues.includes(value)) return randomize(arr);
    else {
      randomValues.push(value);
    }
  }
  return randomValues;
}
// evontech
