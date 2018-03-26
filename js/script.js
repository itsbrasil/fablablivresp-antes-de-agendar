var current_machine = "laser"

$(document).ready(function(){
	$("#" + current_machine).addClass("selected");
  $("#machineText").html(machinetexts[current_machine]);
});

$(document).on('click', '.machineButton', function(e) {
  var new_machine = $(this).attr("id");

  if (new_machine != current_machine) {
    $("#" + current_machine).removeClass("selected");
    current_machine = new_machine;
    $("#" + current_machine).addClass("selected");
  }

  $("#machineText").html(machinetexts[current_machine]);

});

var machinetexts = {
  "laser" : "- O arquivo para corte precisa estar no formato SVG ou DXF.<br>- O tamanho da área de corte da máquina é de 90x60cm nos laboratórios grandes [Olido, Tiradentes, Heliópolis, Jóckey] e de 100x80cm nos laboratórios pequenos [os outros oito da rede].<br>- Traga o seu próprio material [com sobra para testes e correção de eventuais erros].<br>- Corte em preto, gravação em azul e gravações adicionais em vermelho e verde.<br>- É obrigatório acompanhar a fabricação do seu projeto.<br>- Após o uso, deixe a máquina desligada, limpa e o local organizado.<br><br><span class='bold'>IMPORTANTE:</span> Caso nunca tenha utilizado a máquina de corte a laser e precise de orientações, oferecemos cursos gratuitos na área. Acesse nosso site para se inscrever: <a href='http://fablablivresp.art.br/cursos' target='_blank'>http://fablablivresp.art.br/cursos</a>.",
  "3dprinter" : "- O arquivo para impressão precisa estar no formato STL.<br>- O tamanho máximo da área de impressão é de 20cm de largura, altura e profundidade.<br>- É necessário trazer o seu próprio filamento (PLA ou ABS - 1,75mm), sendo gratuita a hora de máquina.<br>- É obrigatório acompanhar a fabricação do seu projeto.<br>- Após o uso, deixe a máquina desligada, limpa e o local organizado.<br>- A impressão não pode exceder o horário de funcionamento do laboratório.<br><br><span class='bold'>IMPORTANTE:</span> Caso nunca tenha utilizado a impressora 3D e precise de orientações, oferecemos cursos gratuitos na área. Acesse nosso site para se inscrever: <a href='http://fablablivresp.art.br/cursos' target='_blank'>http://fablablivresp.art.br/cursos<a>.",
  "cncrouter" : "- O arquivo precisa estar no formato SVG, DXF [2D] ou STL [3D].<br>- O tamanho da área de corte da fresadora pequena é de 30x30cm e a da fresadora grande é de 120x240cm [disponível apenas nos laboratórios Olido, Tiradentes, Heliópolis e Jóckey].<br>- Traga o seu próprio material [com sobra para testes e correção de eventuais erros].<br>- É obrigatório acompanhar a fabricação do seu projeto, além de obrigatória a presença de um técnico.<br>- É obrigatório o uso de EPI [fornecido pelo próprio laboratório].<br>- Após o uso, deixe a máquina desligada, limpa e o local organizado.<br>- Para o uso dessa máquina é obrigatório o agendamento por e-mail, não estando sujeita à dinâmica de \"ordem de chegada\" [mesmo nos dias previstos para isso].<br><br><span class='bold'>IMPORTANTE¹:</span> Caso nunca tenha utilizado a fresadora cnc e precise de orientações, oferecemos cursos gratuitos na área. Acesse nosso site para se inscrever: <a href='http://fablablivresp.art.br/cursos' target='_blank'>http://fablablivresp.art.br/cursos</a>.<br><br><span class='bold'>IMPORTANTE²:</span> É necessária a utilização de roupas adequadas, sendo proibido o uso de chinelo, bermuda, colares, pulseiras, brincos, chapéu/boné e roupas largas durante a utilização da máquina.",
  "carpentry" : "- É necessário trazer o seu próprio material.<br>- É obrigatório o uso de EPI (fornecido pelo próprio laboratório).<br>- Após o uso, deixe a máquina desligada, limpa e o local organizado.<br><br><span class='bold'>IMPORTANTE¹:</span> Caso nunca tenha utilizado ferramentas de marcenaria e precise de orientações, oferecemos cursos gratuitos na área. Acesse nosso site para se inscrever: <a href='http://fablablivresp.art.br/cursos' target='_blank'>http://fablablivresp.art.br/cursos</a>.<br><br><span class='bold'>IMPORTANTE²:</span> É necessária a utilização de roupas adequadas, sendo proibido o uso de chinelo, bermuda, colares, pulseiras, brincos, chapéu/boné e roupas largas durante a utilização das máquinas."
}
