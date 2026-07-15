/* ==========================================================
   PIXELAIR - SCRIPT.JS
========================================================== */

/* ================= VARIABLES ================= */

let idiomaActual = "es";
let proyectoActual = null;

/* ================= TRADUCCIONES ================= */

const textos = {

    es: {

        inicio: "Inicio",
        sobre: "Sobre nosotros",
        portfolio: "Portfolio",
        contacto: "Contacto",

        titulo: "Capturamos lugares desde otra perspectiva.",
        subtitulo: "Fotografía y vídeo profesional con dron para inmobiliarias, turismo, empresas, inspecciones técnicas y proyectos únicos.",

        boton: "Ver proyectos",

        sobreTitulo: "Sobre Pixelair",

        sobreTexto:
            "En Pixelair creemos que cada proyecto merece ser mostrado desde una perspectiva diferente. Creamos contenido visual con drones para inmobiliarias, hoteles, empresas, turismo, obras e inspecciones técnicas. Cada fotografía está pensada para transmitir calidad, amplitud y el verdadero valor de cada espacio.",

        proyectos: "Nuestros proyectos",

        contactoTitulo: "Trabajemos juntos",

        contactoTexto:
            "¿Necesitas fotografía o vídeo aéreo para tu próximo proyecto?",

        presupuesto: "Solicitar presupuesto",

        fecha: "Fecha:",

        verProyecto: "Ver proyecto",

        footer: "© 2026 PIXELAIR · Todos los derechos reservados."

    },

    en: {

        inicio: "Home",
        sobre: "About",
        portfolio: "Portfolio",
        contacto: "Contact",

        titulo: "We capture places from a different perspective.",

        subtitulo:
            "Professional drone photography and video for real estate, tourism, businesses, technical inspections and unique projects.",

        boton: "View projects",

        sobreTitulo: "About Pixelair",

        sobreTexto:
            "At Pixelair we believe every project deserves to be shown from a different perspective. We create aerial visual content for real estate, hotels, businesses, tourism and technical inspections. Every image is designed to showcase quality and the true value of every property.",

        proyectos: "Our Projects",

        contactoTitulo: "Let's work together",

        contactoTexto:
            "Need drone photography or video for your next project?",

        presupuesto: "Request a quote",

        fecha: "Date:",

        verProyecto: "View project",

        footer: "© 2026 PIXELAIR · All rights reserved."

    },

    de: {

        inicio: "Start",
        sobre: "Über uns",
        portfolio: "Portfolio",
        contacto: "Kontakt",

        titulo: "Wir zeigen Orte aus einer neuen Perspektive.",

        subtitulo:
            "Professionelle Drohnenfotografie und Luftvideos für Immobilien, Tourismus, Unternehmen und technische Inspektionen.",

        boton: "Projekte ansehen",

        sobreTitulo: "Über Pixelair",

        sobreTexto:
            "Bei Pixelair sind wir überzeugt, dass jedes Projekt aus einer einzigartigen Perspektive gezeigt werden sollte. Wir erstellen hochwertige Luftaufnahmen für Immobilien, Hotels, Unternehmen, Tourismus und technische Inspektionen.",

        proyectos: "Unsere Projekte",

        contactoTitulo: "Lassen Sie uns zusammenarbeiten",

        contactoTexto:
            "Benötigen Sie professionelle Luftaufnahmen für Ihr nächstes Projekt?",

        presupuesto: "Angebot anfordern",

        fecha: "Datum:",

        verProyecto: "Projekt ansehen",

        footer: "© 2026 PIXELAIR · Alle Rechte vorbehalten."

    }

};

/* ==========================================================
   PROYECTOS
========================================================== */

