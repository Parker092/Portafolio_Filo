var seccionesPagina = new fullpage('#fullpage', {
    //  *** Opciones Basicas ***
    autoScrolling: true,
    fitToSection: false,
    fitToSectionDelay: 300,
    easing: 'easeInOutCubic',
    scrollingSpeed: 700,
    css3: true,
    easingcss3: 'ease-out',
    loopBottom: false,

    //  *** Barra de Navegacion ***
    navigation: true,
    menu: '#menu',
    anchors: ['inicio', 'presentacion1', 'presentacion2', 'presentacion3', 'presentacion4', 'contacto'],
    navigationTooltips: ['Inicio', 'Presentacion 1', 'Presentacion 2', 'Presentacion 3', 'Presentacion 4', 'Contacto'],
    showActiveTooltip: false,

    //  *** Secciones ***
    sectionsColor: ['#000', '#c2c2c2', '#c2c2c2', '#c2c2c2', '#c2c2c2', '#000'],
    verticalCentered: true,

    //  *** Slides ***
    controlArrows: true,
    slidesNavigation: false,
    afterLoad: function(origin, destination) {
        if (destination.anchor == 'contacto') {
            document.querySelector('.footer').querySelector('h2').style.opacity = 1;
        }
    }
});