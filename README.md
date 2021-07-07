# VxTel-Simulador
 Projeto de Integração do Front com Back-End

 ## Objetivo
 Desenvolver uma aplicação que integre as funcionalidades do front e back-end, cuja finalidade é a interação do usuário com um sistema de cálculo do valor das chamadas, considerando as chamadas e o plano escolhido. 

 ### Desafio
 A empresa de telefonia VxTel, especializada em chamadas de longa distância nacional, vai colocar um novo produto no mercado chamado FaleMais.

 Normalmente um cliente VxTel pode fazer uma chamada de uma cidade para a outra pagando uma tarifa fixa por minuto, com o preço sendo pré-definido em uma lista com os códigos DDDs de origem e destino:
   ____________________________
  | Origem | Destino |  $/min  |
  |  011   |   016   |   1.90  |
  |  016   |   011   |   2.90  |
  |  011   |   017   |   1.70  |
  |  017   |   011   |   2.70  |
  |  011   |   018   |   0.90  |
  |  018   |   011   |   1.90  |
  
 Com o novo produto FaleMais da VxTel o cliente adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos excedentes tem um acrescimo de 10% sobre a tarifa normal do minuto. Os planos são FaleMais30 (30 minutos), FaleMais60 (60 minutos) e FaleMais120 (120 minutos). 