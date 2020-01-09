const API_URL = "https://api.github.com/users";

class Form {
  constructor() {
    this.API_URL = "";
    this.searchTerm = "";

    this.searchInput = document.querySelector('input[name="search"]');
    this.searchInput.addEventListener("keyup", this.handleKeyup);

    this.submitButton = document.querySelector('button[type="submit"]');
    this.submitButton.disabled = !this.searchTerm;
  }
  handleKeyup(e) {
    this.searchTerm = e.target.value.trim();
    this.API_URL = `${API_URL}/${this.searchTerm}`;
    this.submitButton.disabled = !this.searchTerm;
  }
}

export default Form;
