const projectsData = [
  {
    img: 'images/project-4-preview.png',
    demo: 'https://castaway-study.vercel.app/',
    code: 'https://github.com/FoxDek/Castaway-study',
    stack: 'Bootstrap, SCSS, JS'
  },
  {
    img: 'images/project-5-preview.png',
    demo: 'https://tt-tema-s-todos.vercel.app/',
    code: 'https://github.com/FoxDek/TT-tema-s-todos-',
    stack: 'HTML, SCSS, JS'
  },
  {
    img: 'images/project-6-preview.png',
    demo: 'https://video-in-text.vercel.app/',
    code: 'https://github.com/FoxDek/video-in-text',
    stack: 'Test CSS-task'
  },
  {
    img: 'images/project-7-preview.png',
    demo: 'https://noir-study.vercel.app/',
    code: 'https://github.com/FoxDek/noir-study',
    stack: 'HTML, CSS, JS (test task)'
  },
  {
    img: 'images/project-8-preview.png',
    demo: 'https://whirl-study.vercel.app/',
    code: 'https://github.com/FoxDek/whirl-study',
    stack: 'React (Vite), styled-components'
  },
  {
    img: 'images/project-9-preview.png',
    demo: 'https://wishbone-study.vercel.app/',
    code: 'https://github.com/FoxDek/wishbone-study',
    stack: 'Tailwind, TW-Motion'
  },
  {
    img: 'images/project-10-preview.png',
    demo: 'https://react-mini-projects-alpha.vercel.app/',
    code: 'https://github.com/FoxDek/react-mini-projects',
    stack: 'React (Vite), Tailwind, TW-Motion, CVA'
  },
  {
    img: 'images/project-11-preview.png',
    demo: 'https://hearthstay-production.vercel.app/',
    code: 'https://github.com/FoxDek/hearthstay-production',
    stack: 'HTML, CSS, JS (production)'
  },
  {
    img: 'images/project-12-preview.png',
    demo: 'https://kanban-react-study.vercel.app/',
    code: 'https://github.com/FoxDek/kanban-react-study',
    stack: 'React (Vite), styled-components'
  },
  {
    img: 'images/project-1-preview.png',
    demo: 'https://expoforum-study.vercel.app/',
    code: 'https://github.com/FoxDek/expoforum-study',
    stack: 'HTML, CSS, JS'
  },
  {
    img: 'images/project-2-preview.png',
    demo: 'https://f-and-b-study-rouge.vercel.app/',
    code: 'https://github.com/FoxDek/f-and-b-study',
    stack: 'HTML, CSS, JS (+Swiper.js)'
  },
  {
    img: 'images/project-3-preview.png',
    demo: 'https://simple-study-eta.vercel.app/',
    code: 'https://github.com/FoxDek/simple-study',
    stack: 'HTML, CSS, JS (+Swiper.js)'
  },
  // {
  //   img: 'images/project-5-preview.png',
  //   demo: '',
  //   code: '',
  //   stack: ''
  // },
];

const wrapper = document.querySelector('.projectsSwiper-wrapper');

projectsData.forEach(project => {
  const slide = document.createElement('div');
  slide.classList.add('swiper-slide');

  slide.innerHTML = `
    <div class="project-card">
      <div class="project-card__image-wrapper">
        <img src="${project.img}" class="project-card__img" />
        <div class="project-card__overlay">
          <span class="project-card__stack">${project.stack}</span>
        </div>
      </div>
      <div class="project-card__buttons">
        <a href="${project.demo}" class="button" target="_blank"><span class="button__text">Демо</span></a>
        <a href="${project.code}" class="button" target="_blank"><span class="button__text">Код</span></a>
      </div>
    </div>
  `;

  wrapper.appendChild(slide);
});

// ✅ Инициализация Swiper с grid
new Swiper('.projectsSwiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  slidesPerView: 1,
  grabCursor: true,
  grid: {
    rows: 2,
    fill: 'row',
  },
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    },
    1024: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
    },
  },
});



function updateText() {
  const skillsTitle = document.getElementById('skillsTitle');
  if (window.innerWidth > 768) {
    skillsTitle.textContent = 'Дополнительные навыки';
  } else {
    skillsTitle.textContent = 'Опыт'
  }
}

updateText()
window.addEventListener('resize', updateText);


// Скрипт для блока skills (меню со сменой текста и изображения)

const buttons = document.querySelectorAll('.radiobtn-block__button');

buttons.forEach(button => {
  button.addEventListener('click', function(event) {

    buttons.forEach(btn => {
      if (btn !== this) {
        btn.classList.remove("radiobtn-block__button--active");
      }
    });
    // Добавляем класс только к нажатой кнопке, если он еще не добавлен
    this.classList.add("radiobtn-block__button--active");

    if (event.target.id === 'content') {
      renderData('content');
    } else if (event.target.id === 'management') {
      renderData('management');
    } else if (event.target.id === 'design') {
      renderData('design');
    } else if (event.target.id === 'speaker') {
      renderData('speaker');
    }

})})

