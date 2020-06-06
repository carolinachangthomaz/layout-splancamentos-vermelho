$(function() {

  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var contactForm = new Object;
      var nome = $("input#nome").val();
      var email = $("input#email").val();
      var telefone = $("input#telefone").val();
      var mensagem = $("textarea#message").val();
      var projeto = $("input#projeto").val();
      
      // Check for white space in name for Success/Fail message
      //if (firstName.indexOf(' ') >= 0) {
      //  firstName = name.split(' ').slice(0, -1).join(' ');
      //}
      contactForm.nome = nome;
      contactForm.email = email;
      contactForm.telefone = telefone;
      contactForm.mensagem = mensagem;
      contactForm.projeto = projeto;
      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      //url: "http://contatoService-env.eba-kgsvdmim.us-east-1.elasticbeanstalk.com/contato-service",
   // url: "http://localhost:8080/contato-service",
      $.ajax({
        url: "http://contatoService-env.eba-kgsvdmim.us-east-1.elasticbeanstalk.com/contato-service",
        type: 'POST',
        contentType : 'application/json; charset=utf-8',
        data: JSON.stringify(contactForm),
        cache: false,
        timeout: 600000,
        success: function(data) {
          console.log(data)
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-success')
            .append("<strong>Muito Obrigada! :) Mensagem enviada com Sucesso. </strong>");
          $('#success > .alert-success')
            .append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        error: function(e) {
          console.log(e.responseText);
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Desculpe " + nome + ", Ocorreu algum erro ao enviar sua mensagem."));
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        complete: function(data) {
          console.log(data)
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