const proyectos = {
       1: {

        es: {
            titulo: "Proyecto 1 · Fotografía aérea",
            fecha: "03/06/2026",
            descripcion: "Sesión fotográfica aérea realizada para mostrar la amplitud del entorno y ofrecer una perspectiva diferente del paisaje. Las imágenes fueron editadas para conseguir una presentación limpia y de alta calidad."
        },

        en: {
            titulo: "Project 1 · Aerial Photography",
            fecha: "03/06/2026",
            descripcion: "Aerial photography session carried out to showcase the surroundings from a unique perspective. The images were professionally edited to achieve a clean and high-quality presentation."
        },

        de: {
            titulo: "Projekt 1 · Luftfotografie",
            fecha: "03/06/2026",
            descripcion: "Luftaufnahmen zur Darstellung der Umgebung aus einer neuen Perspektive. Die Bilder wurden professionell bearbeitet, um eine hochwertige Präsentation zu erzielen."
        }

    },

    2: {

        es: {
            titulo: "Proyecto 2 · Fotografía urbana",
            fecha: "28/03/2026",
            descripcion: "Reportaje fotográfico aéreo realizado para resaltar la integración de las zonas verdes con el entorno urbano. La composición muestra la amplitud del paisaje, la arquitectura y el equilibrio entre naturaleza y ciudad."
        },

        en: {
            titulo: "Project 2 · Urban Photography",
            fecha: "28/03/2026",
            descripcion: "Aerial photography focused on highlighting the integration of green areas within the urban environment. The composition showcases architecture, landscape and the balance between nature and the city."
        },

        de: {
            titulo: "Projekt 2 · Stadtfotografie",
            fecha: "28/03/2026",
            descripcion: "Luftaufnahmen, die das Zusammenspiel von Grünflächen und Stadtarchitektur hervorheben. Die Komposition zeigt Landschaft, Architektur und das Gleichgewicht zwischen Natur und Stadt."
        }

    },

    3: {

        es: {
            titulo: "Proyecto 3 · Fotografía turística",
            fecha: "15/02/2026",
            descripcion: "Sesión de fotografía aérea orientada a destacar el valor paisajístico del entorno. La composición busca resaltar la belleza natural de la costa y ofrecer una imagen atractiva para promoción turística y comercial."
        },

        en: {
            titulo: "Project 3 · Tourism Photography",
            fecha: "15/02/2026",
            descripcion: "Aerial photography focused on highlighting the natural beauty of the coastline, creating attractive visual content for tourism and commercial promotion."
        },

        de: {
            titulo: "Projekt 3 · Tourismusfotografie",
            fecha: "15/02/2026",
            descripcion: "Luftaufnahmen zur Hervorhebung der natürlichen Schönheit der Küste und zur Erstellung attraktiver Inhalte für Tourismus und Werbung."
        }

    },

    4: {

        es: {
            titulo: "Proyecto 4 · Inspección técnica",
            fecha: "12/07/2026",
            descripcion: "Reportaje fotográfico aéreo realizado para una inspección técnica destinada a comprobar ángulos, alineaciones y el estado general de la obra. Las imágenes permiten documentar el proyecto con precisión."
        },

        en: {
            titulo: "Project 4 · Technical Inspection",
            fecha: "12/07/2026",
            descripcion: "Aerial photography carried out for a technical inspection to verify alignments, angles and the overall condition of the construction project."
        },

        de: {
            titulo: "Projekt 4 · Technische Inspektion",
            fecha: "12/07/2026",
            descripcion: "Luftaufnahmen für eine technische Inspektion zur Überprüfung von Ausrichtung, Winkeln und dem allgemeinen Zustand des Bauprojekts."
        }

    },

    5: {

        es: {
            titulo: "Proyecto 5 · Villa de lujo",
            fecha: "08/04/2026",
            descripcion: "Fotografía aérea profesional destinada a destacar la arquitectura, los espacios exteriores y la amplitud de la propiedad. El resultado ofrece una imagen elegante pensada para promoción inmobiliaria."
        },

        en: {
            titulo: "Project 5 · Luxury Villa",
            fecha: "08/04/2026",
            descripcion: "Professional aerial photography highlighting the architecture, outdoor spaces and scale of the property to create elegant marketing material."
        },

        de: {
            titulo: "Projekt 5 · Luxusvilla",
            fecha: "08/04/2026",
            descripcion: "Professionelle Luftaufnahmen zur Hervorhebung der Architektur, Außenbereiche und Größe der Immobilie für hochwertige Immobilienpräsentationen."
        }

    },

    6: {

        es: {
            titulo: "Proyecto 6 · Vivienda unifamiliar",
            fecha: "17/01/2026",
            descripcion: "Reportaje fotográfico realizado con dron para mostrar la propiedad desde diferentes alturas y perspectivas, resaltando la distribución del terreno y el entorno que la rodea."
        },

        en: {
            titulo: "Project 6 · Detached House",
            fecha: "17/01/2026",
            descripcion: "Drone photography showcasing the property from multiple heights and perspectives, highlighting the land layout and surrounding environment."
        },

        de: {
            titulo: "Projekt 6 · Einfamilienhaus",
            fecha: "17/01/2026",
            descripcion: "Drohnenaufnahmen der Immobilie aus verschiedenen Höhen und Perspektiven, um Grundstück und Umgebung optimal darzustellen."
        }

    }

};
t
/* ==========================================================
   FUNCIONES
========================================================== */

