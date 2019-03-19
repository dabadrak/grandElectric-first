$(document).ready(()=> {
  const view = (() => {
    const $mainMenuContainer = $('#mainMenu');
    const menu = new Menu('mainMenu',
        [
          new SubMenu('Услуги', '#', 'mainMenuSub', 'mainMenuSubLi', [
            new MenuItem('Проводка в квартире и доме', '#housesAppartments'),
            new MenuItem('Проводка в деревянном доме', '#woodenHouses'),
            new MenuItem('Коммерческие объекты', '#commercial'),
            new MenuItem('Разные', '#'),
          ]),
          new MenuItem('Цены', '#'),
          new MenuItem('Наши&nbsp;работы', '#'),
          new MenuItem('Отзывы', '#'),
          new MenuItem('Контакты', '#'),
        ]
    );
    $mainMenuContainer.append(menu._render());
    
    const $mobileMenuContainer = $('#mobileMenu');
    const mobileMenu = new Menu('mobileMenu',
        [
          new SubMenu('Услуги', '#', 'mobileMenuSub', 'mobileMenuSubLi', [
            new MenuItem('Проводка в квартире и доме', '#housesAppartments'),
            new MenuItem('Проводка в деревянном доме', '#woodenHouses'),
            new MenuItem('Коммерческие объекты', '#commercial'),
            new MenuItem('Разные', '#'),
          ]),
          new MenuItem('Цены', '#'),
          new MenuItem('Наши&nbsp;работы', '#'),
          new MenuItem('Отзывы', '#'),
          new MenuItem('Контакты', '#'),
        ]
    );
    $mobileMenuContainer.append(mobileMenu._render());
  
  new BubblyButton();
  
  })();
  
  const control = (() => {
    const menu = (() =>{
      const $header = $('#header');
      let lastScrollTop = 0;
      $(window).scroll(() => {
        let scrollTop = $(this).scrollTop();
        if (scrollTop > lastScrollTop) {
          $header.hide('slide', {direction: 'up'}, 200);
        } else {
          $header.show('slide', {direction: 'up'}, 200);
        }
        lastScrollTop = scrollTop;
      });
      
      const $subMenuContainer = $('.mainMenuSubLi');
      $subMenuContainer.hover(()=> {
        $subMenuContainer
            .toggleClass('active')
            .find('ul')
            .fadeToggle(200)
      });

      const $mobileMenuSideBar = $('.mobileMenuSideBar');
      const $mobileMenuContentMask = $('#mobileMenuContentMask');
      $('#mobileMenuBtn').click(() => {
        $mobileMenuSideBar.show('slide', {direction: 'right'}, 200);
        $mobileMenuContentMask.fadeIn();
      });
  
      function hideMenu() {
        $mobileMenuSideBar.hide('slide', {direction: 'right'}, 200);
        $mobileMenuContentMask.fadeOut();
      }
  
      $('#mobileMenuCloseBtn').click(() => {hideMenu()});
      $mobileMenuContentMask.click(() => {hideMenu()});
  
      $('.mobileMenuSubLi>a').click(() => {
        $('.mobileMenuSub').slideToggle(200)
      });
    })();
  })();
  
  const services = (() => {
  
    //Аккордионы мини прайсов
    $('#accordionWiring').accordion(100);
    $('#accordionTools').accordion(100);
    $('#accordionCommercial').accordion(100);
    
    //Табы с мини прайсами в начале страницы
    $('#servicesTabs').tabs({
      active: 0,
      hide: {
        effect: "fade",
        duration: 200
      },
      show: {
        effect: "fade",
        duration: 200
      }
    });
    
    //Подсветка лэйбла активного таба
    $('.servicesPriceNav').click('li', (e) => {
      $('.servicesPriceNav')
          .find('.active')
          .removeClass('active');
      e.target.parentNode.classList.add('active')
    });
  })();
  
  const servicesBig = (() => {
    $('.jsPortfolioModalTrigger').click((e) => {
      new PortfolioModal('../json/portfolioModal.json', e.target.dataset.category, '#modalPortfolioScreen');
    });
    
  })();
  
});
