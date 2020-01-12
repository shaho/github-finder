const API_URL = "https://api.github.com/users";

class Form {
  constructor() {
    this.API_URL = "";
    this.searchTerm = "";

    this.searchInput = document.querySelector('input[name="search"]');
    this.searchInput.addEventListener("keyup", () => this.handleKeyup(event));

    this.submitButton = document.querySelector('button[type="submit"]');
    this.submitButton.disabled = !this.searchTerm;

    // this.form = document.querySelector("form");
    // this.form.addEventListener("submit", this.handleSubmit());
  }

  // keyUp Handler
  handleKeyup(event) {
    this.searchTerm = event.target.value.trim();
    this.API_URL = `${API_URL}/${this.searchTerm}`;
    console.log(this.API_URL);
    this.submitButton.disabled = !this.searchTerm;
  }

  // handlesubmit handler
  // handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(e);
  // }
}

export default Form;
