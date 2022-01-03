// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return "https://img.shields.io/static/v1?label=License&message=MIT&color=blue&?style=plastic&link=" + renderLicenseLink(license);
  } else if (license === 'Apache') {
    return "https://img.shields.io/static/v1?label=License&message=Apache&color=green&?style=plastic&link=" + renderLicenseLink(license);
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return "https://choosealicense.com/licenses/mit/";
  } else if (license === 'Apache') {
    return "https://choosealicense.com/licenses/apache-2.0/";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
  function renderLicenseSection(license) {
    return `# License
    ## The Licenses We Used [${license}](${renderLicenseLink(license)})`
    }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
[![License Badge](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})
  ## Table of Contents
  - [Description](#Description)
  - [Installations](#Installations)
  - [Usage](#Usage)
  - [Tests](#Tests)
  - [License](#License)
  - [Questions](#Questions)
  ## Description
  ${data.description}
  ## Installations
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Tests
  ${data.tests}
  ## License
  [![License Badge](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})
  </br>
  This application uses ${data.license} license. 
  ## Questions 
  If you have any questions or would like to contact me, you can [email](mailto:${data.email}) me
  or check out my [GitHub](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;