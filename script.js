

const larguraDaTela = window.innerWidth

if (larguraDaTela < 800) {
  var swiper3 = new Swiper(".mySwiper2", {
      slidesPerView: 2,
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 1500, // tempo em milissegundos entre os slides
        disableOnInteraction: true, // continua autoplay mesmo com interação do usuário
      },
    });
} else {
  var swiper3 = new Swiper(".mySwiper2", {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
}

  const modal = document.getElementById("modal");
  const overlay = document.getElementById("modalOverlay");
  const closeBtn = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");

  const modalData = [
    {
      title: "Filipe Maciel",
      text: "Filipe Maciel é administrador de empresas com pós-graduação em marketing e mais de 28 anos de experiência no setor de seguros, especializado em benefícios corporativos. Trabalhou em grandes corretoras e consultorias, gerenciando programas de benefícios para grandes empresas. Com forte expertise em relacionamento, visa atender de forma personalizada às necessidades de clientes e colaboradores, focando na gestão de benefícios para promover bem-estar e resultados organizacionais."
    },
    {
      title: "João Bueno",
      text: "Mais de 20 anos de experiência no setor de seguros. Foi sócio sênior da McKinsey & Co e liderou a prática de Seguros na América Latina por 10 anos. Liderou o relacionamento com CEOs de seguradoras em toda a região, atuando em todas as linhas de negócios (Vida, não Vida, Saúde e Resseguro) e em vários tópicos diferentes (Estratégia, Transformações, Crescimento, Distribuição, Digital/Tecnologia e Operações)."
    },
    {
      title: "Lucas Calicchio",
      text: "Lucas Calicchio é formado em Economia pelo Insper e possui ampla experiência na área comercial, prospecção e relacionamento com clientes. Atuou ativamente na captação de novas parcerias e clientes na startup Agora Consulta, desenvolvendo e mantendo relações comerciais. Na G5 Partners e BTG Pactual, desempenhou o papel na assessoria de investimento, construindo e preservando relacionamentos sólidos com clientes."
    },
    {
      title: "Gabriel de Lima",
      text: "Formado em Administração de Empresas, atua no mercado há mais de 15 anos no setor de seguros e benefícios, com passagem por grandes empresas, tanto seguradoras, quanto Corretoras Nacionais e Multinacionais. Possui experiência em diversas áreas dentro do mercado segurador e realiza um trabalho com foco comercial e estratégico."
    }
  ];

  document.querySelectorAll(".card ion-icon").forEach((icon, index) => {
    icon.addEventListener("click", () => {
      modalTitle.textContent = modalData[index].title;
      modalText.textContent = modalData[index].text;
      modal.classList.add("active");
      overlay.classList.add("active");
    });
  });

  const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  };

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);


