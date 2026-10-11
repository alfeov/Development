const moveTo = new MoveTo()
document
  .querySelectorAll('.mt-trigger')
  .forEach((trigger) => moveTo.registerTrigger(trigger))

window.moveBy(100, 100)

tippy('[data-tippy-content]', {
  delay: [0, 100],
  theme: 'moccasin',
  animation: 'scale-subtle',
})

var {
  OverlayScrollbars,
  ScrollbarsHidingPlugin,
  SizeObserverPlugin,
  ClickScrollPlugin,
} = OverlayScrollbarsGlobal

OverlayScrollbars(document.querySelector('body'), {})

IMask(document.getElementById('phone'), {
  mask: '+{375}(00)000-00-00',
})
IMask(document.getElementById('postalCode'), {
  mask: /^\d+$/,
})
IMask(document.getElementById('date'), {
  mask: Date,
  lazy: false,
  autofix: true,
  min: new Date(1900, 0, 1),
  max: new Date(),
  blocks: {
    d: {
      mask: IMask.MaskedRange,
      placeholderChar: 'D',
      from: 1,
      to: 31,
      maxLength: 2,
    },
    m: {
      mask: IMask.MaskedRange,
      placeholderChar: 'M',
      from: 1,
      to: 12,
      maxLength: 2,
    },
    Y: {
      mask: IMask.MaskedRange,
      placeholderChar: 'Y',
      from: 1900,
      to: 2999,
      maxLength: 4,
    },
  },
})

// ! Animation

document.querySelector('#showFormBtn').addEventListener('click', showForm)
const form = document.querySelector('.form')
function showForm() {
  if (form.style.opacity == 0) {
    animate(form, {
      opacity: 1,
      height: form.scrollHeight,
      duration: 300,
    })
  } else {
    animate(form, {
      opacity: 0,
      height: 0,
      duration: 300,
    })
  }
}

const { animate } = anime
