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
