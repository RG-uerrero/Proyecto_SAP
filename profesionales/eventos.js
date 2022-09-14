
$(document).ready(function() {    
    $('#example').DataTable({
    //para cambiar el lenguaje a español
        "language": {
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
               "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
               "sSearch": "Buscar:",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast":"Último",
                    "sNext":"Siguiente",
                    "sPrevious": "Anterior"
			     },
			     "sProcessing":"Procesando...",
            }
    });     
});

const cities = {
    ama: ["Seleccione Ciudad", "El Encanto", "La Chorrera", "La Pedrera", "La Victoria", 
    "Leticia", "Miriti", "Puerto Alegria", "Puerto Arica", "Puerto Nariño", 
    "Puerto Ssantander", "Taparaca"],
    ant: ["Seleccione Ciudad", "Abriaquí", "Altamira", "Amalfi", "Angostura", "Anorí", "Anzá", 
    "Apartadó", "Aragón", "Arboletes", "Bajirá", "Bellavista", "Belmira", 
    "Berlín", "Betulia", "Briceño", "Builópolis", "Buriticá", "Caicedo", "Campamento", 
    "Carepa", "Carolina", "Caucasia", "Cañasgordas", "Cedeño", "Cestillal", "Chamuscados", 
    "Chigorodó", "Concordia", "Copacabana", "Currulao", "Cáceres", "Córdoba", "Córdova", 
    "Dabeiba", "Don Matías", "Ebéjico", "El Aro", "El Bagre", "El Brasil", "El Carmen", "El Cedro", 
    "El Oro", "El Salto", "El Tres", "Entrerrios", "Frontino", "Giraldo", "Guadalupe", "Guasabra", 
    "Gómez Plata", "Güintar", "Horizontes", "Ituango", "Jaiperá", "Jardín", "Juntas de Uramita", 
    "La Encarnación", "La Granja", "La Merced", "La Placita", "La Playa", "Labores", "Liborina", 
    "Llanadas", "Llanos de Cuivá", "Manguruma", "Marinilla", "Medellín", "Murri", "Mutatá", "Nariño", 
    "Necoclí", "Nutibara", "Ochalí", "Olaya", "Palmitas", "Pavarandocito", "Peque", "Pueblo Nuevo", 
    "Puerto Antioquia", "puerto Berrío", "Puerto Valdivia", "Quebrada Seca", "Quebradona", "Remedios", 
    "Rioverde", "Sabanalarga", "Saiza", "San Andrés", "San Jerónimo", "San José", "San Juan de Urabá", 
    "San Nicolás de Titumate", "San Pablo", "San Pedro", "San Pedro de Urabá", "Santa Ana", 
    "Santa Fé de Antioquia", "Santa Rita", "Santa Rosa de Osos", "Sevilla", "Sopetrán", "Sucre", 
    "Tabacal", "Tarazá", "Toledo", "Tonusco", "Arriba", "Turbo", "Urama", "Uramagrande", "Uramita", 
    "Urrao", "Valdivia", "Vigía del Fuerte", "Yalí", "Yarumal"],
    ara: ["Seleccione Ciudad", "Arauca", "Arauquita", "Cravo Norte", "Fortul", "Puerto Rondon", "Saravena", "Tame"],
    arc: ["Seleccione Ciudad", "San Andres", "Providencia"],
    atl: ["Seleccione Ciudad", "Barranquilla", "Baranoa", "Campo de la Cruz", "Candelaria", "Galapa", 
    "Juan de Acosta", "Luruaco", "Malambo", "Malambo", "Palmar de Varela", "Piojó", "Polonuevo", "Ponedera", 
    "Puerto Colombia", "Repelón", "Sabanagrande", "Sabanalarga", "Santa Lucía", "Santo Tomás", "Soledad", "Suán", 
    "Tubará", "Usiacurí"],
    bog: ["Seleccione Ciudad", "Bogota"],
    bol: ["Seleccione Ciudad", "Achi", "Altos del rosario", "Arenal", "Arjona","Arroyohondo","Barranco de loba","Calamar",
    "Cantagallo", "Cicuco", "Córdoba", "Clemencia", "El carmen de bolívar", "El guamo",  "El peñón", "Hatillo de loba", 
    "Magangué", "Mahates", "Margarita", "María la baja", "Montecristo", "Mompos", "Morales", "Norosi", "Pinillos", 
    "Regidor", "Río viejo", "San cristóbal", "San estanislao", "San fernando", "San jacinto", "San jacinto del cauca", 
    "San juan nepomuceno", "San martín de loba", "San pablo", "Santa catalina", "Santa rosa", "Santa rosa del sur", 
    "Simití", "Soplaviento", "Talaigua nuevo", "Tiquisio", "Turbaco", "Turbaná", "Villanueva", "Zambrano"],
    boy: ["Seleccione Ciudad", "A", "E", "V", "E"],
    cal: ["Seleccione Ciudad", "M", "A", "E", "C"],
    caq: ["Seleccione Ciudad", "a", "a", "a", "a"],
    cas: ["Seleccione Ciudad", "d", "e", "f", "g"],
    cau: ["Seleccione Ciudad", "h", "i", "j", "k"],
    ces: ["Seleccione Ciudad", "h", "i", "j", "k"],
    cho: ["Seleccione Ciudad", "h", "i", "j", "k"],
    cor: ["Seleccione Ciudad", "A", "E", "V", "E"],
    cun: ["Seleccione Ciudad", "M", "A", "E", "C"],
    guai: ["Seleccione Ciudad", "a", "a", "a", "a"],
    guav: ["Seleccione Ciudad", "d", "e", "f", "g"],
    hui: ["Seleccione Ciudad", "h", "i", "j", "k"],
    gua: ["Seleccione Ciudad", "h", "i", "j", "k"],
    met: ["Seleccione Ciudad", "h", "i", "j", "k"],
    nar: ["Seleccione Ciudad", "A", "E", "V", "E"],
    nor: ["Seleccione Ciudad", "M", "A", "E", "C"],
    put: ["Seleccione Ciudad", "a", "a", "a", "a"],
    qui: ["Seleccione Ciudad", "d", "e", "f", "g"],
    ris: ["Seleccione Ciudad", "h", "i", "j", "k"],
    sana: ["Seleccione Ciudad", "h", "i", "j", "k"],
    sant: ["Seleccione Ciudad", "A", "E", "V", "E"],
    suc: ["Seleccione Ciudad", "M", "A", "E", "C"],
    tol: ["Seleccione Ciudad", "a", "a", "a", "a"],
    val: ["Seleccione Ciudad", "d", "e", "f", "g"],
    vau: ["Seleccione Ciudad", "h", "i", "j", "k"],
    vic: ["Seleccione Ciudad", "h", "i", "j", "k"]
}
$('#departament').change(function (e) {
    let modelList = document.getElementById("cities");
    while (modelList.options.length) {
        modelList.remove(0);
    }
    cities[$(this).val()].map(city => {
        $('#cities').append(`<option value="${city}">${city}</option>`);
    })

})