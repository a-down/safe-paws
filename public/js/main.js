const mainLogo = $('.main-logo');
const hoverLogo = $('.alt-logo');
const homeLink = $('.homepage-link');

homeLink.on('mouseenter', () => {
  mainLogo.attr('style', 'display: none');
  hoverLogo.attr('style', 'display: inline');
}).on('mouseleave', () => {
  mainLogo.attr('style', 'display: inline');
  hoverLogo.attr('style', 'display: none');
})

