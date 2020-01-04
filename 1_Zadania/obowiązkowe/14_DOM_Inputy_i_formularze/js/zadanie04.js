const cardNo = document.querySelector("#name")
const type = document.querySelector("#type")

cardNo.addEventListener("input", function () {
   if (this.value.startsWith("4")) {
      type.innerText = "Visa"
      
      if (this.value.length >= 13 && this.value.length <= 16) {
         this.style.border = "2px solid green"
      } else {
         this.style.border = "none"
      }
   } else if (this.value.startsWith("5")) {
      type.innerText = "Mastercard"

      if (this.value.length === 16) {
         this.style.border = "2px solid green"
      } else {
         this.style.border = "none"
      }
   } else if (this.value.startsWith("34") || this.value.startsWith("37")) {
      type.innerText = "American Express"

      if (this.value.length === 15) {
         this.style.border = "2px solid green"
      } else {
         this.style.border = "none"
      }
   } else {
      type.innerText = ""
   }
})