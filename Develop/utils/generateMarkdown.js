// Returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  //
  if(license !== 'no license'){
    return `
    ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
      return ' ';
    };
};

// Returns the license link
// If there is no license, returns an empty string

function renderLicenseLink(license) {
  if (license !== 'no license'){
    return `
    [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  };
};

// Returns the license section of README
// If there is no license, returns an empty string

function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
  ## [License](#table-of-contents)
  This application has the following license:
  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
}

// Generates markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
    
  ## [Description]
  ${data.description}
   
  ## [Installation](#table-of-contents)
  ${data.installation}
  ## [Usage](#table-of-contents)
  ${data.usage}

  ${renderLicenseSection(data.license)}
  ## [Contributing](#table-of-contents)
    
   
  ## [Tests](#table-of-contents)
  ${data.test}
  ## [Questions](#table-of-contents)
  Contact me with any questions at the following:
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})
  `;
};
module.exports = generateMarkdown;
