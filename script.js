$(document).ready(function () {
    $("#input").on({
      keyup: () => {
        let maior = $("#input").val().toUpperCase();
        $("#input").val(maior)
      }
    })

    //#region Inserção de imagens diversas com base em um número aleatório 

    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    const images = [
      "AKINATOR-IMGs/defi.png",
      "AKINATOR-IMGs/serein.png",
      "AKINATOR-IMGs/inspiration_forte.png",
      "AKINATOR-IMGs/inspiration_legere.png",
      "AKINATOR-IMGs/vrai_decouragement_1.png",
      "AKINATOR-IMGs/concentration_intense_1.png",
      "AKINATOR-IMGs/mobile.png"
    ];


    
    //#endregion
    $('button').click(() => {

      const input = $('#input').val().toUpperCase()
      const pergunta = $('#texto');
      const randomIndex = getRandomNumber(0, images.length - 1);
      const selectedImage = images[randomIndex];
      const imgAkinator = $('.img-akinator').attr('src', selectedImage)
      const imgResultado = $('#imgResultado')

      //#region MAMÍFEROS
      if (pergunta.text() === "O animal é Mamífero?" && input === 'SIM') {
        pergunta.text('O animal é um Quadrúpede?')
        $("#input").val('');
      }
      else if (pergunta.text() === "O animal é um Quadrúpede?" && input === 'SIM') {
        pergunta.text('O animal é um Carnívoro?')
        $("#input").val('');
      }
      else if (pergunta.text() === "O animal é um Carnívoro?" && input === 'SIM') {
        imgAkinator.attr('src', "AKINATOR-IMGs/triomphe.png")
        pergunta.text('O animal é um LEÃO!')
        imgResultado.append('<img src="/AKINATOR-IMGs/Resultados/Leao.jpg" alt="Leão">');
        $('button').hide()
        $('input').hide()
        pergunta.css({
          fontSize: "30px"
        })
      }
      else if (pergunta.text() === "O animal é um Carnívoro?" && input === 'NÃO' || pergunta.text() === "O animal é um Carnívoro?" && input === 'NAO') {
        imgAkinator.attr('src', "AKINATOR-IMGs/triomphe.png")
        pergunta.text('O animal é um CAVALO')
        imgResultado.append('<img src="/AKINATOR-IMGs/Resultados/Cavalo.jpg" alt="Leão">');
        $('button').hide()
        $('input').hide()
        pergunta.css({
          fontSize: "30px"
        })
      }



      else if (pergunta.text() === "O animal é um Quadrúpede?" && input === 'NÃO' || pergunta.text() === "O animal é um Quadrúpede?" && input === 'NAO') {
        pergunta.text('O animal é um Bípede?')
        $("#input").val('');
      }
      else if (pergunta.text() === "O animal é um Bípede?" && input === 'SIM') {
        pergunta.text('O animal é um Onívoro?')
        $("#input").val('');

      }
      else if (pergunta.text() === "O animal é um Onívoro?" && input === 'SIM') {
        imgAkinator.attr('src', "AKINATOR-IMGs/triomphe.png")
        pergunta.text('O animal é um SER HUMANO')
        imgResultado.append('<img src="/AKINATOR-IMGs/Resultados/Humano.jpg" height="200" width="200" alt="Leão">');
        $('button').hide()
        $('input').hide()
        pergunta.css({
          fontSize: "30px"
        })
      }
      else if (pergunta.text() === "O animal é um Onívoro?" && input === 'NÃO' || pergunta.text() === "O animal é um Onívoro?" && input === 'NAO') {
        imgAkinator.attr('src', "AKINATOR-IMGs/triomphe.png")
        pergunta.text('O animal é um MACACO')
        imgResultado.append('<img src="/AKINATOR-IMGs/Resultados/Macaco.jpg" height="200" width="200" alt="Leão">');
        $('button').hide()
        $('input').hide()
        pergunta.css({
          fontSize: "30px"
        })
      }



      else if (input === 'NÃO' && pergunta.text() === "O animal é um Bípede?" || input === 'NAO' && pergunta.text() === "O animal é um Bípede?") {
        pergunta.text('O animal é Voador?')
        $("#input").val('');
      }
      else if (pergunta.text() === "O animal é Voador?" && input === "SIM") {
        imgAkinator.attr('src', "AKINATOR-IMGs/triomphe.png")
        pergunta.text('O animal é um MORCEGO')
        imgResultado.append('<img src="/AKINATOR-IMGs/Resultados/Morcego.jpg" height="200" width="200" alt="Leão">');
        $('button').hide()
        $('input').hide()
        pergunta.css({
          fontSize: "30px"
        })
      }

      else if (input === "NÃO" && pergunta.text() === "O animal é Voador?" || input === "NAO" && pergunta.text() === "O animal é Voador?") {
        imgAkinator.attr('src', "AKINATOR-IMGs/triomphe.png")
        pergunta.text('O animal é uma BALEIA')
        imgResultado.append('<img src="/AKINATOR-IMGs/Resultados/Baleia.jpg" height="200" width="200" alt="Leão">');
        $('button').hide()
        $('input').hide()
        pergunta.css({
          fontSize: "30px"
        })
      }
      //#endregion

      //#region AVES
      else if (pergunta.text() === "O animal é Mamífero?" && input === "NÃO" || pergunta.text() === "O animal é Mamífero?" && input === "NAO") {
        pergunta.text("O animal é uma Ave?")
        $("#input").val('');

      }

      else if (pergunta.text() === "O animal é uma Ave?" && input === "SIM") {
        pergunta.text("Essa ave voa?")
        $("#input").val('');
      }

      else if (pergunta.text() === "Essa ave voa?" && input === "NÃO" || pergunta.text() === "Essa ave voa?" && input === "NAO") {
        pergunta.text("Essa ave é Polar?")
        $("input").val('')
      }

      else if(pergunta.text() === "Essa ave é Polar?" && input === "SIM"){
        imgAkinator.attr('src', "AKINATOR-IMGs/triomphe.png")
        pergunta.text('O animal é um PINGUIM')
        imgResultado.append('<img src="/AKINATOR-IMGs/Resultados/Pinguim.jpg" height="200" width="200" alt="Leão">');
        $('button').hide()
        $('input').hide()
        pergunta.css({
          fontSize: "30px"
        })
      }

      else if(pergunta.text() === "Essa ave é Polar?" && input === "NÃO" || pergunta.text() === "Essa ave é Polar?" && input === "NAO"){
        imgAkinator.attr('src', "AKINATOR-IMGs/triomphe.png")
        pergunta.text('O animal é um AVESTRUZ')
        imgResultado.append('<img src="/AKINATOR-IMGs/Resultados/Avestruz.jpg" height="200" width="200" alt="Leão">');
        $('button').hide()
        $('input').hide()
        pergunta.css({
          fontSize: "30px"
        })
      }

      else if(pergunta.text() === "Essa ave voa?" && input === "SIM"){
        pergunta.text("Essa ave sabe nadar?")
        $('input').val('')
      }

      else if(pergunta.text() === "Essa ave sabe nadar?" && input === "SIM"){
        imgAkinator.attr('src', "AKINATOR-IMGs/triomphe.png")
        pergunta.text('O animal é um PATO')
        imgResultado.append('<img src="/AKINATOR-IMGs/Resultados/Pato.png" height="200" width="200" alt="Leão">');
        $('button').hide()
        $('input').hide()
        pergunta.css({
          fontSize: "30px"
        })
      }

      else if(pergunta.text() === "Essa ave sabe nadar?" && input === "NAO" ||pergunta.text() === "Essa ave sabe nadar?" && input === "NÃO"){
        imgAkinator.attr('src', "AKINATOR-IMGs/triomphe.png")
        pergunta.text('O animal é uma ÁGUIA')
        imgResultado.append('<img src="/AKINATOR-IMGs/Resultados/Aguia.jpg" height="200" width="200" alt="Leão">');
        $('button').hide()
        $('input').hide()
        pergunta.css({
          fontSize: "30px"
        })
      }

      //#endregion

      //#region RÉPTEIS
      else if(pergunta.text() === "O animal é uma Ave?" && input === "NAO" || pergunta.text() === "O animal é uma Ave?" && input === "NÃO"){
        pergunta.text('Esse réptil possui casco?')
        $('input').val('')
      }

      else if (pergunta.text() === "Esse réptil possui casco?" && input === "SIM"){
        imgAkinator.attr('src', "AKINATOR-IMGs/triomphe.png")
        pergunta.text('O animal é uma TARTARUGA')
        $('button').hide()
        imgResultado.append('<img src="/AKINATOR-IMGs/Resultados/Tartaruga.jpg" height="200" width="200" alt="Leão">');
        $('input').hide()
        pergunta.css({
          fontSize: "30px"
        })
      }


      else if(pergunta.text() === "Esse réptil possui casco?" && input === "NAO" || pergunta.text() === "Esse Réptil possui casco?" && input === "NÃO"){
        pergunta.text('Esse réptil possui patas?')
        $('input').val('')
      }

      else if (pergunta.text() === "Esse réptil possui patas?" && input === "SIM"){
        imgAkinator.attr('src', "AKINATOR-IMGs/triomphe.png")
        pergunta.text('O animal é um CROCODILO')
        imgResultado.append('<img src="/AKINATOR-IMGs/Resultados/Crocodilo.jpg" height="200" width="200" alt="Leão">');
        $('button').hide()
        $('input').hide()
        pergunta.css({
          fontSize: "30px"
        })
      }

      else if(pergunta.text() === "Esse réptil possui patas?" && input === "NAO" || pergunta.text() === "Esse réptil possui patas?" && input === "NÃO"){
        imgAkinator.attr('src', "AKINATOR-IMGs/triomphe.png")
        pergunta.text('O animal é uma COBRA')
        $('button').hide()
        imgResultado.append('<img src="/AKINATOR-IMGs/Resultados/Cobra.jpg" height="200" width="200" alt="Leão">');
        $('input').hide()
        pergunta.css({
          fontSize: "30px"
        })
      }
      //#endregion



    });
  })