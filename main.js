import './style.css';
import { tns } from './node_modules/tiny-slider/src/tiny-slider.js';

  document.addEventListener('DOMContentLoaded', function() {
    tns({
        "container": '.footer-breadcrumbs',
        "slideBy": 'page',
        mouseDrag:true,
        controls:false,
        nav:false,
        responsive: {
          316: {
            items:2,
          },
          
        }

    });
    const menu = document.getElementById('menu');
    const adapt = document.getElementsByClassName('menu-adapt')[0];
    const adapt_scroll="adapt-scroll";
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
    const sprit = document.getElementsByClassName('sprit-f')[0];
    const spriti_act = "sprit-act";
    const spritd = document.getElementsByClassName('sprit-dropdown-s')[0];
    const sprit_down= "sprit-dropdown";
    const itemSprit = document.getElementsByClassName('sprit-option');
    const option_var = document.getElementById('option-s');

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('select-option')) {
        Array.from(dropdownItems).forEach(item => item.classList.remove('select-activity'));
        e.target.classList.add('select-activity');
        document.getElementById('selectedRegionTitle').innerText = e.target.innerText;
      }
      if(e.target.classList.contains('sprit-option')){
        Array.from(itemSprit).forEach(item => item.classList.remove('select-activity'));
        e.target.classList.add('select-activity');
        document.getElementById('spritRegionTitle').innerText = e.target.innerText;
      }
      if (e.target.classList.contains('button')){
        form.classList.add(form_active);
      }
      if (e.target.classList.contains('close-form')){
        form.classList.remove(form_active);
      }
      if (e.target.classList.contains('adapt-s')){
        sprit.classList.add(spriti_act);
      }
      if(e.target.classList.contains('close-sprit')){
        sprit.classList.remove(spriti_act);
      }
      if(e.target.classList.contains('change-city-s')){
        spritd.classList.add(sprit_down);
      }
      if(e.target.classList.contains('close-di')){
        spritd.classList.remove(sprit_down);
      }
      if (e.target.classList.contains('button-sprit')){
        form.classList.add(form_active);
      }
    })

    window.addEventListener('scroll', (e) =>{
      if(window.scrollY > 50) {
        menu.classList.add(active_class);
        nav.classList.add(nav_class);
        func.classList.add(city_activ);
        adapt.classList.add(adapt_scroll);
      } else {
        menu.classList.remove(active_class);
        nav.classList.remove(nav_class);
        func.classList.remove(city_activ);
        adapt.classList.remove(adapt_scroll);
      }
      if(window.scrollY > 90 && !footer.classList.contains(footer_activ)){
        footer.classList.add(footer_activ)
      }
    })

  });