function actualizarProyecto() {

    if (proyectoActual === null) return;

    const proyecto = proyectos[proyectoActual][idiomaActual];

    document.getElementById("modalTitle").textContent =
        proyecto.titulo;

    document.getElementById("modalDate").textContent =
        proyecto.fecha;

    document.getElementById("modalDescription").textContent =
        proyecto.descripcion;

    document.getElementById("modalFechaLabel").textContent =
        textos[idiomaActual].fecha;

}

function cambiarIdioma(idioma) {

    idiomaActual = idioma;

    /* Guardar idioma */

    localStorage.setItem("idioma", idioma);

    /* Menú */

    document.getElementById("navInicio").textContent =
        textos[idioma].inicio;

    document.getElementById("navSobre").textContent =
        textos[idioma].sobre;

    document.getElementById("navPortfolio").textContent =
        textos[idioma].portfolio;

    document.getElementById("navContacto").textContent =
        textos[idioma].contacto;

    /* Hero */

    document.getElementById("heroTitulo").textContent =
        textos[idioma].titulo;

    document.getElementById("heroTexto").textContent =
        textos[idioma].subtitulo;

    document.getElementById("heroBoton").textContent =
        textos[idioma].boton;

    /* Sobre nosotros */

    document.getElementById("aboutTitulo").textContent =
        textos[idioma].sobreTitulo;

    document.getElementById("aboutTexto").textContent =
        textos[idioma].sobreTexto;

    /* Portfolio */

    document.getElementById("portfolioTitulo").textContent =
        textos[idioma].proyectos;

    /* Botones "Ver proyecto" */

    document.querySelectorAll("[data-project-button]").forEach(btn => {

        btn.textContent = textos[idioma].verProyecto;

    });

    /* Contacto */

    document.getElementById("contactTitulo").textContent =
        textos[idioma].contactoTitulo;

    document.getElementById("contactTexto").textContent =
        textos[idioma].contactoTexto;

    document.getElementById("contactBoton").textContent =
        textos[idioma].presupuesto;

    /* Footer */

    document.getElementById("footerTexto").textContent =
        textos[idioma].footer;

    /* Si el modal está abierto, actualizarlo */

    actualizarProyecto();

}
v
/* ==========================================================
   MODAL PROYECTOS
========================================================== */

const modal = document.getElementById("projectModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalDescription = document.getElementById("modalDescription");

const closeModal = document.querySelector(".close-modal");

/* ================= ABRIR MODAL ================= */

document.querySelectorAll(".item").forEach(item => {

    item.addEventListener("click", () => {

        proyectoActual = item.dataset.id;

        modalImage.src = item.dataset.img;
        modalImage.alt = proyectos[proyectoActual][idiomaActual].titulo;

        actualizarProyecto();

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

/* ================= CERRAR MODAL ================= */

function cerrarModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "auto";

    proyectoActual = null;

}

closeModal.addEventListener("click", cerrarModal);

/* Cerrar pulsando fuera */

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        cerrarModal();

    }

});

/* Cerrar con Escape */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape" && modal.classList.contains("active")) {

        cerrarModal();

    }

});

/* ==========================================================
   INICIALIZACIÓN
========================================================== */

/* Cargar idioma guardado */

const idiomaGuardado = localStorage.getItem("idioma") || "es";

cambiarIdioma(idiomaGuardado);
