import "quill";

export interface Config {
  container: string;
  unit: "word" | "char";
}

export interface QuillInstance {
  on: any;
  getText: any;
}

export default class EmailDropdown {
  quill: QuillInstance;
  options: Config;

  constructor(quill, options) {
    this.quill = quill;
    this.options = options;

    const container = document.querySelector(this.options.container);
    this.quill.on("text-change", () => {
      container.innerHTML = "donnie testing";
    });
  }
}
