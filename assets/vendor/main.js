var mybutton = document.getElementById("myBtn");

var typed = new Typed('.auto-type', {
   strings: ['Data Analytics', 'Software Development'],
   typeSpeed: 140,
   backSpeed: 140 * 0.66,
   backDelay: 4000,
   loop: true
})

setTimeout(function () {
   chat_app();
}, 2000);


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
   scrollFunction()
};

function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
   } else {
      mybutton.style.display = "none";

   }
}

function chat_app() {
   window.$crisp = [];
   window.CRISP_WEBSITE_ID = "e0d69996-4918-43b4-ac6d-bc7604bfab3c";
   (function () {
      d = document;
      s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
   })();
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}

function home_go() {
   document.getElementById("home").scrollIntoView();
}

function about_go() {
   document.getElementById("about").scrollIntoView();
}

function project_go() {
   document.getElementById("portfolio").scrollIntoView();
}



data1 = '<h3 class="textHitam2 fs-4 mb-3 h2">Hello!,</h3><p class="text-muted about-ket h6" style=" font-weight: 450 !important; line-height: 1.8 !important; ">My name is Ryas Putra. I&#39;m studying at a university in Indonesia. I am personally passionate about data analysis sets such as machine learning, exploratory data analysis, data manipulation, and data visualization. Not only that, I have development experience, especially in Python, Flutter, and PHP. I have experience building Android apps and websites. For more information, you can open one of the following links:</p>';
$('#aboutabout').html(data1);

data1 = '<svg id="wave" class="wave1-web" viewBox="0 0 1440 140" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop><stop stop-color="rgba(200.784, 200.784, 200.784, 1)" offset="100%"></stop></linearGradient></defs><path class="modal-control-2 wave2-web" fill="url(#sw-gradient-0)"d="M0,56L30,63C60,70,120,84,180,93.3C240,103,300,107,360,102.7C420,98,480,84,540,81.7C600,79,660,89,720,84C780,79,840,61,900,58.3C960,56,1020,70,1080,81.7C1140,93,1200,103,1260,100.3C1320,98,1380,84,1440,86.3C1500,89,1560,107,1620,114.3C1680,121,1740,117,1800,114.3C1860,112,1920,112,1980,112C2040,112,2100,112,2160,114.3C2220,117,2280,121,2340,109.7C2400,98,2460,70,2520,51.3C2580,33,2640,23,2700,23.3C2760,23,2820,33,2880,32.7C2940,33,3000,23,3060,18.7C3120,14,3180,14,3240,25.7C3300,37,3360,61,3420,79.3C3480,98,3540,112,3600,107.3C3660,103,3720,79,3780,67.7C3840,56,3900,56,3960,46.7C4020,37,4080,19,4140,11.7C4200,5,4260,9,4290,11.7L4320,14L4320,140L4290,140C4260,140,4200,140,4140,140C4080,140,4020,140,3960,140C3900,140,3840,140,3780,140C3720,140,3660,140,3600,140C3540,140,3480,140,3420,140C3360,140,3300,140,3240,140C3180,140,3120,140,3060,140C3000,140,2940,140,2880,140C2820,140,2760,140,2700,140C2640,140,2580,140,2520,140C2460,140,2400,140,2340,140C2280,140,2220,140,2160,140C2100,140,2040,140,1980,140C1920,140,1860,140,1800,140C1740,140,1680,140,1620,140C1560,140,1500,140,1440,140C1380,140,1320,140,1260,140C1200,140,1140,140,1080,140C1020,140,960,140,900,140C840,140,780,140,720,140C660,140,600,140,540,140C480,140,420,140,360,140C300,140,240,140,180,140C120,140,60,140,30,140L0,140Z"></path></svg>';
$('#wavewave').html(data1);

data1 = '<div class=" container-lg"><div class="row"><div class="col-lg-12"><p class="m-0 text-center text-muted font-unik">Ryas Putra</p></div></div></div>';
$('#footerfooter').html(data1);
/*=============== LOAD DATA FROM CSV ===============*/

$(document).ready(function () {
   $.ajax({
      url: "assets/csv/pendidikan_formal.csv",
      dataType: "text",
      success: function (data) {
         var employee_data = data.split(/\r?\n|\r/);
         var table_data = '';

         for (var count = 0; count < employee_data.length; count++) {
            var cell_data = employee_data[count].split(",");
            if (count === 0) {} else {
               table_data += '<span class="dot"></span>';
               table_data += '<div class="custom_pendidikan"> <div class="subject-class">';
               table_data += '<p class="text-muted mb-1"><i class="bi bi-bookmark-star"></i>&nbsp;' + cell_data[0] + '</p>';
               table_data += '<h6 class="text-danger fw-bold m-p-pendidikan">' + cell_data[1] + '</h6> </div> </div>';
            }
         }
         table_data += '';
         $('#pend_formal_table').html(table_data);
      }
   });
});

