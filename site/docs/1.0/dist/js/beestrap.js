$(document).on('click', '.navbar-toggle', () => {
  $toggle = $(this);

  if (beestrap.misc.navbar_menu_visible == 1) {
    $('html').removeClass('nav-open');
    beestrap.misc.navbar_menu_visible = 0;
    setTimeout(() => {
      $toggle.removeClass('toggled');
      $('#bodyClick').remove();
    }, 550);

  } else {
    setTimeout(() => {
      $toggle.addClass('toggled');
    }, 580);

    div = '<div id="bodyClick"></div>';
    $(div).appendTo('body').click(() => {
      $('html').removeClass('nav-open');
      beestrap.misc.navbar_menu_visible = 0;
      setTimeout(() => {
        $toggle.removeClass('toggled');
        $('#bodyClick').remove();
      }, 550);
    });

    $('html').addClass('nav-open');
    beestrap.misc.navbar_menu_visible = 1;
  }
});

const debounce = (func, wait, immediate) => {
  var timeout;
  return () => {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
};

const beestrap = {
  misc: {
    navbar_menu_visible: 0
  },

  checkScrollForTransparentNavbar: debounce(() => {
    if ($(document).scrollTop() > scroll_distance) {
      if (transparent) {
        transparent = false;
        $('.navbar[color-on-scroll]').removeClass('navbar-transparent');
      }
    } else {
      if (!transparent) {
        transparent = true;
        $('.navbar[color-on-scroll]').addClass('navbar-transparent');
      }
    }
  }, 17),

  // DateTimePicker default init
  initDateTimePicker: () => {
    if ($(".datetimepicker").length != 0) {
      $('.datetimepicker').datetimepicker({
        icons: {
          time: "bee-icons far fa-clock",
          date: "bee-icons far fa-calendar",
          up: "fas fa-chevron-up",
          down: "fas fa-chevron-down",
          previous: 'fas fa-chevron-left',
          next: 'fas fa-chevron-right',
          today: 'fa fa-screenshot',
          clear: 'fas fa-trash',
          close: 'fa fa-remove'
        }
      }).show();
    }

    if ($(".datepicker").length != 0) {
      $('.datepicker').datetimepicker({
        format: 'MM/DD/YYYY',
        icons: {
          time: "bee-icons far fa-clock",
          date: "bee-icons far fa-calendar",
          up: "fas fa-chevron-up",
          down: "fas fa-chevron-down",
          previous: 'fas fa-chevron-left',
          next: 'fas fa-chevron-right',
          today: 'fa fa-screenshot',
          clear: 'fas fa-trash',
          close: 'fa fa-remove'
        }
      }).show();
    }

    if ($(".timepicker").length != 0) {
      $('.timepicker').datetimepicker({
        // format: 'H:mm',    // use this format if you want the 24hours timepicker
        format: 'h:mm A', //use this format if you want the 12hours timpiecker with AM/PM toggle
        icons: {
          time: "bee-icons far fa-clock",
          date: "bee-icons far fa-calendar",
          up: "fas fa-chevron-up",
          down: "fas fa-chevron-down",
          previous: 'fas fa-chevron-left',
          next: 'fas fa-chevron-right',
          today: 'fa fa-screenshot',
          clear: 'fas fa-trash',
          close: 'fa fa-remove'
        }
      }).show();
    }
  },

  initMinimizeSidebar: () => {
    if ($('.sidebar-mini').length != 0) {
      sidebar_mini_active = true;
    }

    $('.minimize-sidebar').click(() => {
      var $btn = $(this);

      if (sidebar_mini_active == true) {
        $('body').removeClass('sidebar-mini');
        sidebar_mini_active = false;
        beestrap.showSidebarMessage('Sidebar mini deactivated...');
      } else {
        $('body').addClass('sidebar-mini');
        sidebar_mini_active = true;
        beestrap.showSidebarMessage('Sidebar mini activated...');
      }

      var simulateWindowResize = setInterval(() => {
        window.dispatchEvent(new Event('resize'));
      }, 180);

      setTimeout(() => {
        clearInterval(simulateWindowResize);
      }, 1000);
    });
  },

  startAnimationForLineChart: (chart) => {
    chart.on('draw', (data) => {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  },

  startAnimationForBarChart: (chart) => {

    chart.on('draw', (data) => {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq2 = 0;
  },

  showSidebarMessage: (message) => {
    try {
      $.notify({
        icon: "bee-icons far fa-bell",
        message: message
      }, {
        type: 'primary',
        timer: 4000,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
    } catch (e) {
      console.log('Notify library is missing, please make sure you have the notifications library added.');
    }

  },

  initSliders: () => {
    let slider = document.getElementById('regularSlider');
    noUiSlider.create(slider, {
      start: 40,
      connect: [true, false],
      range: {
        min: 0,
        max: 100
      }
    });

    slider = document.getElementById('doubleSlider');
    noUiSlider.create(slider, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }
};

$(document).ready(() => {
  // bootstrap-select
  if ($(".selectpicker").length != 0) {
    $(".selectpicker").selectpicker({
      iconBase: "bee-icons",
      tickIcon: "fas fa-check"
    });
  }
})
