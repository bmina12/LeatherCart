const URL= "https://course-api.com/javascript-store-products";
const btn= document.querySelector('.btn-primary-outline');

let promise= fetch(URL);
console.log(promise);

const getFacts=async ()=>{
    console.log("Getting Data");
    let response = await fetch(URL);
    console.log(response);// JSON Format
    let data = await response.json();//.JSON is asyn so await is use
    console.log(data[0].text);

}

btn.addEventListener("click", getFacts);


