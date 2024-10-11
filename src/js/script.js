document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission until confirmation

    const debitedTransactionMode = document.getElementById(
      "debited-transaction-mode"
    ).value;
    const expenseCategory = document.getElementById("expenseCategory").value;

    // Confirmation alert before submission
    if (confirm("Are you sure you want to submit the form?")) {
      // Check if transaction details are valid
      if (
        debitedTransactionMode === "Select Transaction Mode" ||
        expenseCategory === "Select Expense Category"
      ) {
        alert("Please Fill all the Details.");
      } else {
        // Proceed with form submission
        const scriptURL =
          "https://script.google.com/macros/s/AKfycbxgJKkdCFeGSQUGI9wdT_Ev0uud_99RnlNN2N20ggIomrYr_-vy6XN8TgPPthI5PAL6/exec";

        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            alert("Thank you! Your form is submitted successfully.");
            // Reload the page or clear the form after submission
            location.reload();
          })
          .catch((error) => console.error("Error!", error.message));
      }
    } else {
      // If user cancels, do nothing
      alert("Form submission cancelled.");
    }
  });
});
