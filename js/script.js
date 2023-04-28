var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]'),
)

var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})


document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
    el.addEventListener('shown.bs.tab', () => {
      const target = el.getAttribute('data-bs-target')
      const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`)
      bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()
    })
})

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
})

const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
  console.log('O botão foi clicado!');
});

// Dispara manualmente o evento de clique no botão
myButton.dispatchEvent(new Event('click'));