function renderData(blockId) {
  // document.getElementById('skillsImg').src = data[blockId].image;
  // skillsImageHTML = data[blockId].image.map
  skillsImageHTML = data[blockId].image;

  document.getElementById('photoBlock').innerHTML = skillsImageHTML;

  document.getElementById('skillsSubitle').textContent = data[blockId].title;
  document.getElementById('skillsText').innerHTML = data[blockId].description;
  const buttonsHTML = data[blockId].buttons.map(button => {
      return `
          <a href="${button.link}" class="button" target="_blank">
              <span class="button__text">${button.text}</span>
          </a>
      `;
  }).join(''); // Объединяем массив строк в одну строку

  document.getElementById('skillsButtons').innerHTML = buttonsHTML;
}

// document.addEventListener('DOMContentLoaded', () => {
//   renderData('content');
// });

const data = {
  content: {
    image: `<img id="skillsImg" src="images/skills-myphoto-1.png" alt="Skills photos" class="photo-block__img">`,
    title: "Создание контента",
    description: "Есть богатый опыт в создании контента для различных СМИ, медиаплатформ и социальных сетей.<br><br>Мои навыки включают создание текстов, новостных и мультимедийных материалов (в том числе подкастов, видеороликов), работу в прямом эфире.",
    buttons: [
      {
          text: "Публикации",
          link: "https://docs.google.com/document/d/1vXn8nLEUYs1dHJ1VDHtr8BRPOlq6yE31/edit?usp=drive_link&ouid=105516434251710796534&rtpof=true&sd=true",
      },
      {
          text: "Мой блог",
          link: "https://t.me/prolisaiezha",
      },
    ]
  },
  management: {
    image: `<img id="skillsImg" src="images/skills-myphoto-2.jpg" alt="Skills photos" class="photo-block__img">`,
    title: "Управление проектами",
    description: "В рамках учебных дисциплин разрабатывал личный проект и был лидером группового проекта.<br><br>Разработал идею стартапа «YOZH» и привёл команду к победе в 3 конкурсах грантов и других соревнованиях. Стал основателем компании ООО «ИТС».",
    buttons: [
      {
          text: "Стартап",
          link: "https://app.yozh.fun",
      }
    ]
  },
  design: {
    image: `<img id="skillsImg" src="images/skills-myphoto-3.png" alt="Skills photos" class="photo-block__img">`,
    title: "Работа с графикой",
    description: "Прошёл несколько курсов по дизайну и графике, имею практический опыт работы с Illustrator, Photoshop, InDesign, Figma, создания презентаций, а также нейросетями для генерации изображений.<br><br>Провёл ребрендинг одной из медиаструктур вуза, активно работал с вёрсткой бумажных материалов.",
    buttons: [
      {
          text: "Работы",
          link: "https://drive.google.com/drive/folders/1-38m2VxYn5LVjk0S10IFXenghpaATLcl?usp=drive_link",
      }
    ]
  },
  speaker: {
    image: `<img id="skillsImg" src="images/skills-myphoto-4.png" alt="Skills photos" class="photo-block__img">`,
    title: "Публичные выступления",
    description: "Выступил в роли спикера на +50 мероприятиях (презентации и защиты личного проекта, мастерклассы, самопрезентации) в разных городах страны.<br><br> Большой опыт общения со СМИ (интервью, репортажи, передача информации о проекте)",
    buttons: [
      {
          text: "Материалы со мной",
          link: "https://docs.google.com/document/d/1f9vpoEaMH3tTZOac3JzJizSu0lZFx5ozsLxKdTyOFkw/edit?usp=drive_link",
      }
    ]
  }
};


// Свайпер "Ещё обо мне"

var swiperBio = new Swiper(".bioplusSwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    grabCursor: true,    
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
});


const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
btnUp.addEventListener();

// ФОРМА

document.getElementById("feedbackForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // Предотвращаем отправку формы по умолчанию

  const botToken = "7693557054:AAGOp0u6ucLOsncok1vrmtU12f-Q8FL_bFg";
  const chatId = "689031526";
  const email = document.querySelector(".feedback-form-email");
  const sms = document.querySelector(".feedback-form-sms")
  const message = `Электронная почта: ${email.value.trim()}, сообщение: ${sms.value.trim()}`;

  if (!message) {
    alert("Введите сообщение!");
    return;
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    const data = await response.json();

    if (data.ok) {
      alert("Сообщение отправлено!");
      email.value = ""; // Очистить поле ввода
      sms.value = "";
    } else {
      alert("Ошибка при отправке сообщения!");
    }
  } catch (error) {
    console.error("Ошибка:", error);
    alert("Произошла ошибка при отправке!");
  }
});
