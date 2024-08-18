// Authentication and Login:

// Login form testing:

describe('Login Form - Simplified Tests', () => {
  beforeEach(() => {
    // Adding notes now-
    // The below URL ensures that the correct page is loaded anew before each set of tests
    // It ensures that the tests are always started from the same point.
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  // This section ensures that email and password are both entered before submission of the forms,
  // both are required
  it('should require email and password before submitting', () => {
    // This opens the login modal so that there is no confusion as to where the tests are focused-
    cy.get('button[data-auth="login"]').first().click();

    //This section checks that the authentication works by attempting to first submit the forms without filling them in-
    // This should fail to submit the form as the correct information is required to do so.
    cy.get('#loginForm').submit();

    //  This part is there to verify that the form's input fields (email and password)
    // are set up *with* the required attribute.
    // This makes sure that the form forces the user to fill in these fields before form submission can be completed.
    cy.get('#loginEmail').should('have.attr', 'required');
    cy.get('#loginPassword').should('have.attr', 'required');
  });

  // This should enter valid email/ user info so that the required form is submitted
  it('should submit the form with valid inputs', () => {
    cy.get('button[data-auth="login"]').first().click();

    cy.get('#loginEmail').type('noroff-user@noroff.no');
    cy.get('#loginPassword').type('thisisyourpassword');

    cy.get('#loginForm button[type="submit"]').click();
  });
});
