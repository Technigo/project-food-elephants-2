
const apiKey = "a0b2ff4226123eea0f07250df8890683"
const apiUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=3&entity_type=city&cuisines=45`;
const cityId = 3;
const cuisineId = 45;



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

      document.getElementById('restaurantContainer').innerHTML += `${name} ${address} ${rating}`
      console.log(`${img} ${address} ${rating}`);
    });

    // console.log(json.restaurants[0].restaurant.name);
    // console.log(json.restaurants[0].restaurant.location.address);
    // console.log(json.restaurants[0].restaurant.average_cost_for_two);
    // console.log(json.restaurants[0].restaurant.currency);  
    // console.log(json.restaurants[0].restaurant.user_rating.aggregate_rating);
    // console.log(json.restaurants[0].restaurant.featured_image);  

     //sortera restaurangeRNA på pris : button? add event on clicK

//DATE FETCH RESTAURANTS SORTED BY PRICE RANGE IN ASCENDING ORDER

// fetch(apiPriceAsc, { headers: { "user-key": apiKey } })
.then(response =>
      response.json())
      .then(json => {
        let restaurants = json.restaurants
        let filteredRestaurants = restaurants.splice(0, 12)
        //console.log(filteredRestaurants)
        filteredRestaurants.forEach((restaurant) => {
          let name = restaurant.restaurant.name;
          const avCost = restaurant.restaurant.average_cost_for_two;
          let address = restaurant.restaurant.location.address;
          const rating = restaurant.restaurant.user_rating.aggregate_rating;

          leRestaurantSection.innerHTML += `<li>${name}</li> <li>${avCost}</li> <li>${address}</li><li>${rating}</li>`

          // leRestaurantSection.innerHTML += `<p>${name}</p> <p>${avCost}</p>`
        });

      });




  });