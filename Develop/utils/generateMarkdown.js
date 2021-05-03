const mit = "[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
const apache = "[License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const gpl = "[License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
const isc = "[License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    console.log(license);

  if(license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
} else if(license === "APACHE 2.0"){
    return `![![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
} else if(license === "GPL 3.0"){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
} else if(license === "ISC"){
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
} else {
    return "Not available"
}
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project_title}

  # Good ReadMe Generator

  ${renderLicenseBadge(data.license)}
  
  #### Table of Contents
  * [Project Description](#project-description)
  * [Installation Instructions](#installation-instructions)
  * [Usage Guidelines](#usage-guidelines)
  * [License](#license)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions)
  * [Questions](#questions)

  # Project Description 
  * ${data.description}

  # Installation Instructions

  # Usage Guidelines
  * ${data.usage}

  # License
  * This project is licensed under the ${data.license}

  # Contribution Guidelines
  * ${data.contributions}

  # Test Instructions
  * ${data.test_command}

  # Questions
  If you have any questions about the repom contact me directly at ${data.email}. 
  You can find more of my work at [${data.github_username}](http://github.com/${data.github_username}).`;
}

module.exports = generateMarkdown;
