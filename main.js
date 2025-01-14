const btnOndId = document.querySelector(".oneId");
const otvetSection = document.querySelector(".otvet");

console.log(btnOndId);
console.log(otvetSection);

btnOndId.addEventListener("click", () => {
  otvetSection.classList.toggle("active");
});
