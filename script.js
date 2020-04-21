

anime({
    targets: '.Things',
    translateX: '100%',
    direction: 'alternate',
    delay: anime.stagger(100),
    rotate: anime.stagger([-360, 360]),
    loop: true

});

var rellax = new Rellax('.boxs');