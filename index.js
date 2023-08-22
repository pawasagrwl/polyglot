fetch("table.md")
  .then((response) => response.text())
  .then((text) => {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = marked.parse(text);
  })
  .catch((err) => {
    console.error("Error reading README.md:", err);
  });

let data = {};

fetch("data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    data = jsonData; // Store the fetched JSON data in the global variable
    populateDropdowns(data);
  })
  .catch((err) => console.error(err));

function populateDropdowns(data) {
  const topicDropdown = document.getElementById("topic-dropdown");
  const operationDropdown = document.getElementById("operation-dropdown");
  const languageDropdown = document.getElementById("language-dropdown");

  // Insert placeholder for topic dropdown
  topicDropdown.innerHTML =
    '<option value="" disabled selected>Select topic</option>';

  // Populate the topic dropdown
  Object.keys(data.topics).forEach((topic) => {
    const option = document.createElement("option");
    option.value = topic;
    option.text = topic;
    topicDropdown.appendChild(option);
  });

  // Populate the operation dropdown
  topicDropdown.addEventListener("change", () => {
    const selectedTopic = topicDropdown.value;
    operationDropdown.innerHTML =
      '<option value="" disabled selected>Select operation</option>'; // Clear previous options
    Object.keys(data.topics[selectedTopic]).forEach((operation) => {
      const option = document.createElement("option");
      option.value = operation;
      option.text = operation;
      operationDropdown.appendChild(option);
    });
    languageDropdown.innerHTML = "";
  });

  // Populate the language dropdown
  operationDropdown.addEventListener("change", () => {
    languageDropdown.innerHTML =
      '<option value="" disabled selected>Select language</option>';

    const selectedTopic = topicDropdown.value;
    const selectedOperation = operationDropdown.value;

    Object.keys(data.topics[selectedTopic][selectedOperation]).forEach(
      (language) => {
        const option = document.createElement("option");
        option.value = language;
        option.text = language;
        languageDropdown.appendChild(option);
      }
    );
  });
}

function findCode() {
  const selectedTopic = document.getElementById("topic-dropdown").value;
  const selectedOperation = document.getElementById("operation-dropdown").value;
  const selectedLanguage = document.getElementById("language-dropdown").value;
  const contentDiv = document.getElementById("code");
  const code = data.topics[selectedTopic][selectedOperation][selectedLanguage];
  contentDiv.innerHTML = code.join("<br>");
  contentDiv.style.display = "block";
}

function toggleColumn(checkbox) {
  const columns = {
    Python: 2,
    JavaScript: 3,
    Java: 4,
    "C++": 5,
    Golang: 6,
    Rust: 7,
  };
  const language = checkbox.value;
  const column = columns[language];
  const isChecked = checkbox.checked;

  if (typeof column === "undefined") return; // Return if the column index is not found

  // Find all table rows
  const rows = document.querySelectorAll("table tr");

  // Iterate through each row and toggle the visibility of cells in the specified column
  rows.forEach((row) => {
    const cell = row.children[column]; // Get the cell by index
    if (cell) {
      cell.style.display = isChecked ? "" : "none"; // Hide or show based on checkbox status
    }
  });

  // Optionally, update the language dropdown to reflect the changes
  const langOption = document.querySelector(
    `#language-dropdown option[value="${language}"]`
  );
  if (langOption) {
    langOption.style.display = isChecked ? "" : "none";
  }
}

function resetCode() {
  document.getElementById("topic-dropdown").selectedIndex = 0;
  document.getElementById("operation-dropdown").innerHTML = '';
  document.getElementById("language-dropdown").innerHTML = '';
  document.getElementById("code").style.display = "none";
}

document.getElementById("theme").addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

function scrollToTop() {
  const container = document.querySelector(".table-container");
  container.scrollTo({ top: 0, behavior: "smooth" });
}