var skillFD = false;
if (skillFD) {
   $(document).ready(function () {
      $.ajax({
         url: "assets/csv/skillFD.csv",
         dataType: "text",
         success: function (data) {
            var employee_data = data.split(/\r?\n|\r/);
            var table_data = '<div class="col-md-6 col-lg-6 mb-6">';
            var banyk = 1 + Math.ceil(employee_data.length / 2); //INI DIUBAH UBAH 

            for (var count = 0; count < employee_data.length; count++) {
               var cell_data = employee_data[count].split(",");
               if (count === 0) {} else {
                  if (count === banyk) {
                     table_data += '</div><div class="col-md-6 col-lg-6 mb-6">';
                  }
                  table_data += '<div class="Isi"><h4 class="fs-5 "><i class="text-danger fs-5 bi bi-patch-check-fill"></i> ' + cell_data[0] + '</h4>';
                  table_data += '<h6 class="text-muted rem875"> ' + cell_data[1] + ' </h6></div>';
               }
            }
            table_data += '</div>';
            $('#skills_tabel').html(table_data);
         }
      });
   });
}

$(document).ready(function () {
   $.ajax({
      url: "assets/csv/skillBD.csv",
      dataType: "text",
      success: function (data) {
         var employee_data = data.split(/\r?\n|\r/);
         var table_data = '<div class="col-md-6 col-lg-6 mb-6">';
         var banyk = 1 + Math.ceil(employee_data.length / 2); //INI DIUBAH UBAH 

         for (var count = 0; count < employee_data.length; count++) {
            var cell_data = employee_data[count].split(",");
            if (count === 0) {} else {
               if (count === banyk) {
                  table_data += '</div><div class="col-md-6 col-lg-6 mb-6">';
               }
               table_data += '<div class="Isi"><h4 class="fs-5 "><i class="text-danger fs-5 bi bi-patch-check-fill"></i> ' + cell_data[0] + '</h4>';
               table_data += '<h6 class="text-muted rem875"> ' + cell_data[1] + ' </h6></div>';
            }
         }
         table_data += '</div>';
         $('#skills_tabel2').html(table_data);
      }
   });
});

function tampil(ubah) {
   $(document).ready(function () {
      $.ajax({
         url: "assets/csv/last_work.csv",
         dataType: "text",
         success: function (data) {
            var employee_data = data.split(/\r?\n|\r/);
            var table_data = '';
            var table_data2 = '';

            if (window.innerWidth <= 767) {
               var batas = ubah * 3;
               var awal = batas - 2;
            } else {
               var batas = ubah * 6;
               var awal = batas - 5;
            }

            var kutip = "'";

            table_data += '<div class="Karya row">';
            for (var count = awal; count <= batas; count++) {
               var cell_data = employee_data[count].split(",");
               if (typeof cell_data[0] !== 'undefined') {
                  table_data += '<div class="col-md-6 col-lg-4"> <div class="shadow project-card-no-image"> <h3 class="mt-4 text-capitalize judul-last-work">' + cell_data[1] + '</h3>'
                  table_data += '<h4 class="last-work-text-m font-monospace text-muted text-lowercase">' + cell_data[3] + '</h4> <div class="tags">'
                  table_data += '<a href="#projects" class="project-tipe">' + cell_data[2] + '</a> </div> <p>'
                  table_data += '<button onclick="getNameModal(' + kutip + 'staticBackdrop' + cell_data[0] + kutip + ')" type="button" class="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop' + cell_data[0] + '"'
                  if (cell_data[1] == '...') {
                     table_data += 'disabled'
                  }
                  table_data += '> View Project</button> </p> </div>'
                  table_data2 += '<div class="modal fade" id="staticBackdrop' + cell_data[0] + '" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">'
                  table_data2 += '<div class="modal-dialog modal-xl modal-dialog-centered"> <div class="modal-content"> <div class="modal-header">'
                  table_data2 += '<h5 class="text-dark modal-title text-uppercase" id="staticBackdropLabel">' + cell_data[1] + ''
                  if (cell_data[5] != 'secret') {
                     table_data2 += '<a class="text-danger" href="' + cell_data[5] + '" style=" font-size: 11px !important;" target="_blank">&ensp;View <i class="bi bi-box-arrow-up-right"></i></a>'
                  }
                  table_data2 += '</h5><button onclick="modal_view_close();"  type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> </div> <div class="modal-body" style=" text-align: center; ">'
                  if (cell_data[4] != '#') {
                     if (cell_data[2] == 'Flutter') {
                        table_data2 += '<img style=" width: auto !important ; " class="pic-modal" src="assets/img.index/' + cell_data[4] + '"'
                     } else {
                        table_data2 += '<img class="pic-modal" src="assets/img.index/' + cell_data[4] + '"'
                     }
                  }
                  table_data2 += 'alt="work"> </div> <div class="modal-footer"><h4 class="text-center font-monospace text-muted sentece-case">' + cell_data[3] + '</h4>'
                  table_data2 += '<h4 class="text-center font-monospace text-uppercase text-danger h6 mb-3 tipe_9">[ ' + cell_data[2] + ' ]</h4>'
                  table_data2 += '</div></div></div></div>'
                  table_data += '</div>'
               }
            }
            table_data += '</div>';
            table_data += '';
            document.getElementById("work_formal_table").innerHTML = table_data;
            document.getElementById("modalInti").innerHTML = table_data2;
            // $('#work_formal_table').html(table_data);
         }
      });
   });
}



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
   const scrollY = window.pageYOffset

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
         sectionTop = current.offsetTop - 50,
         sectionId = current.getAttribute('id')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document.getElementById(sectionId + '-1').classList.add('active-link')
      } else {
         document.getElementById(sectionId + '-1').classList.remove('active-link')
      }
   })
}
window.addEventListener('scroll', scrollActive)




