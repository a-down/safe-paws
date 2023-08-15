const mainPaw = $('.main-paw');
const hoverPaw = $('.alt-paw');
const homeLink = $('.homepage-link');

homeLink.on('mouseenter', () => {
  mainPaw.attr('style', 'display: none');
  hoverPaw.attr('style', 'display: inline');
}).on('mouseleave', () => {
  mainPaw.attr('style', 'display: inline');
  hoverPaw.attr('style', 'display: none');
})
