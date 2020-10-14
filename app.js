const tipInput = document.querySelector(".submit-button");

tipInput.addEventListener("click", calculateAnswer);

function calculateAnswer() {
  event.preventDefault();
  let tip = +document.getElementById("tip-number").value;
  let amount = +document.getElementById("amount-number").value;
  document.getElementById("tip-total").innerHTML = `Tip: $${
    (tip / 100) * amount
  }`;
  document.getElementById("total-answer").innerHTML = `Total: $${
    (tip / 100) * amount + amount
  }`;
}
