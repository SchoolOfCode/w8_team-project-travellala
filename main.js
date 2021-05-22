/* Logic flow
1. Select check in date 
    - Select the array function which provides the date
2. Select check out date
    - Select the array function which provides the date
3. Select destination
    - Select the array function which provides destination
4. select no. of adults
    - Select the array function which provides adults
5. Submit
    - Add Event listener to fetch data 
6. Return value of activities from selected choices
    - We want the return of activities in ascending order by     price 
7. We want to display return in a row of three 
    - Display name of attraction  
    - Display image of attraction
    - Display description 
    - Display price 
8. If user selects preferred choice 
    - They get redirected to booking URL 
*/

// let priceDisplay = document.getElementById("price")
const checkIn = document.getElementById("checkin");
const checkOut = document.getElementById ("checkout");
const getCities = document.getElementById ("cities");
const getAdultNumber = document.getElementById ("adult-number");
const submitResult = document.getElementById ("submitButton");
const printResult = document.querySelector (".listOfResults");


let citySelection = null;
// let destination = [Pattaya, Bangkok, ChianMai, KoSamui, Phuket];
function handleSelection(){
    citySelection = document.querySelector("#countries").value;
}
// make an array by location and id 
// loop throw array to find selection
let cities = {
    "Pattaya" : 293915,
    "Bangkok" : 293916,
    "ChiangMai" : 293917,
    "KoSamui" : 293918,
    "Phuket" : 293920,
}
console.log (cities["Pattaya"]);
function pickCities (getCityName) {
    for (let i = 0; i < cities.length; i++) {
    if (citySelection === getCityName[i]){

        } return cities.value;
    } 
}

async function getActivities() {
    const getData = await fetch("https://travel-advisor.p.rapidapi.com/attractions/list?location_id=293918&currency=USD&lang=en_US&lunit=km&sort=recommended", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c55d2d23f7msh63ff74ae914833dp1b1565jsnb15ec0c1c3db",
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com"
        }
    })
    const response = await getData.json();
    console.log(response);
    const getActivitiesName = response.data[5].name;
    console.log(getActivitiesName);
    const getRanking = response.data[5].ranking;
    console.log(getRanking);
    const getPrice = response.data[5].offer_group.offer_list[0].price;
    console.log(getPrice)
    const getTitle = response.data[5].offer_group.offer_list[0].title;
    console.log (getTitle);
    const getImage = response.data[5].photo.images.medium.url;
    console.log(getImage);
    //get second result
    const getActivitiesName2 = response.data[9].name;
    console.log(getActivitiesName2);
    const getRanking2 = response.data[9].ranking;
    console.log(getRanking2);
    const getPrice2 = response.data[9].offer_group.offer_list[0].price;
    console.log(getPrice2)
    const getTitle2 = response.data[9].offer_group.offer_list[0].title;
    console.log (getTitle2);
    const getImage2 = response.data[9].photo.images.medium.url;
    console.log(getImage2);

    //get third result
    const getActivitiesName3 = response.data[8].name;
    console.log(getActivitiesName3);
    const getRanking3 = response.data[8].ranking;
    console.log(getRanking3);
    const getPrice3 = response.data[8].offer_group.offer_list[0].price;
    console.log(getPrice3)
    const getTitle3 = response.data[8].offer_group.offer_list[0].title;
    console.log (getTitle3);
    const getImage3 = response.data[8].photo.images.medium.url;
    console.log(getImage3);

    // let displayResult = document.createElement("p");
    printResult.innerHTML = getPrice3;
    // displayResult.innerHTML = getPrice3;
    // const getImage =  response.data[5].offer_group.offer_list[0].image_url;
    // console.log(getImage);
    // priceDisplay.innerHTML = getActivitiesName;
}
getActivities();

submitResult.addEventListener("click", getActivities);


// function addActivitiesToList(string){
//     let li = document.createElement("li");
//     let listItem = document.createTextNode(string)
//     li.appendChild(listItem);
//     printResult.appendChild(li);
    
// }

