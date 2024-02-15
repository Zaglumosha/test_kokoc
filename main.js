import './style.css';
import { tns } from './node_modules/tiny-slider/src/tiny-slider.js';

  document.addEventListener('DOMContentLoaded', function() {
    tns({
        "container": '.footer-breadcrumbs',
        "items": 3.2,
        "slideBy": 'page',
        mouseDrag:true,
        controls:false,
        nav:false,

    });
    const menu = document.getElementById('menu');
    const active_class = "menu_scrolled";
    const nav = document.getElementsByClassName('navigation-list')[0];
    const nav_class = "nav_scrolled";
    const func = document.getElementsByClassName('func')[0];
    const city_activ  = "func_scrolled";
    const footer = document.getElementsByClassName('footer')[0];
    const footer_activ = "footer_activ";
    const dropdownItems = document.getElementsByClassName('select-option');
    const form = document.getElementsByClassName('back')[0];
    const form_active = "back-active";

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('select-option')) {
        Array.from(dropdownItems).forEach(item => item.classList.remove('select-activity'));
        e.target.classList.add('select-activity');
        document.getElementById('selectedRegionTitle').innerText = e.target.innerText;
      }
      if (e.target.classList.contains('button')){
        form.classList.add(form_active);
      }
      if (e.target.classList.contains('close-form')){
        form.classList.remove(form_active);
      }
    })

    window.addEventListener('scroll', (e) =>{
      if(window.scrollY > 50) {
        console.log('ghbdntn');
        menu.classList.add(active_class);
        nav.classList.add(nav_class);
        func.classList.add(city_activ);
      } else {
        menu.classList.remove(active_class);
        nav.classList.remove(nav_class);
        func.classList.remove(city_activ);
      }
      if(window.scrollY > 90 && !footer.classList.contains(footer_activ)){
        footer.classList.add(footer_activ)
      }
    })

  });

