// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}


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
