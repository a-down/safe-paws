const blackPaw = $('.black-paw');
const whitePaw = $('.white-paw');
const homeLink = $('.homepage-link');

homeLink.on('mouseenter', () => {
  blackPaw.attr('style', 'display: none');
  whitePaw.attr('style', 'display: inline');
}).on('mouseleave', () => {
  blackPaw.attr('style', 'display: inline');
  whitePaw.attr('style', 'display: none');
})