/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
   const header = document.getElementById('header')
   // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
   if (this.scrollY >= 80) header.classList.add('scroll-header');
   else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)





/*=============== ENABLE TOOLTIPS EVERYWHERE ===============*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
   return new bootstrap.Tooltip(tooltipTriggerEl)
})




/*=============== UBAH THEMA WEBSITE ===============*/
if (localStorage.getItem('preferredTheme') == 'dark') {
   setDarkMode(true)
}

function setDarkMode(isDark) {
   const
      Moon = document.querySelector('.bi-cloud-moon'),
      Sun = document.querySelector('.bi-cloud-sun'),
      Badan = document.querySelector('.Badan'),
      navbar = document.querySelector('.navbar'),
      github = document.querySelector('.github'),
      mail = document.querySelector('.mail'),
      text1 = document.querySelector('.textHitam1'),
      text2 = document.querySelector('.textHitam2'),
      // text3 = document.querySelector('.textHitam3'),
      // text4 = document.querySelector('.textHitam4'),
      text5 = document.querySelector('.textHitam5'),
      text6 = document.querySelector('.textHitam6'),
      text10 = document.querySelector('.textHitam10'),
      text11 = document.querySelector('.textHitam11'),
      text15 = document.querySelector('.textHitam15'),
      // text16 = document.querySelector('.textHitam16'),
      text17 = document.querySelector('.textHitam17'),
      footer = document.querySelector('.footer');

   var element1 = document.getElementById("p1");
   var element2 = document.getElementById("p2");
   var element3 = document.getElementById("p3");



   if (isDark) {
      localStorage.setItem('preferredTheme', 'dark');
      Moon.classList.toggle("d-none");
      Sun.classList.toggle("d-none");
      Badan.classList.toggle("bg-light");
      Badan.classList.toggle("bg-dark");
      navbar.classList.toggle("navbar-light");
      navbar.classList.toggle("navbar-dark");
      navbar.classList.toggle("bg-light");
      navbar.classList.toggle("bg-dark");
      github.classList.toggle("text-white");
      github.classList.toggle("text-dark");
      mail.classList.toggle("text-white");
      mail.classList.toggle("text-dark");
      text1.classList.toggle("text-white");
      text2.classList.toggle("text-white");
      // text3.classList.toggle("text-white");
      // text4.classList.toggle("bg-white");
      text5.classList.toggle("bg-white");
      // text4.classList.toggle("shadow-sm");
      text5.classList.toggle("shadow-sm");
      text6.classList.toggle("text-white");
      // text4.classList.toggle("shadow");
      text5.classList.toggle("shadow");
      text10.classList.toggle("text-white");
      text11.classList.toggle("text-white");
      text15.classList.toggle("text-white");
      // text16.classList.toggle("text-white");
      text17.classList.toggle("text-white");
      footer.classList.toggle("border-danger");

      element1.classList.add("span");
      element2.classList.add("span");
      element3.classList.add("span");

      document.getElementById("t1").style.outline = "3px solid var(--color2)";

   } else {
      localStorage.removeItem('preferredTheme');
      Moon.classList.toggle("d-none");
      Sun.classList.toggle("d-none");
      Badan.classList.toggle("bg-light");
      Badan.classList.toggle("bg-dark");
      navbar.classList.toggle("bg-light");
      navbar.classList.toggle("bg-dark");
      github.classList.toggle("text-white");
      github.classList.toggle("text-dark");
      mail.classList.toggle("text-white");
      mail.classList.toggle("text-dark");
      text1.classList.toggle("text-white");
      text2.classList.toggle("text-white");
      // text3.classList.toggle("text-white");
      // text4.classList.toggle("bg-white");
      text5.classList.toggle("bg-white");
      // text4.classList.toggle("shadow-sm");
      text5.classList.toggle("shadow-sm");
      text6.classList.toggle("text-white");
      // text4.classList.toggle("shadow");
      text5.classList.toggle("shadow");
      text10.classList.toggle("text-white");
      text11.classList.toggle("text-white");
      text15.classList.toggle("text-white");
      // text16.classList.toggle("text-white");
      text17.classList.toggle("text-white");
      footer.classList.toggle("border-danger");

      element1.classList.remove("span");
      element2.classList.remove("span");
      element3.classList.remove("span");

      document.getElementById("t1").style.outline = "3px solid var(--color3)";
   }
}

