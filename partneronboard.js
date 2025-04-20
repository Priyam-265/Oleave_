document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const form = document.getElementById("partner-form");
  
    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
      // Prevent the default form submission (which would reload the page)
      event.preventDefault();
  
      // Get the form data
      const formData = new FormData(form);
  
      // Convert the form data to a plain object for easier handling
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
  
      // Log the form data to the console (for testing purposes)
      console.log("Form submitted with data:", formObject);
  
      // Simulate successful form submission (e.g., sending data to a server)
      // Optionally, you could send the data to a server before redirecting
      /*
      fetch("/submit-form", {
        method: "POST",
        body: JSON.stringify(formObject),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      */
  
      // After successful submission, redirect to the next page (replace 'dashboard.html' with your next page)
      window.location.href = "dashboard.html"; // Redirects to the next page after form submission
  
      // Optionally, reset the form after submission
      form.reset();
    });
  });
  