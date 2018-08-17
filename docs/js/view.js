//Esconde la pantalla de inicio a los 2 segundos y muestra el resto de la App
setTimeout(function hide() {
  $('#pantallaInicial').hide('fast');
  document.getElementById('pantallaApp').style.display = 'block';
}, 3500);


//MUESTRA RESULTADOS DE LA BUSQUEDA EN INPUT
function searchNames(){
  const search = document.getElementById("searchName").value;
  const show = document.getElementById("showRestaurantes");
  const filteredUsers = filterUsers(local, search);
  const filteredCategories = filterCategory(local, search);
  show.innerHTML = "";
  if(search != ""){
    filteredUsers.forEach(rest => {
      show.innerHTML += `<p id="parrafoNombres"><a onclick="modal('${rest.name}','${rest.category}','${rest.address}','${rest.city}','${rest.region}','${rest.phone}','${rest.urlPhoto}')" data-toggle="modal" data-target="#centralModalDanger">${rest.name}</a></p>`;
    });
    filteredCategories.forEach(rest => {
      show.innerHTML += `<p id="parrafoNombres"><a onclick="modal('${rest.name}','${rest.category}','${rest.address}','${rest.city}','${rest.region}','${rest.phone}','${rest.urlPhoto}')" data-toggle="modal" data-target="#centralModalDanger">${rest.name}</a></p>`;
    });
  }

}

//MODAL CON LA INFORMACION
function modal(name, category, address, city, region, phone, photo){
  document.getElementById('searchName').value="";
  let contenedorRestaurante = document.getElementById('showRestaurantes');
  contenedorRestaurante.innerHTML = " <div class='modal fade' id='centralModalDanger' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'><div class='modal-dialog modal-notify modal-danger' role='document'><div class='modal-content justify-content-center'><div class='modal-header'><h5 id='exampleModalLabel'>" + name + "</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body text-center'><img src='" + photo + "' width='250'><p class='infoModal mt-4'><b>Categoría: </b>" + category + "</p><p class='infoModal'> <b>Ciudad: </b>" + city + "</p><p class='infoModal'><b>Region: </b>" + region + "</p><p class='infoModal mt-4'><b>Dirección: </b>" + address + "</p></div><div class='modal-footer justify-content-center'><a type='button' class='btn btn-danger' id='btnDang'>Llamar<i class='fas fa-phone'></i></i></a><a type='button' id='btnClose' class='btn btn-outline-danger waves-effect' data-dismiss='modal'>Cerrar</a></div></div></div></div>";
}



