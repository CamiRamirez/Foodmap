//FETCH RESTAURANTES
fetch('restaurantes.json')
.then(response => response.json())
.then(restaurantesJSON => {
  restaurant = restaurantesJSON;
  //console.log(restaurant);
  //funcion q verifica que este lista la respuesta del json
  listaRestaurantesJson();
})
.catch(error => {
  console.error("No pudimos obtener respuesta");
  console.error("ERROR > " + error.stack);
});


//funcion para recorrer el json 
const restaurantesName = (restaurant) =>{
  for (let i in restaurant){
    let restaurantesNames = restaurant[i].name;
  }
  return restaurant;
}

const listaRestaurantesJson = () => {
  local = restaurantesName(restaurant);
}

//FILTROS DE BUSQUEDA PARA INPUT
filterUsers = (local, search) => {
  if(search){
    if(local){
      search =search.toLowerCase();
      return local.filter(user => user &&
       user.name &&
       user.name.toLowerCase().indexOf(search)>= 0);
    }
  }
  return local;
};

filterCategory = (local, search) => {
  if(search){
    if(local){
      search =search.toLowerCase();
      return  local.filter(user => user &&
       user.category &&
       user.category.toLowerCase().indexOf(search)>= 0);
    }
  }
  return local;
};

