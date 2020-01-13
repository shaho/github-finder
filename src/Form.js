import axios from "axios";

const API_URL = "https://api.github.com/users";

class Form {
  constructor(addCard) {
    this.addCard = addCard;
    // console.log(this.addCard);

    this.API_URL = "";
    this.searchTerm = "";

    this.searchInput = document.querySelector('input[name="search"]');
    this.searchInput.addEventListener("keyup", () => this.handleKeyup(event));

    this.submitButton = document.querySelector('button[type="submit"]');
    this.submitButton.disabled = !this.searchTerm;

    this.form = document.querySelector("form");
    this.form.addEventListener("submit", () => this.handleSubmit(event));
  }

  // keyUp Handler
  handleKeyup(event) {
    this.searchTerm = event.target.value.trim();
    this.API_URL = `${API_URL}/${this.searchTerm}`;
    this.submitButton.disabled = !this.searchTerm;
  }

  // handlesubmit handler
  async handleSubmit(event) {
    event.preventDefault();
    try {
      this.form.reset();
      const { data } = await axios.get(this.API_URL);
      this.addCard(data);
    } catch (error) {
      console.error("Promise rejected! ", error);
    }
  }
}

export default Form;
