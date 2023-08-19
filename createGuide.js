const fs = require("fs");

const languages = ["Python", "JavaScript", "Java", "C++", "Golang", "Rust"];

const createHeader = () => {
  const title = "## Code Table\n"
  const headings = languages.reduce(
    (acc, language) => acc + `| ${language} `,
    "| Topic | Operation "
  );
  const separator =
    "|\n" +
    "| :----: | :-------: " +
    "| :-----: ".repeat(languages.length) +
    "|\n";
  const header = title + headings + separator;
  return header;
};

const createRows = (data) => {
  return Object.entries(data).reduce((tableBody, [topic, operations]) => {
    tableBody += `| **${topic}** |\n`;
    Object.entries(operations).forEach(([operation, snippets]) => {
      let maxWays = Math.max(
        ...languages.map((lang) => snippets[lang]?.length || 0)
      );
      for (let i = 0; i < maxWays; i++) {
        tableBody += "| | " + (i === 0 ? `*${operation}*` : "") + " ";
        tableBody +=
          languages
            .map((lang) => {
              return (
                "| " +
                (snippets[lang]?.[i] ? "```" + snippets[lang][i] + "```" : "") +
                " "
              );
            })
            .join("") + "|\n";
      }
      tableBody += "| " + "| ----- ".repeat(languages.length + 1) + "|\n";
    });
    return tableBody + "| ----- ".repeat(languages.length + 2) + "|\n";
  }, "");
};

fs.readFile("data.json", "utf8", (err, jsonString) => {
  if (err) throw err;
  const data = JSON.parse(jsonString);

  const opening = data.opening;
  const tableHeader = createHeader();
  const tableBody = createRows(data.topics);
  const table = tableHeader + tableBody;
  const end = data.end;

  readme = opening + table + end;
  fs.writeFile("table.md", table, (err) => {
    if (err) throw err;
    console.log("Table saved to table.md");
  });
  fs.writeFile("README.md", readme, (err) => {
    if (err) throw err;
    console.log("Readme saved to README.md");
  });
});
