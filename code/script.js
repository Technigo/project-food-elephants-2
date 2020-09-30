
const apiKey = "a0b2ff4226123eea0f07250df8890683"
const apiUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=3&entity_type=city&cuisines=45`;
const cityId = 3;
const cuisineId = 45;

const apiPriceAsc = `https://developers.zomato.com/api/v2.1/search?entity_id=${3}&entity_type=city&cuisines=${45}&sort=cost&order=asc`
const leRestaurantSection = document.getElementById("restaurantContainer")

fetch(apiUrl, { headers: { "user-key": apiKey } })
  .then(response =>
    response.json())
  .then(json => {

    let restaurants = json.restaurants
    let filteredRestaurants = restaurants.splice(0, 12)
    //console.log(filteredRestaurants)

    filteredRestaurants.forEach((restaurant) => {
      const name = restaurant.restaurant.name;
      const address = restaurant.restaurant.location.address;
      const avCost = restaurant.restaurant.average_cost_for_two;
      const currency = restaurant.restaurant.currency;
      const rating = restaurant.restaurant.user_rating.aggregate_rating;
      const img = restaurant.restaurant.featured_image;

      document.getElementById('restaurantContainer').innerHTML += `<li>${name} ${rating} ${avCost} ${address}</li>`
      // console.log(`${img} ${address} ${rating}`);
    });

    // console.log(json.restaurants[0].restaurant.name);
    // console.log(json.restaurants[0].restaurant.location.address);
    // console.log(json.restaurants[0].restaurant.average_cost_for_two);
    // console.log(json.restaurants[0].restaurant.currency);  
    // console.log(json.restaurants[0].restaurant.user_rating.aggregate_rating);
    // console.log(json.restaurants[0].restaurant.featured_image);  



    //DATE FETCH RESTAURANTS SORTED BY PRICE RANGE IN ASCENDING ORDER

    fetch(apiPriceAsc, { headers: { "user-key": apiKey } })
      .then(response =>
        response.json())
      .then(json => {
        document.getElementById("btnPrice").addEventListener("click", () => {
          let restaurants = json.restaurants
          let filteredRestaurants = restaurants.splice(0, 12)

          //FUNCTION TO CLEAR PREVIOUS CONTENT
          leRestaurantSection.innerHTML = "";

          filteredRestaurants.forEach((restaurant) => {
            let name = restaurant.restaurant.name;
            const avCost = restaurant.restaurant.average_cost_for_two;
            let address = restaurant.restaurant.location.address;
            const rating = restaurant.restaurant.user_rating.aggregate_rating;

            //PRINTS SORTED DATA LIST BY ASCENDING PRICE RANGE
            leRestaurantSection.innerHTML += `<li>${name}</li> <li>Rating: ${rating}</li><li>${avCost}</li>`;
          });



        });




      });

  });


//FUNCTION THAT CREATES THE BUTTON

function sortPriceBtn() {
  const makeBtn = document.createElement("button");
  document.body.appendChild(makeBtn);
};

fetch(apiPriceAsc, { headers: { "user-key": apiKey } })
  .then(response =>
    response.json())
  .then(json => {
    document.getElementById("btnRating").addEventListener("click", () => {
      let restaurants = json.restaurants
      let filteredRestaurants = restaurants.splice(0, 12)

      //FUNCTION TO CLEAR PREVIOUS CONTENT
      leRestaurantSection.innerHTML = "";

      filteredRestaurants.forEach((restaurant) => {
        let name = restaurant.restaurant.name;
        const avCost = restaurant.restaurant.average_cost_for_two;
        let address = restaurant.restaurant.location.address;
        const rating = restaurant.restaurant.user_rating.aggregate_rating;

        //PRINTS SORTED DATA LIST BY ASCENDING PRICE RANGE
        leRestaurantSection.innerHTML += `<li>${name}</li> <li>Rating: ${rating}</li>`;
      });



    });
  });