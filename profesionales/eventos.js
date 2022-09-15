$(document).ready(function () {
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
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });
});

const cities = {
    ama: ["El Encanto", "La Chorrera", "La Pedrera", "La Victoria",
        "Leticia", "Miriti", "Puerto Alegria", "Puerto Arica", "Puerto Nariño",
        "Puerto Ssantander", "Taparaca"],
    ant: ["Abriaquí", "Altamira", "Amalfi", "Angostura", "Anorí", "Anzá",
        "Apartadó", "Aragón", "Arboletes", "Bajirá", "Bellavista", "Belmira",
        "Berlín", "Betulia", "Briceño", "Builópolis", "Buriticá", "Caicedo", "Campamento",
        "Carepa", "Carolina", "Caucasia", "Cañasgordas", "Cedeño", "Cestillal", "Chamuscados",
        "Chigorodó", "Concordia", "Copacabana", "Currulao", "Cáceres", "Córdoba", "Córdova",
        "Dabeiba", "Don Matías", "Ebéjico", "El Aro", "El Bagre", "El Brasil", "El Carmen", "El Cedro",
        "El Oro", "El Salto", "El Tres", "Entrerrios", "Frontino", "Giraldo", "Guadalupe", "Guasabra",
        "Gómez Plata", "Güintar", "Horizontes", "Ituango", "Jaiperá", "Jardín", "Juntas de Uramita",
        "La Encarnación", "La Granja", "La Merced", "La Placita", "La Playa", "Labores", "Liborina",
        "Llanadas", "Llanos de Cuivá", "Manguruma", "Marinilla", "Medellín", "Murri", "Mutatá", "Nariño",
        "Necoclí", "Nutibara", "Ochalí", "Olaya", "Palmitas", "Pavarandocito", "Peque", "Pueblo Nuevo", "Puerto Antioquia",
        "puerto Berrío", "Puerto Valdivia", "Quebrada Seca", "Quebradona", "Remedios", "Rioverde",
        "Sabanalarga", "Saiza", "San Andrés", "San Jerónimo", "San José", "San Juan de Urabá", "San Nicolás de Titumate",
        "San Pablo", "San Pedro", "San Pedro de Urabá", "Santa Ana", "Santa Fé de Antioquia", "Santa Rita",
        "Santa Rosa de Osos", "Sevilla", "Sopetrán", "Sucre", "Tabacal", "Tarazá", "Toledo", "Tonusco",
        "Arriba", "Turbo", "Urama", "Uramagrande", "Uramita", "Urrao", "Valdivia", "Vigía del Fuerte",
        "Yalí", "Yarumal"],
    ara: ["a", "a", "a", "a"],
    arc: ["d", "e", "f", "g"],
    atl: ["h", "i", "j", "k"],
    bog: ["h", "i", "j", "k"],
    bol: ["h", "i", "j", "k"],
    boy: ["A", "E", "V", "E"],
    cal: ["M", "A", "E", "C"],
    caq: ["a", "a", "a", "a"],
    cas: ["d", "e", "f", "g"],
    cau: ["h", "i", "j", "k"],
    ces: ["h", "i", "j", "k"],
    cho: ["h", "i", "j", "k"],
    cor: ["A", "E", "V", "E"],
    cun: ["M", "A", "E", "C"],
    guai: ["a", "a", "a", "a"],
    guav: ["d", "e", "f", "g"],
    hui: ["h", "i", "j", "k"],
    gua: ["h", "i", "j", "k"],
    met: ["h", "i", "j", "k"],
    nar: ["A", "E", "V", "E"],
    nor: ["M", "A", "E", "C"],
    put: ["a", "a", "a", "a"],
    qui: ["d", "e", "f", "g"],
    ris: ["h", "i", "j", "k"],
    sana: ["h", "i", "j", "k"],
    sant: ["A", "E", "V", "E"],
    suc: ["M", "A", "E", "C"],
    tol: ["a", "a", "a", "a"],
    val: ["d", "e", "f", "g"],
    vau: ["h", "i", "j", "k"],
    vic: ["h", "i", "j", "k"]
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

const area = {
    bac: ["a", "b", "c", "d", "e"],
    en_aux: ["f", "g", "h", "i"],
    en_pro: [""],
    fis: [""],
    fono: [""],
    gero: [""],
    inye: [""],
    med_esp: [""],
    med_gen: [""],
    nut_die: [""],
    odon: [""],
    opto: [""],
    prac_med: [""],
    prac_psico: [""],
    psico: [""],
    ter_ocu: [""],
    ter_res: [""],
}
$('#professions').change(function (a) {
    let modelList = document.getElementById("area");
    while (modelList.options.length) {
        modelList.remove(0);
    }
    area[$(this).val()].map(trabajo => {
        $('#area').append(`<option value="${trabajo}">${trabajo}</option>`);
    })
})