document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        distance: '60px',
        duration: 2500,
        delay: 400,
        reset: true
    })
    sr.reveal('.text', {delay:200, distance: '0px', scale: 0.9, origin: 'center'});
    sr.reveal('.form-container form', {delay:200, distance: '0px', scale: 0.9, origin:'center'});
    sr.reveal('.heading', {delay:10, origin:'top'});
    sr.reveal('.service-container .box', {delay:10, origin:'top'});
    sr.reveal('.products-container .box', {delay:10, origin:'top'});
    sr.reveal('.about-img', {delay:10, origin:'top'});
    sr.reveal('.about-text', {delay:10, origin:'top'});
    sr.reveal('.reviews-container', {delay:10 ,origin:'top'});
    sr.reveal('.newsletter .box', {delay:10 , distance: '0px', scale: 0.9, origin:'center'});
})