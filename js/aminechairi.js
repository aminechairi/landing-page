// nav
let nav_display = {
  btn_muni: document.querySelectorAll(".logo .ctn .i")[0],
  muni: document.querySelectorAll(".nav-page .ctn > ul")[0],
}
nav_display.btn_muni.addEventListener("click", () => {
  nav_display.muni.classList.toggle("display");
})
let = mobility = {
  btns: [
    document.querySelectorAll(".nav-page .ctn ul")[0].children[0],
    document.querySelectorAll(".nav-page .ctn ul")[0].children[1],
    document.querySelectorAll(".nav-page .ctn ul")[0].children[2],
    document.querySelectorAll(".nav-page .ctn ul")[0].children[3],
    document.querySelectorAll(".nav-page .ctn ul")[0].children[4],
    document.querySelectorAll(".nav-page .ctn ul")[0].children[5],
    document.querySelectorAll(".nav-page .ctn ul")[0].children[6], 
  ],
  componants: [
    document.getElementById(`home`),
    document.getElementById(`about`),
    document.getElementById(`certificates`),
    document.getElementById(`services`),
    document.getElementById(`skills`),
    document.getElementById(`projects`),
    document.getElementById(`contact`),
  ],
}
for (let i = 0; i < mobility.btns.length; i++) {
  mobility.btns[i].addEventListener(`click`, () => {
    window.scrollTo({
      // top: mobility.componants[i].offsetTop - 50,
      top: window.innerWidth > 992 ? mobility.componants[i].offsetTop - 50 :  mobility.componants[i].offsetTop,      
      left: 0,
      behavior: "smooth"
    })
  })
}
// nav

// header
let header_animation = {
  elements: [
    document.querySelectorAll(".nav-page .ctn ul")[0].children[0],
    document.querySelectorAll(".nav-page .ctn ul")[0].children[1],
    document.querySelectorAll(".nav-page .ctn ul")[0].children[2],
    document.querySelectorAll(".nav-page .ctn ul")[0].children[3],
    document.querySelectorAll(".nav-page .ctn ul")[0].children[4],
    document.querySelectorAll(".nav-page .ctn ul")[0].children[5],
    document.querySelectorAll(".nav-page .ctn ul")[0].children[6],    
    document.querySelectorAll(".landing")[0],
    document.querySelectorAll(".landing .color .ctn")[0].children[0],
    document.querySelectorAll(".landing .color .ctn")[0].children[1],
    document.querySelectorAll(".landing .color .ctn")[0].children[2],
    document.querySelectorAll(".landing .color .ctn")[0].children[3],
  ],
}
function animationLoad(el) {
  let elements = el;
  let time = 0;
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.opacity = "0";
    elements[i].style.transition = "all 0.3s";
    elements[i].style.transform = "translateY(60px)";
  }
  window.addEventListener("load", () => {
      for (let i = 0; i < elements.length; i++) {
        setTimeout(() => {
          elements[i].style.opacity = "1";
          elements[i].style.transform = "translateY(0px)";
        }, time += 160);
      }
  })
}
animationLoad(header_animation.elements);
// header

// titles about
let titles_about = {
  elements: [
    document.querySelectorAll(".titles .ctn .border")[0].children[0],
    document.querySelectorAll(".titles .ctn .border")[0].children[1],
    document.querySelectorAll(".titles .ctn .names")[0].children[0],
    document.querySelectorAll(".titles .ctn .names")[0].children[1],
  ],
}
function animationScroll(el) {
  let elements = el;
  let time = 0;
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.opacity = "0";
    elements[i].style.transition = "all 0.3s";
    elements[i].style.transform = "translateY(60px)";
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY >= elements[0].offsetTop - 350) {
      for (let i = 0; i < elements.length; i++) {
        setTimeout(() => {
          elements[i].style.opacity = "1";
          elements[i].style.transform = "translateY(0px)";
        }, time += 160);
      }
    }
  })
}
animationScroll(titles_about.elements);
// titles about

