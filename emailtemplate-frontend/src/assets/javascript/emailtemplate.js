var quill = new Quill("#editor", {
  theme: "snow",
  modules: {
    toolbar: {
      container: [
        [{ placeholder: ["[GuestName]", "[HotelName]"] }], // my custom dropdown
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction

        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ["clean"], // remove formatting button
      ],
      handlers: {
        placeholder: function (value) {
          if (value) {
            const cursorPosition = this.quill.getSelection().index;
            this.quill.insertText(cursorPosition, value);
            this.quill.setSelection(cursorPosition + value.length);
          }
        },
      },
    },
  },
});

// We need to manually supply the HTML content of our custom dropdown list
const placeholderPickerItems = Array.prototype.slice.call(
  document.querySelectorAll(".ql-placeholder .ql-picker-item")
);

placeholderPickerItems.forEach(
  (item) => (item.textContent = item.dataset.value)
);

document.querySelector(".ql-placeholder .ql-picker-label").innerHTML =
  "Insert placeholder" +
  document.querySelector(".ql-placeholder .ql-picker-label").innerHTML;
