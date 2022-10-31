<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SAP</title>

    <link rel="stylesheet" href="css/estilos.css">
    
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" rel="stylesheet">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
   

<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family:  'Poppins', sans-serif;
}

body{
    background: #fafafa !important;
    margin-left: 80px;
    margin-top: 80px;
    transition: margin-left 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

main{
    
    padding: 120px 100px;
}

header{
    width: 100%;
    height: 80px;
    background: #fff;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 200;
    box-shadow: 0px 30px 49px -19px rgba(0, 0, 0, 0.15);
}

.icon__menu{ 
   
    transform: translateX(107px);
}

.icon__menu h1{
    font-size: 1.5rem;
    white-space: pre;
    position: absolute;
}
.icon__menu ion-icon{
    margin-left: 1600px;
   
}

.menu__side{
    width: 80px;
    height: 100%;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    color: #1775FA;
    font-size: 18px;
    z-index: 300;
    overflow: hidden;
    overflow-y: scroll;
    transition: all 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    box-shadow: 16px 3px 7px -15px rgba(72, 130, 255, 0.17);
    transition: all 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

/*Ocultar scroll para chrome, safari y opera*/
.menu__side::-webkit-scrollbar{
    display: none;
}

/*Ocultar scroll para IE, Edge y Firefox*/
.menu__side{
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.name__page h4{
    margin-left: 11px;
    font-size: 1.4rem;
}

.name__page{
    padding: 22.5px 30px;
    display: flex;
    align-items: center;
    margin-top: 0px;
    cursor: pointer;
    background: #e0e7f6 !important;
}

.name__page i{
    width: 20px;
    margin-right: 20px;
}

.options__menu{
    padding: 20px 30px;
    position: absolute;
    top: 80px;
    width: 300px;
}
.options__menu a h4{
    margin-left: 11px;
    font-size: 1rem;
}

.options__menu a{
    color: #939496;
    cursor: default;
    display: block;
    position: relative;
    transition: color 300ms;
    text-decoration: none;
}

.options__menu a:hover{
    color: #1775FA;
}

.options__menu .option{
    padding: 20px 0px;
    display: flex;
    align-items: center;
    position: relative;
}

.option_2{
    padding: 20px 0px;
    align-items: center;
    position: relative;
}
.option_2 > a >label{
    display: flex;
    align-items: center;
}

.options__menu .option i{
    width: 20px;
    margin-right: 20px;
    cursor: pointer;
}

.options__menu .option h4{
    font-weight: 300;
    cursor: pointer;
}
.acordeon-title{
    margin-left: 32px;
    font-size: 1rem;
}

.acordeon-body{
margin-top: 20px;
}
.acordeon-body > a{
margin-top: 15px;
}

.acordeon-body > a > label{
    margin-left: 27px;
    font-size: 1rem;
    white-space: pre;
}

a.selected{
    color: #fff;
}

.selected:before{
    content: '';
    width: 3px;
    height: 80%;
    background: white;
    position: absolute;
    top: 10%;
    left: -30px;
}

.active  .icon{
    margin-left: -30px;
   padding: 9px 10px 10px 30px ;
   border-radius: 3px;
    background: #F2F8FE;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;   
}


.contenido {
    position: relative;
      margin-top: -50px;
      background: white;
      width: 100%;
      height: 600px;
      box-shadow: 1px 11px 13px 3px rgba(152, 161, 178, 0.1),
        0px 0px 2px rgba(0, 0, 0, 0.08);
        border-radius: 8px;
    }




/*Clases para usar en JavaScript*/

.body_move{
    margin-left: 190px;
}

.menu__side_move{
    width: 270px;
}



@media screen and (max-width:1830px){
    .icon__menu ion-icon{
        margin-left: 1600px;  
    }
}

@media screen and (max-width:1730px){
    .icon__menu ion-icon{
        margin-left: 1400px;  
    }
}

@media screen and (max-width:1530px){
    .icon__menu ion-icon{
        margin-left: 1100px;  
    }
}


@media screen and (max-width:1230px){
    .icon__menu ion-icon{
        margin-top: 7px;
        margin-left: 500px;  
    }
}

@media screen and (max-width: 760px){
    .body_move{
        margin-left: 0px;
    }

    .menu__side_move{
        width: 80px;
        left: -80px;
    }

    
   
}
</style>




</head>
<body id="body" class="body_move">
    
    <header>
        <div class="icon__menu">

               <h1> HOLA STIRWIN CASTRO GAVIRIA</h1>  
               <ion-icon name="person-outline"></ion-icon>
          
            
           
        </div>
    </header>