/*=============== PAGINATION PADA LAST WORK ===============*/
// selecting required element
const element = document.querySelector(".paginationNumber ul");

let totalPages = 7;


if (window.innerWidth <= 767) {
   totalPages = 14;
}

let page = 1;

//calling function with passing parameters and adding inside element which is ul tag
element.innerHTML = createPagination(totalPages, page);

function createPagination(totalPages, page) {
   let liTag = '';
   let active;
   let beforePage = page - 1;
   let afterPage = page + 1;

   tampil(page)

   if (page > 1) { //show the &nbsp;Next button if the page value is greater than 1
      liTag += `
      <li class=" text-center btn Prev &nbsp;" href="#portfolio" onclick="createPagination(totalPages, ${page - 1})">
         <span><i class='bi bi-caret-left'></i></span>
      </li>`;
   }

   if (page > 2) { //if page value is less than 2 then add 1 after the Prev&nbsp;ious button
      liTag += `<li class="first numb" href="#portfolio" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
      if (page > 3) { //if page value is greater than 3 then add this (...) after the first li or page
         liTag += `<li class="dots"><span>...</span></li>`;
      }
   }

   // how many pages or li show before the current li
   if (page == totalPages) {
      beforePage = beforePage - 2;
   } else if (page == totalPages - 1) {
      beforePage = beforePage - 1;
   }
   // how many pages or li show after the current li
   if (page == 1) {
      afterPage = afterPage + 2;
   } else if (page == 2) {
      afterPage = afterPage + 1;
   }

   for (var plength = beforePage; plength <= afterPage; plength++) {
      if (plength > totalPages) { //if plength is greater than totalPage length then continue
         continue;
      }
      if (plength == 0) { //if plength is 0 than add +1 in plength value
         plength = plength + 1;
      }
      if (page == plength) { //if page is equal to plength than assign active string in the active variable
         active = "active";
      } else { //else leave empty to the active variable
         active = "";
      }
      liTag += `<li href="#portfolio" class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
   }

   if (page < totalPages - 1) { //if page value is less than totalPage value by -1 then show the last li or page
      if (page < totalPages - 2) { //if page value is less than totalPage value by -2 then add this (...) before the last li or page
         liTag += `<li class="dots"><span>...</span></li>`;
      }
      liTag += `<li href="#portfolio" class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
   }

   if (page < totalPages) { //show the &nbsp;Next button if the page value is less than totalPage(20)
      liTag += `<li class=" text-center btn &nbsp; Next" onclick="createPagination(totalPages, ${page + 1})"><span> <i class='bi bi-caret-right'></i> </span></li>`;
   }
   element.innerHTML = liTag; //add li tag inside ul tag
   return liTag; //reurn the li tag
}




/*=============== MODAL ===============*/

function modal_view_open() {
   //$crisp.push(['do', 'chat:hide']);
}

function modal_view_close() {
   //$crisp.push(['do', 'chat:show']);
}

$(document).keyup(function (e) {
   if (e.key === "Escape") { // escape key maps to keycode `27`
      modal_view_close();
   }
});

/*=============== SMOOTH SCROLL HTML ===============*/

ScrollReveal().reveal('.headline', {
   delay: 350
});

/*=============== Disable Right Click ===============*/

document.addEventListener("contextmenu", function (e) {
   e.preventDefault();
}, false);


/*=============== Modal Back Button ================*/
var nama = '';
var angka = 0;

function getNameModal(x) {
   angka = 0;
   nama = x;
   var namaModalGetId = document.getElementById(x);


   namaModalGetId.addEventListener('shown.bs.modal', function (event) {
      // console.log("show modal " + x);
      window.location.hash = "#modalOpen";
   })

   namaModalGetId.addEventListener('hidden.bs.modal', function (event) {
      angka += 1;
      // console.log("hide modal " + x + " - " + angka);
      if (window.location.hash == "#modalOpen" && angka == 1) {
         window.history.back();
         // console.log("bisa kembali")
      }
   })
}

window.onhashchange = function () {
   if (window.location.hash == "") {
      // console.log("hide system modal");
      $('#' + nama).modal('hide');
   }
}