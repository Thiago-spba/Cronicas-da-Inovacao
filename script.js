new Vue({
  el: '#app',
  data: {
    titulo: 'Crônicas da Inovação',
    posts: [
      {
        id: 1,
        titulo: 'A Máquina Analítica de Babbage: O Primeiro Computador?',
        data: '2024-07-28',
        conteudo: 'Charles Babbage, um visionário do século XIX, concebeu a Máquina Analítica, um dispositivo mecânico que muitos consideram o precursor dos computadores modernos. Explore sua história e impacto na computação...',
        link: 'post1.html'
      },
      {
        id: 2,
        titulo: 'Alan Turing e a Enigma: A História da Criptografia na Segunda Guerra Mundial',
        data: '2024-07-25',
        conteudo: 'Alan Turing, um gênio da matemática e da computação, desempenhou um papel crucial na quebra do código Enigma da Alemanha nazista. Descubra como sua invenção, a máquina Bombe, mudou o curso da guerra...',
        link: 'post2.html'
      },
      {
        id: 3,
        titulo: 'A Corrida Espacial e o Legado Tecnológico da Guerra Fria',
        data: '2024-07-20',
        conteudo: 'A rivalidade entre Estados Unidos e União Soviética impulsionou avanços tecnológicos sem precedentes na corrida espacial. Conheça as inovações que surgiram desse período e como elas moldaram o mundo atual...',
        link: 'post3.html'
      }
    ]
  }
});
