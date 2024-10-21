const form=document.querySelector('form')
const baseURL="https://opentdb.com/api.php"
const questionsWrapper=document.querySelector('#questionsWrapper')


form.addEventListener('submit',createURL);


// creating API URL from FormData. 

function createURL(e){
e.preventDefault();
const formdata= new FormData(form); // captures all the form's input data. 
const playerData=Object.fromEntries(formdata); // converts all formdata to an object.
console.log(playerData) // {amount :  , category:  , difficulty: , type:  }
const actualURL=`${baseURL}?${getQueryString(playerData)}`
fetchData(actualURL)
}

// data is an object coming from playerData. 

function getQueryString(data){
    let queryString="";
    for(let x in data){
        queryString+=queryString.length===0 ? `${x}=${data[x]}` : `&${x}=${data[x]}`;

    }
    return queryString;
}

// fetching data from API. 

function fetchData(url){
    questionsWrapper.innerHTML="Loading-Data";

    fetch(url) // fetches the data from the API. this returns a promise that resolves to a Response. 
    .then((response)=>response.json()) // converts the response to json becoz response(data) from the server is typically in JSON format and this step converts it into simple javaScript object. It also returns promise resolves with javascript object. 
     
    .then((result)=>
        {showData(result.results)
            console.log(result.results)
}); // passes the trivia questions which is an array of objects.
}


function showData(fetchedData){

    questionsWrapper.innerHTML="";
    


const newData=fetchedData.map((obj)=>{ // each obj will traverse on fetchedData(ie array of objects). 
    // inside each obj there is an array of incorrect_answers. 
    obj.incorrect_answers.push(obj.correct_answer)
    return obj;
});

const questWrapper=document.createElement('div');
questWrapper.classList.add('questWrapper');


// newData is an new array of objects where each object having modified incorrect_ans array.  
newData.forEach((obj) => {
    const randomOptions=randomize(obj.incorrect_answers)
    const question=document.createElement('p'); // creating question 
    question.classList.add('question');
    question.innerText=obj.question;

    const options=document.createElement('div'); // options div  

    for(let i=0;i<4;i++){
        let option=document.createElement('p');
        option.classList.add('option');
        option.innerText=randomOptions[i];
        options.append(option);
    }
    questWrapper.append(question, options)

});
questionsWrapper.append(questWrapper);

}


// this function is giving random options. 
function randomize(arr){
    const randomVal=[];
    for(let i=0;i<arr.length;i++){
        const value=arr[Math.floor(Math.random()*arr.length)]
        if(randomVal.includes(value)) return randomize(arr);
        else{
            randomVal.push(value)
        }
    }
    return randomVal;
}














