$(document).ready(function() {
    // $('body').hide().fadeIn();

    $('.abstract-button').click(function() {
      var id = $(this).attr('id')
      var abs = '#'+id.replace('p', 'abs');
      $(abs).toggle();
    })
});