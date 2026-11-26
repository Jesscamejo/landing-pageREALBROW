// Mide la palabra «TEMPORADA» y coloca el logo centrado sobre ella, al 88 % de su ancho
(() => {
  const ajustar = () => {
    const may = document.querySelector('.c-titulo .c-mayus'), logo = document.querySelector('.c-hero .c-logo');
    if (!may || !logo) return;
    const r = document.createRange(); r.selectNodeContents(may);
    const ancho = r.getBoundingClientRect().width;                 // ancho real de las letras
    const w = ancho * (innerWidth < 900 ? .66 : .88);   // en celular algo menor para que la reserva quede en la primera pantalla
    logo.style.setProperty('--logo-w', w.toFixed(1) + 'px');
    logo.style.setProperty('--logo-x', ((ancho - w) / 2).toFixed(1) + 'px');
  };
  document.fonts.ready.then(ajustar); addEventListener('resize', ajustar);
})();
