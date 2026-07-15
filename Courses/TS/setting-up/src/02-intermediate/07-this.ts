const user = {
  id: 123,
  isAdmin: false,
  becomeAdmin: function () {
    this.isAdmin = true
  },
}

// <button onClick={() => handleClick(2)} />
function handeClick(this: HTMLButtonElement, event: Event, num?: number) {
  this.disabled = true
}
