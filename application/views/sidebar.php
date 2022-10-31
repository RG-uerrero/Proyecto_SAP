<div class="menu__side menu__side_move" id="menu_side">

<div class="name__page">
    <i  id="btn_open">
        <ion-icon name="grid-outline"></ion-icon>
    </i>
    <h4>SAP</h4>
</div>

<div class="options__menu">	
   
    <a href="<?=site_url('template/profesionales')?>" class="active" >
        <div class="option">
            <i title="Inicio">
                <ion-icon class="icon" name="home-outline"></ion-icon>
            </i>
            <h4>Profesionales</h4>
        </div>
    </a>

    <a href="#">
        <div class="option_2">
            <label title="Portafolio">
                <ion-icon name="calendar-outline" data-bs-toggle="collapse" href="#acordeon" role="button" aria-expanded="false"
                aria-controls="collapseExample"> </ion-icon>
                <label class="acordeon-title" data-bs-toggle="collapse" href="#acordeon" role="button" aria-expanded="false"
                    aria-controls="collapseExample">
                    Agenda
                </label>
            </label>


            <div class="collapse" id="acordeon">
                <div class="acordeon-body" >
                    <a href="<?=site_url('template/agendamiento')?>" > <ion-icon name="clipboard-outline"> </ion-icon> <label for="">Agendamiento</label></a>
                    <a href="<?=site_url('template/consulta')?>" > <ion-icon name="search-outline"> </ion-icon> <label xfor="">Consulta</label></a>
                    <a href="<?=site_url('template/operador')?>" > <ion-icon name="accessibility-outline"> </ion-icon> <label for="">Operador</label></a>
                </div>
            </div>

        </div>
    </a>
    
    <a href="<?=site_url('template/pacientes')?>" >
        <div class="option">
            <i title="Cursos">
                <ion-icon class="icon" name="people-outline"></ion-icon>
            </i>
            <h4>Pacientes</h4>
        </div>
    </a>

    <a href="<?=site_url('template/historiaclinica')?>" >
        <div class="option">
            <i title="Blog"> 
                <ion-icon class="icon" name="text-outline"></ion-icon>
            </i>
            <h4>Historia clinica</h4>
        </div>
    </a>

    <a href="<?=site_url('template/reportes')?>" >
        <div class="option">
            <i title="Contacto">
                <ion-icon class="icon" name="list-outline"></ion-icon>
            </i>
            <h4>Reportes</h4>
        </div>
    </a>

    

</div>

</div>