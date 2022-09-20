let btn = document.querySelector('#informacion_consulta');
let informacion_consulta = document.querySelector('.informacion_consulta_content');






//let  = document.querySelector('.informacion_consulta_content');
isShow=true
function showHideInformacionConsulta(){
    
if(isShow){
informacion_consulta.style.display = "none";
isShow = false;
}else{
informacion_consulta.style.display = "flex";
isShow = true;
}

}