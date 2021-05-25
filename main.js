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
const displaySection = document.getElementById("display-location");
// const getAdultNumber = document.getElementById ("adult-number");
const submitResult = document.getElementById("submitButton");

// function call to select city by user selection 

let locationNumber = 0;
function changeLocationId() {
    let location = document.getElementById("cities");
    let locationValue = location.value;
    if (locationValue === "Pattaya") {
        locationNumber = 293919;
    } else if (locationValue === "Bangkok") {
        locationNumber = 293916;
    } else if (locationValue === "ChiangMai") {
        locationNumber = 293917;
        console.log(locationNumber)
    } else if (locationValue === "KoSamui") {
        locationNumber = 293918;
    } else if (locationValue === "Phuket") {
        locationNumber = 293920;
    }
}

// Shola spoke to mentor who offered a different solution for function above 

// async function to get location and activity from API 

async function getActivities() {
    changeLocationId(locationNumber);
    const getData = await fetch(`https://travel-advisor.p.rapidapi.com/attractions/list?location_id=${locationNumber}&currency=GBP&lang=en_US&lunit=km&sort=recommended`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c55d2d23f7msh63ff74ae914833dp1b1565jsnb15ec0c1c3db",
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com"
        }
    })
    const response = await getData.json();
    console.log(response);
    const result = response.data;
    // used .slice methos to grab only 3 items from the array
    generateActivities(result.slice(1, 4));

}

// function to generate and display activities on html 

function generateActivities(results) {
    let generatedActivities = "";
    // use map to create new modified arrays 
    results.map((result) => {
        generatedActivities +=
            `
        <article class="activities-data">
        <img class="activities-img" src="${result.photo.images.medium.url}" alt"" />
            <div class="item-result">
            <h2 class="title">${result.name}</h2>
            <a class="activities-label" href="${result.website}" target = "_blank">View website</a>
            </div>
            <p class="activities-data">Ranking : ${result.ranking}</p>
            <p class="activities-data">Activity to do  : ${result['offer_group']['offer_list'][0].title}</p>
            <p class="activities-data">Price : ${result['offer_group']['offer_list'][0].price}</p>
            
            
        </article>
        
        `

    })
    // populate search result section by changing the inner HTML with the
    // generated div with the results from the mapp array method
    displaySection.innerHTML = generatedActivities;
}


// event listener for button click
submitResult.addEventListener("click", getActivities);


