$(document).ready(function() {
    // $('body').hide().fadeIn();

    $('.abstract-button').click(function() {
      let id = $(this).attr('id')
      let abs = '#'+id.replace('p', 'abs');
      $(abs).toggle();
    })
});