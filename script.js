function toggleMenu()
{
    var menuToggle = document.querySelector('.toggle')
    var navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}   

window.sr = ScrollReveal({ reset: true,
    duration: 1000,
    delay: 250
});

sr.reveal('.qmsom',{ origin: 'left' });

sr.reveal('.apresent1');
sr.reveal('.apresent2',{delay: 500});
sr.reveal('.apresent3');

sr.reveal('.socialMedia',{ origin: 'left'});

sr.reveal('.header1',{ origin: 'left'});

sr.reveal('.p1',{ origin: 'bottom'});

sr.reveal('.imgn1',{ origin: 'right'});


sr.reveal('.pjr1',{ origin: 'top', delay: 100});
sr.reveal('.pjr2',{ origin: 'top', delay: 250});
sr.reveal('.pjr3',{ origin: 'top', delay: 350});
sr.reveal('.pjr4',{ origin: 'top', delay: 450});
sr.reveal('.pjr5',{ origin: 'top', delay: 550});
sr.reveal('.pjr6',{ origin: 'top', delay: 650});

sr.reveal('.habils',{ origin: 'right', delay: 650});

sr.reveal('.sk1',{ origin: 'right', delay: 100});
sr.reveal('.sk2',{ origin: 'right', delay: 300});
sr.reveal('.sk3',{ origin: 'right', delay: 500});
sr.reveal('.sk4',{ origin: 'right', delay: 700});

sr.reveal('.final',{ origin: 'top', delay: 650});

sr.reveal('.scm1',{ origin: 'bottom'});
sr.reveal('.scm2',{ origin: 'bottom'});
sr.reveal('.scm3',{ origin: 'bottom'});
sr.reveal('.scm4',{ origin: 'bottom'});
sr.reveal('.scm5',{ origin: 'bottom'});
sr.reveal('.scm6',{ origin: 'bottom'});
