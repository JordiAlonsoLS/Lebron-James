/*Barra de navegacion*/

const navToggle = document.querySelector(".bars");
const navMenu = document.querySelector(".content-0");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("flex-grow-active");
});

/* 
// const trayectoria = document.querySelector(".trayectoria");
const navigators = document.querySelector(".navigators").childNodes;

navigators.forEach((element) => {
  element.addEventListener("click", changeSection);
});

// const container = document.querySelector(".container_");

// trayectoria.addEventListener("click", changeSection);

function changeSection(e) {
  e.preventDefault();

  container.innerHTML = `
  <figure class="figure-trayectoria">
    <img class="mx-20 mt-40 mb-20" src="/public/img/lebron-rookie.png" alt="lebron-james">
  </figure>
    <div class="m-auto trayectoria-content py-5">
      <h2 class="text-center text-4xl border-b-2 border-b-yellow-500 pt-4 pb-2">Trayectoria</h2>
        <div>
          <img class="image-trayectoria" src="/public/img/Cleveland-Cavaliers-logo.svg.png" alt="lebron-james">
          <h2>Cleveland Cavaliers</h2>
          <h3 class="border-b-2 border-b-yellow-500 ">2003-2010 y 2014 - 2018</h3>
        </div>
        <div> 
          <img class="image-trayectoria w-40" src="/public/img/Miami-Heat-logo.svg.png" alt="lebron-james">
          <h2>Miami Heat</h2>
          <h3 class="border-b-2 border-b-yellow-500 ">2010 - 2014</h3>
        </div>
        <div> 
          <img class="image-trayectoria w-40" src="/public/img/Lakers-logo.svg.png" alt="lebron-james">
          <h2>Lakers</h2>
          <h3 class="">2018 - Hasta la actualidad</h3>
        </div>
    </div>
  `;
}

/*Logros*/
