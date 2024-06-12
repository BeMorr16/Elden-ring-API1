export default class EldenRingAPIClient {
  /**
   * @private
   */
  #url = "https://eldenring.fanapis.com/api";
  #path;
  /**
   * @private
   */
  #data = null;
  constructor(path) {
    this.#path = path;
  }

  async load() {
    const response = await fetch(this.#url + "/" + this.#path, {
      method: "GET",
    });
    const json = await response.json();
    if (json && json.data) {
      this.#data = json;
    }
  }
  get data() {
    return this.#data;
  }
  mapDataToCards() {
    const { data } = this.#data;
    let markup = [];
    let entryElement = document.getElementById("results");
    for (const item of data) {
      const card = document.createElement("div");
      card.className = "card";
      let html = `
                  <img src="${item.image}" class="images" />
                  <h1>${item.name}</h1>
                  <p class="trunc">${item.description}</p>
                  <button><a href="https://eldenring.fanapis.com/api/${
                    this.#path
                  }/${item.id}" target="_blank">Read More</a></button>
                  `;
      card.innerHTML = html;
      markup.push(card);
      entryElement.append(...markup);
    }
  }
}
