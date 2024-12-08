/**
     * Ensure that the Swiper instance meets the necessary conditions for looping.
     */
function ensureLoopConditions(swiper, callback = () => {}) {
  const currentParams = swiper.params;
  const { slidesPerView, slidesPerGroup } = currentParams;
  const totalSlides = swiper.slides.length;

  const minSlides = slidesPerView + slidesPerGroup;

  if (totalSlides < minSlides || totalSlides % slidesPerGroup !== 0) {
    duplicateSlides(swiper, minSlides, slidesPerGroup, callback);
  }
}

/**
 * Duplicate slides in the Swiper instance to meet the minimum slide requirements.
 */
function duplicateSlides(swiper, minSlides, slidesPerGroup, callback = () => {}) {
  const totalSlides = swiper.slides.length;
  let slidesToAdd = minSlides - totalSlides;

  if (totalSlides % slidesPerGroup !== 0) {
    slidesToAdd += slidesPerGroup - (totalSlides % slidesPerGroup);
  }

  const fragment = document.createDocumentFragment();
  const slidesHTML = swiper.slides.map(slide => slide.outerHTML).join('');

  for (let i = 0; i < slidesToAdd; i++) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = slidesHTML;
    while (tempDiv.firstChild) {
      fragment.appendChild(tempDiv.firstChild);
    }
  }

  swiper.wrapperEl.appendChild(fragment);
  swiper.update();
  callback();
}

// Initialize Swiper
var swiper = new Swiper(".projectsSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    renderBullet: function (index, className) {
    // Limit the number of bullets to 3
    if (index < 3) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
    return ''; // Return empty string for additional bullets
  },
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    }
  },
  on: {
    init: swiper => {
      ensureLoopConditions(swiper);
    },
    resize: swiper => {
      ensureLoopConditions(swiper);
    },
  },
});

// Slide to the second slide on initialization
swiper.slideToLoop(1, 0);

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
