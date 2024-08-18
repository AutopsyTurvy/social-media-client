// Login and Specifications:

describe('User Login Tests', () => {
  // First test to ascertain whether the form submission is working
  // This means that when invalid credentials are entered the form submission should *NOT* be allowed, nor the form submitted.

  // (For the marking criteria: User cannot submit the login form in with invalid credentials and is shown a message.)
  //Below is the test for invalid credentials:
  it('should not allow the user to submit the login form with invalid credentials', () => {
    // Refreshes the page so we begin on the home page and with a fresh testing environment
    cy.visit('/');

    // clicks the login button at the top of the page to focus on the correct login form
    cy.get('button[data-auth="login"]').first().click();

    // Enters credentials that would be deemed incorrect as per the specs of the form
    cy.get('#loginEmail').type('invalidemail@wrongdomain.com');
    cy.get('#loginPassword').type('short');

    // Clicks the button to attempt a submission
    cy.get('#loginForm .btn.btn-success').click();

    // Because the form shows a message automatically when incorrect information is entered into the form
    // the only thing that needs to be assessed to determine that the login was unsuccessful is the fact that
    // the login button is still visible on the page- (Of course this would not be here if the login had gone smoothly)
    cy.get('#loginForm').should('be.visible');
  });

  // Test to log in and log out

  // (For the marking criteria: User can login with the login form with valid credentials.)
  // (For the marking criteria: User can log out with the logout button.)

  it('should allow the user to log in with valid credentials and then log out', () => {
    // Refreshes the page so we begin on the home page and with a fresh testing environment
    cy.visit('/');

    // Again- clicks the login button at the top of the page to focus on the correct login form:
    cy.get('button[data-auth="login"]').first().click();

    // Enters a valid Noroff email and password
    cy.get('#loginEmail').type('kitcas53614@stud.noroff.no');
    cy.get('#loginPassword').type('Noroff3354');

    // Clicks login button for submission, taking the user to the profile page
    cy.get('#loginForm .btn.btn-success').click();

    // If the login process was successful, the logout button should now be visible
    // This assesses that this is the case:
    cy.get('button[data-auth="logout"]').should('be.visible');

    // targets the now visible logout button
    cy.get('button[data-auth="logout"]').click();

    // Upon successful logging out of the profile page, the login button should again be visible
    // This assesses that this is the case, and was therefore a successful login *AND* logout process.
    cy.get('button[data-auth="login"]').should('be.visible');
  });
});
