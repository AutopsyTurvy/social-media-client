


# Workflow Assignment Project

This project was part of a workflow course assignment, Due: Sunday, 18 August 2024. 
Our main objectives were to test our skills with a workflow and testing process that would allow the proper, careful and more thorough deployment of our work- 
Setting up these tests would allow functions and code to be checked and run before the deployment of a site, streamlining the deployment process for teams of developrs, something widely used in the industry amongst large teams to make the process easier and prevent any code breaking errors.




## Our Project Overview/ Requirements:

The project required the following steps:
1. Forking a base repository.
2. Configuring the project with ESLint, Prettier, and commit hooks.
3. Adding GitHub Actions for CI/CD (if required).
4. Setting up Jest and Cypress for testing.
5. Creating tests to cover specified test cases.
6. Opening a Pull Request and requesting a peer review from other students.
7. Submitting the final link to the Open Pull Request!




## Project Setup

### Forking the Repository
- This repository was forked from the example project provided in the course materials.
- A new branch, `workflow`, was created to house the workflow configurations and any changes.

### Workflow Configuration

#### ESLint and Prettier

**ESLint** was added to enforce consistent code style and catch potential issues.
(A tool used to analyze code for stylistic and programming errors. It enforces a consistent code style and catches potential issues, such as undefined variables or syntax errors, which helps maintain high-quality code.) 
(An .eslintrc.json file was created to define custom ESLint rules, making it easier to enforce specific coding standards across the project.)

**Prettier** was configured for automatic code formatting.
Also created an `.eslintrc.json` file (to store ESLint rules, and a `.prettierrc` file was added for Prettier configuration.)

#### Commit Hooks
**Husky** and **lint-staged** were added to run ESLint and Prettier *before* each commit- this will test them and alert you to any issues before you can commit the files- it also ensures that any code committed to the repository adheres to the established linting and formatting rules.
(Husky allows us to run scripts during Git hooks (specific Git lifecycle events), which enables automatic tasks like code linting and formatting before each commit.
lint-staged works with Husky to run ESLint and Prettier only on files that are staged for commit, which optimizes the process and speeds up commit checks, streamlining the deployment process.)




## Testing Configuration

### Jest
**Jest** was installed and configured to handle unit testing.
(Jest is a JavaScript testing framework used for *unit testing*, which involves testing individual parts of the code (like functions or components) to ensure they behave as expected.)
Basic test cases were created to ensure the project met functionality requirements.

### Cypress
**Cypress** was configured for end-to-end testing to simulate user interactions and verify application workflows.
(Cypress is an end-to-end testing framework used to simulate real user interactions and test the entire application workflow.)
Tests were written for critical paths and user interactions to ensure reliable functionality.




Last but not least:
A **Pull Request (PR)** was created from the `workflow` branch into the default branch.

I only requested one peer review from another student in this instance, and was told that as far as they could see, I had been thorough in my testing- 
I re-ran the tests just to be sure.





## Running the Project

To get started with this project locally:

**Clone the Repository**:
   ```bash
   git clone https://github.com/YourUsername/your-repo-name.git
   cd your-repo-name




To run each:

Install Dependencies:
```
npm install
```


Run ESLint:
```
npm run lint
```

Run Prettier:
```
npm run format
````

Run Jest Tests:
```
npm test
```

Run Cypress Tests:
```
npx cypress open
```



[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![ESLint](https://img.shields.io/badge/linter-ESLint-4B32C3.svg)](https://eslint.org/)
[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Cypress](https://img.shields.io/badge/tested_with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![Jest](https://img.shields.io/badge/tested_with-Jest-C21325.svg)](https://jestjs.io/)




#### Getting Started

Installing

Clone the repo:

    git clone git@github.com: https://github.com/AutopsyTurvy/Semester-Project-2-Kitty-Alice-Case.git

Install the dependencies: N/A

    npm install

Running

To run the app, run the following commands:

    npm run start


(You may also choose to add to/ clone this code in another way than through the command line or terminal, and you may do this by opening it in your chosen code editor, via GitHub desktop, and subsequently, VScode. )


---

Contributing


Contributions are welcome, but I would request that the invidicual that does so, clones the code and adds notes so that I can review any changes before they are comitted to the project permanently. Thank you! 

---

Contact:


Email me: 
autopsyturvycoding@gmail.com

<img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Gmail-Dark.svg" width="50" height="50"> <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Discord.svg" width="50" height="50">



Find me on Discord:
(Kitty Alice Case
kittyalicerayworth)

---