// about
let animation_about = {
  elements: [
    document.querySelectorAll(".about-page .ctn .img")[0],
    document.querySelectorAll(".about-page .ctn .texts")[0].children[0],
    document.querySelectorAll(".about-page .ctn .texts")[0].children[1],
    document.querySelectorAll(".about-page .ctn .texts")[0].children[2],
    document.querySelectorAll(".about-page .ctn .texts")[0].children[3],
    document.querySelectorAll(".about-page .ctn .texts .download")[0],
    document.querySelectorAll(".about-page .ctn .texts .reso")[0].children[0],
    document.querySelectorAll(".about-page .ctn .texts .reso")[0].children[1],
    document.querySelectorAll(".about-page .ctn .texts .reso")[0].children[2],
    document.querySelectorAll(".about-page .ctn .texts .reso")[0].children[3],
    document.querySelectorAll(".about-page .ctn .texts .reso")[0].children[4],
  ],
}
animationScroll(animation_about.elements);
// about

// titles sertificates
let titles_sertificates = {
  elements: [
    document.querySelectorAll(".titles .ctn .border")[1].children[0],
    document.querySelectorAll(".titles .ctn .border")[1].children[1],
    document.querySelectorAll(".titles .ctn .names")[1].children[0],
    document.querySelectorAll(".titles .ctn .names")[1].children[1],
  ],
}
animationScroll(titles_sertificates.elements);
// titles sertificates

// sertificates
let animation_sertificates = {
  elements: [
    document.querySelectorAll(".certificates .ctn")[0].children[0],
    document.querySelectorAll(".certificates .ctn")[0].children[1],
    document.querySelectorAll(".certificates .ctn")[0].children[2],
  ],
}
animationScroll(animation_sertificates.elements);
// sertificates

// titles services
let titles_services = {
  elements: [
    document.querySelectorAll(".titles .ctn .border")[2].children[0],
    document.querySelectorAll(".titles .ctn .border")[2].children[1],
    document.querySelectorAll(".titles .ctn .names")[2].children[0],
    document.querySelectorAll(".titles .ctn .names")[2].children[1],
  ],
}
animationScroll(titles_services.elements);
// titles services

// services
let animation_services = {
  elements: [
    document.querySelectorAll(".services .ctn")[0].children[0],
    document.querySelectorAll(".services .ctn")[0].children[1],
    document.querySelectorAll(".services .ctn")[0].children[2],
  ],
}
animationScroll(animation_services.elements);
// services

// titles skills
let titles_skills = {
  elements: [
    document.querySelectorAll(".titles .ctn .border")[3].children[0],
    document.querySelectorAll(".titles .ctn .border")[3].children[1],
    document.querySelectorAll(".titles .ctn .names")[3].children[0],
    document.querySelectorAll(".titles .ctn .names")[3].children[1],
  ],
}
animationScroll(titles_skills.elements);
// titles skills

// skills
let animation_skills = {
  elements: [
    document.querySelectorAll(".skills .ctn .ab-skills .ab-images img")[0],
    document.querySelectorAll(".skills .ctn .ab-skills .ab-meter ")[0].children[0],
    document.querySelectorAll(".skills .ctn .ab-skills .ab-meter ")[0].children[1],
    document.querySelectorAll(".skills .ctn .ab-skills .ab-meter ")[0].children[2],
    document.querySelectorAll(".skills .ctn .ab-skills .ab-meter ")[0].children[3],
    document.querySelectorAll(".skills .ctn .ab-skills .ab-meter ")[0].children[4],
    document.querySelectorAll(".skills .ctn .ab-skills .ab-meter ")[0].children[5],
    document.querySelectorAll(".skills .ctn .ab-skills .ab-meter ")[0].children[6],
    document.querySelectorAll(".skills .ctn .ab-skills .ab-meter ")[0].children[7],    
  ],
  time: 0,
  values: [
    document.querySelectorAll(".skills .ctn .ab-skills .ab-meter ")[0].children[1].children[0],
    document.querySelectorAll(".skills .ctn .ab-skills .ab-meter ")[0].children[3].children[0],
    document.querySelectorAll(".skills .ctn .ab-skills .ab-meter ")[0].children[5].children[0],
    document.querySelectorAll(".skills .ctn .ab-skills .ab-meter ")[0].children[7].children[0],
  ],
}
for (let i = 0; i < animation_skills.elements.length; i++) {
  animation_skills.elements[i].style.opacity = "0";
  animation_skills.elements[i].style.transition = "all 0.3s";
  window.addEventListener("scroll", () => {
    if (window.scrollY >= animation_skills.elements[0].offsetTop - 350) {
      setTimeout(() => {
        animation_skills.elements[i].style.opacity = "1";
        animation_skills.values[i].style.width = animation_skills.values[i].dataset.wd;
      }, animation_skills.time += 160);
    }
  })
}
// skills

