/*=============== BACK TOP  ===============*/

var mybutton = document.getElementById("myBtn");

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

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}

/*=============== TAMPILKAN DATA ===============*/

$(document).ready(function () {
   $.ajax({
      url: "/assets/csv/pendidikan_non_formal.csv",
      dataType: "text",
      success: function (data) {
         var employee_data = data.split(/\r?\n|\r/);
         var table_data = '';
         var jumlah_udemy = 0;
         var kutip = "'";
         for (var count = 0; count < employee_data.length; count++) {
            var cell_data = employee_data[count].split(",");
            if (count === 0) {} else {
               if (cell_data[3] !== 'Udemy' && cell_data[3] !== 'Progate') {
                  if (cell_data[1] == 'Z_none.png') {
                     table_data += '<div class="col d-none">'
                  } else {
                     table_data += '<div class="col">'
                  }

                  table_data += ' <div class="card shadow-sm"> <p class="card-header text-center">' + cell_data[3] + '</p> <a type="button"';
                  if (cell_data[1] == 'Z_none.png') {
                     table_data += 'class="disabled2"'
                  }
                  table_data += 'data-bs-toggle="modal" data-bs-target="#exampleModal' + cell_data[0] + '" onclick="getNameModal(' + kutip + 'exampleModal' + cell_data[0] + kutip + ')"><img class="bd-placeholder-img card-img-top" src="/assets/img.pend/' + cell_data[1] + '" alt="#" height="225" width="100%"></a>';
                  table_data += '<div class="card-body"> <p class="card-text text-center">' + cell_data[2] + '</p> </div> </div> </div>';
                  table_data += '<div class="modal fade" id="exampleModal' + cell_data[0] + '" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">'
                  table_data += '<div class="modal-dialog modal-dialog-centered modal-xl"><div class="modal-content"><div class="modal-header">'
                  table_data += '<h5 class="modal-title" id="exampleModalLabel">' + cell_data[2] + ' (' + cell_data[3] + ')'
                  table_data += '</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>'
                  table_data += '<div class="modal-body"><img class="rounded mx-auto d-block bd-placeholder-img card-img-top2" src="/assets/img.pend/' + cell_data[1] + '" alt="#" width="80%"></div><div class="modal-footer">'
                  if (cell_data[4] != 'none') {
                     table_data += '<div class="container text-center"><a class="text-danger" href="' + cell_data[4] + '" style="text-decoration: none; font-size: 14px !important;" target="_blank">&ensp;Show credential <i class="bi bi-box-arrow-up-right"></i></a></div>'
                  }
                  table_data += "</div></div></div></div>"
               } else {
                  jumlah_udemy += 1;
               }
            }
         }
         table_data += '';
         $('#table_data_pend_non_formal').html(table_data);
         data1 = '<footer class="footer border-top py-2"><div class="container-lg"><div class="row"><div class="col-lg-12"><p class="m-0 text-center text-muted font-unik">Ryas Putra</p></div></div></div></footer>';
         $('#fotterfotter').html(data1);
         data1 = 'See Other Certificate';
         $('#cobacoba').html(data1);
      }
   });
});

/* SHOW DATA ALL*/
function show() {
   $(document).ready(function () {
      $.ajax({
         url: "/assets/csv/pendidikan_non_formal.csv",
         dataType: "text",
         success: function (data) {
            var employee_data = data.split(/\r?\n|\r/);
            var table_data = '';
            var kutip = "'";

            for (var count = 0; count < employee_data.length; count++) {
               var cell_data = employee_data[count].split(",");
               if (count === 0) {} else {
                  if (cell_data[1] == 'Z_none.png') {
                     table_data += '<div class="col d-none">'
                  } else {
                     table_data += '<div class="col">'
                  }
                  table_data += '	<div class="card shadow-sm"> <p class="card-header text-center">' + cell_data[3] + '</p> <a type="button"';
                  if (cell_data[1] == 'Z_none.png') {
                     table_data += 'class="disabled2"'
                  }
                  table_data += '<a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal' + cell_data[0] + '" onclick="getNameModal(' + kutip + 'exampleModal' + cell_data[0] + kutip + ')"><img class="bd-placeholder-img card-img-top" src="/assets/img.pend/' + cell_data[1] + '" alt="#" height="225" width="100%"></a>';
                  table_data += '<div class="card-body"> <p class="card-text text-center">' + cell_data[2] + '</p> </div> </div> </div>';
                  table_data += '<div class="modal fade" id="exampleModal' + cell_data[0] + '" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">'
                  table_data += '<div class="modal-dialog modal-dialog-centered modal-xl"><div class="modal-content"><div class="modal-header">'
                  table_data += '<h5 class="modal-title" id="exampleModalLabel">' + cell_data[2] + ' (' + cell_data[3] + ')'
                  if (cell_data[4] != 'none') {
                     table_data += '<a class="text-danger" href="' + cell_data[4] + '" style="text-decoration: none; font-size: 12px !important;" target="_blank">&ensp;Show credential <i class="bi bi-box-arrow-up-right"></i></a>'
                  }
                  table_data += '</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>'
                  table_data += '<div class="modal-body"><img class="rounded mx-auto d-block bd-placeholder-img card-img-top2" src="/assets/img.pend/' + cell_data[1] + '" alt="#" width="80%"></div><div class="modal-footer"></div></div></div></div>'
               }
            }
            table_data += '';
            $('#table_data_pend_non_formal').html(table_data);
         }
      });
   });
   udemy = document.querySelector('.udemy');
   udemy.classList.toggle("d-none");
}

/*=============== UBAH THEMA WEBSITE ===============*/
if (localStorage.getItem('preferredTheme') == 'dark') {
   setDarkMode(true)
}

function setDarkMode(isDark) {
   const
      Moon = document.querySelector('.bi-cloud-moon'),
      Sun = document.querySelector('.bi-cloud-sun'),
      text1 = document.querySelector('.textHitam1'),
      text2 = document.querySelector('.textHitam2');

   if (isDark) {
      localStorage.setItem('preferredTheme', 'dark');
      Moon.classList.toggle("d-none");
      Sun.classList.toggle("d-none");
      text1.classList.toggle("text-white");
      text2.classList.toggle("bg-dark");
   } else {
      localStorage.removeItem('preferredTheme');
      Moon.classList.toggle("d-none");
      Sun.classList.toggle("d-none");
      text1.classList.toggle("text-white");
      text2.classList.toggle("bg-dark");
   }
}

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