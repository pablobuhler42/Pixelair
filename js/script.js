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
        sobreTexto: "En Pixelair creemos que cada proyecto merece ser mostrado desde una perspectiva diferente. Creamos contenido visual con drones para inmobiliarias, hoteles, empresas, turismo, obras e inspecciones técnicas. Cada fotografía está pensada para transmitir calidad, amplitud y el verdadero valor de cada espacio.",

        proyectos: "Nuestros proyectos",

        contactoTitulo: "Trabajemos juntos",
        contactoTexto: "¿Necesitas fotografía o vídeo aéreo para tu próximo proyecto?",
        presupuesto: "Solicitar presupuesto",

        footer: "© 2026 PIXELAIR"
    },

    en: {
        inicio: "Home",
        sobre: "About",
        portfolio: "Portfolio",
        contacto: "Contact",

        titulo: "We capture places from a different perspective.",
        subtitulo: "Professional drone photography and video for real estate, tourism, businesses, technical inspections and unique projects.",
        boton: "View projects",

        sobreTitulo: "About Pixelair",
        sobreTexto: "At Pixelair we believe every project deserves to be shown from a different perspective. We create aerial visual content for real estate, hotels, businesses, tourism and technical inspections. Every image is designed to showcase quality and the true value of every property.",

        proyectos: "Our Projects",

        contactoTitulo: "Let's work together",
        contactoTexto: "Need drone photography or video for your next project?",
        presupuesto: "Request a quote",

        footer: "© 2026 PIXELAIR"
    },

    de: {
        inicio: "Start",
        sobre: "Über uns",
        portfolio: "Portfolio",
        contacto: "Kontakt",

        titulo: "Wir zeigen Orte aus einer neuen Perspektive.",
        subtitulo: "Professionelle Drohnenfotografie und Luftvideos für Immobilien, Tourismus, Unternehmen und technische Inspektionen.",
        boton: "Projekte ansehen",

        sobreTitulo: "Über Pixelair",
        sobreTexto: "Bei Pixelair sind wir überzeugt, dass jedes Projekt aus einer einzigartigen Perspektive gezeigt werden sollte. Wir erstellen hochwertige Luftaufnahmen für Immobilien, Hotels, Unternehmen, Tourismus und technische Inspektionen.",

        proyectos: "Unsere Projekte",

        contactoTitulo: "Lassen Sie uns zusammenarbeiten",
        contactoTexto: "Benötigen Sie Luftaufnahmen für Ihr nächstes Projekt?",
        presupuesto: "Angebot anfordern",

        footer: "© 2026 PIXELAIR"
    }
};

function cambiarIdioma(idioma){

    document.getElementById("navInicio").innerText = textos[idioma].inicio;
    document.getElementById("navSobre").innerText = textos[idioma].sobre;
    document.getElementById("navPortfolio").innerText = textos[idioma].portfolio;
    document.getElementById("navContacto").innerText = textos[idioma].contacto;

    document.getElementById("heroTitulo").innerText = textos[idioma].titulo;
    document.getElementById("heroTexto").innerText = textos[idioma].subtitulo;
    document.getElementById("heroBoton").innerText = textos[idioma].boton;

    document.getElementById("aboutTitulo").innerText = textos[idioma].sobreTitulo;
    document.getElementById("aboutTexto").innerText = textos[idioma].sobreTexto;

    document.getElementById("portfolioTitulo").innerText = textos[idioma].proyectos;

    document.getElementById("contactTitulo").innerText = textos[idioma].contactoTitulo;
    document.getElementById("contactTexto").innerText = textos[idioma].contactoTexto;
    document.getElementById("contactBoton").innerText = textos[idioma].presupuesto;

    document.getElementById("footerTexto").innerText = textos[idioma].footer;
}
/* ================= MODAL PROYECTOS ================= */

const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalDescription = document.getElementById("modalDescription");

const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".item").forEach(item => {

    item.addEventListener("click", () => {

        modalImage.src = item.dataset.img;
        modalTitle.textContent = item.dataset.title;
        modalDate.textContent = item.dataset.date;
        modalDescription.textContent = item.dataset.description;

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

    document.body.style.overflow = "auto";

});

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        modal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});
