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

let destination = [Pattaya, Bangkok, ChianMai, KoSamui, Phuket];

let Pattaya = 293915;
let Bangkok = 293916;
let ChiangMai = 293917;
let KoSamui = 293918;
let Phuket = 293920;

async function testOut() {
    const test = await fetch(`https://travel-advisor.p.rapidapi.com/attractions/list?location_id=${}&currency=USD&lang=en_US&lunit=km&sort=recommended`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c55d2d23f7msh63ff74ae914833dp1b1565jsnb15ec0c1c3db",
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com"
        }
    })
    const response = await test.json();
    console.log(response);
    const fullPrice = response.searchResults[0];
    priceDisplay.innerHTML = fullPrice;
}
testOut();



