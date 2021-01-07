
export const closeModal = () => {
  document.querySelector('.modal-backdrop').remove()
  document.body.classList.remove('modal-open')
}
