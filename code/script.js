
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
        console.log(filteredRestaurants)

        filteredRestaurants.forEach((restaurant) => {
            const name = restaurant.restaurant.name;
            const address = restaurant.restaurant.location.address;
            const avCost = restaurant.restaurant.average_cost_for_two;
            const currency = restaurant.restaurant.currency;
            const rating = restaurant.restaurant.user_rating.aggregate_rating;
            const img = restaurant.restaurant.featured_image;
            
            document.getElementById('restaurantContainer').innerHTML += `<div class="eachRestaurant">
                                                                            <ul>
                                                                            <img class="restaurant-img" src="${img}"</img>
                                                                            <li class="restaurant-name">${name}</li>
                                                                            <li class="restaurant-rating">&#9734;
                                                                             ${rating}</li>
                                                                            <li class="restaurant-avcost"><strong>${avCost}</strong> RP</li>
                                                                            <li class="restaurant-address">${address}</li>
                                                                            </ul>
                                                                            </div>`;
            
            
            console.log(`${img} ${address} ${rating}`);
        });
   
    

    fetch(apiPriceAsc, { headers: { "user-key": apiKey } })
      .then(response =>
        response.json())
      .then(json => {
        let restaurants = json.restaurants
        let filteredRestaurants = restaurants.splice(0, 12)
       
        filteredRestaurants.forEach((restaurant) => {
          let name = restaurant.restaurant.name;
          const avCost = restaurant.restaurant.average_cost_for_two;
          let address = restaurant.restaurant.location.address;
          const rating = restaurant.restaurant.user_rating.aggregate_rating;

          leRestaurantSection.innerHTML += `<li>${name}</li> <li>${avCost}</li> <li>${address}</li><li>${rating}</li>`

          leRestaurantSection.innerHTML += `<p>${name}</p> <p>${avCost}</p>`
        });

      });





  });