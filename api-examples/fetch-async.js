// same functionality as fetch.js, but wrapped in async function

async function fetchData(){
    try{
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        console.log(data.message);
    } catch (error){
        console.log(error);
    }
}

fetchData();
