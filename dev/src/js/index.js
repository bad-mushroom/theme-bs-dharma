import 'bootstrap'
console.log('asdasdasdsad')
document.addEventListener("DOMContentLoaded", function () {
  // make it as accordion for smaller screens
  // if (window.innerWidth < 768) {
console.log('DOMContentLoaded')
    document.querySelectorAll('.sidebar-left  .nav-link').forEach(function (element) {

      element.addEventListener('click', function (e) {
console.log('click')
        // let nextEl = element.nextElementSibling;
        // let parentEl = element.parentElement;
        // let allSubmenus_array = parentEl.querySelectorAll('.submenu');

        // if (nextEl && nextEl.classList.contains('submenu')) {
        //   e.preventDefault();
        //   if (nextEl.style.display == 'block') {
        //     console.log('displa none')
        //     nextEl.style.display = 'none';
        //   } else {
        //     console.log('displa block')
        //     nextEl.style.display = 'block';
        //   }
        // }
      });
    })
  // }
  // end if innerWidth
});
// DOMContentLoaded  end
