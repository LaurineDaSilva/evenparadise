const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
   
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
});