// titles sproject
let titles_project = {
  elements: [
    document.querySelectorAll(".titles .ctn .border")[4].children[0],
    document.querySelectorAll(".titles .ctn .border")[4].children[1],
    document.querySelectorAll(".titles .ctn .names")[4].children[0],
    document.querySelectorAll(".titles .ctn .names")[4].children[1],
  ],
}
animationScroll(titles_project.elements);
// titles project

// project
let animation_porject = {
  elements: [
    document.querySelectorAll(".project .ctn")[0].children[0],
    document.querySelectorAll(".project .ctn")[0].children[1],
    document.querySelectorAll(".project .ctn")[0].children[2],
    document.querySelectorAll(".project .ctn")[0].children[3],
    document.querySelectorAll(".project .ctn")[0].children[4],
    document.querySelectorAll(".project .ctn")[0].children[5],
  ],
};
animationScroll(animation_porject.elements);
// project

// titles contact
let titles_contact = {
  elements: [
    document.querySelectorAll(".titles .ctn .border")[5].children[0],
    document.querySelectorAll(".titles .ctn .border")[5].children[1],
    document.querySelectorAll(".titles .ctn .names")[5].children[0],
    document.querySelectorAll(".titles .ctn .names")[5].children[1],
  ],
}
animationScroll(titles_contact.elements);
// titles contact

// contact
let animation_contact = {
  elements: [document.querySelectorAll(".form-page .we-are-here")[0]],
}
animationScroll(animation_contact.elements);

let animation_form = {
  elements: [
    document.querySelectorAll(".form-page .form .ctn form")[0].children[0].children[0],
    document.querySelectorAll(".form-page .form .ctn form")[0].children[0].children[1],
    document.querySelectorAll(".form-page .form .ctn form")[0].children[1],
    document.querySelectorAll(".form-page .form .ctn form")[0].children[2],
    document.querySelectorAll(".form-page .form .ctn form")[0].children[3],
    document.querySelectorAll(".form-page .form .ctn .texts")[0].children[0],
    document.querySelectorAll(".form-page .form .ctn .texts")[0].children[1],
    document.querySelectorAll(".form-page .form .ctn .texts")[0].children[2],
    document.querySelectorAll(".form-page .form .ctn .texts")[0].children[3],
    document.querySelectorAll(".form-page .form .ctn .texts")[0].children[4],
    document.querySelectorAll(".form-page .form .ctn .texts")[0].children[5],
  ],
};
animationScroll(animation_form.elements);
// contact

// google map
let animation_google_map = {
  elements: [document.querySelectorAll(".google-map")[0]],
}
animationScroll(animation_google_map.elements);
// google map

// scroll top
let scroll_top = document.querySelectorAll(".scroll-top .ctn .i")[0];
  scroll_top.style.opacity = "0";
scroll_top.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})
window.addEventListener("scroll", () => {
  if (window.scrollY >= 500) {
    scroll_top.style.opacity = "1";
  } else {
    scroll_top.style.opacity = "0";    
  }
})
// scroll top