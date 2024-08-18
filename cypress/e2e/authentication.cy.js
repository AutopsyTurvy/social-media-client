// Authentication and Login:

// Login form testing with API JWT Tests:

describe('Login Form - API JWT Tests', () => {
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

    // This section checks that the authentication works by attempting to first submit the forms without filling them in-
    // This should fail to submit the form as the correct information is required to do so.
    cy.get('#loginForm').submit();

    // This part is there to verify that the form's input fields (email and password)
    // are set up *with* the required attribute.
    // This makes sure that the form forces the user to fill in these fields before form submission can be completed.
    cy.get('#loginEmail').should('have.attr', 'required');
    cy.get('#loginPassword').should('have.attr', 'required');
  });

  // This should enter valid email/ user info so that the required form is submitted and then receive a valid JWT token (hopefully)
  it('should submit the form and receive a valid JWT token', () => {
    cy.intercept('POST', '/api/login', (req) => {
      req.reply({
        statusCode: 200,
        body: {
          token: 'fake-jwt-token',
        },
      });
    }).as('loginRequest');

    // This opens the login modal so that there is no confusion as to where the tests are focused-
    cy.get('button[data-auth="login"]').first().click();

    // This should enter valid email/ user info so that the required form is submitted
    cy.get('#loginEmail').type('noroff-user@noroff.no');
    cy.get('#loginPassword').type('thisisyourpassword');

    cy.get('#loginForm button[type="submit"]').click();

    // Wait for the API call to complete and check the response
    cy.wait('@loginRequest').then((interception) => {
      assert.isNotNull(
        interception.response.body.token,
        'JWT token is present'
      );
    });
  });

  // Test to ensure that incorrect credentials display the correct error message...
  it('should display an error message with incorrect credentials', () => {
    cy.intercept('POST', '/api/login', {
      statusCode: 401,
      body: { message: 'Invalid email or password' },
    }).as('loginRequest');

    // again-- This opens the login modal so that there is no confusion as to where the tests are focused-
    cy.get('button[data-auth="login"]').first().click();

    // This should enter invalid email/ user info and fail to submit the form
    cy.get('#loginEmail').type('wrong-user@noroff.no');
    cy.get('#loginPassword').type('wrongpassword');

    cy.get('#loginForm button[type="submit"]').click();

    cy.wait('@loginRequest');

    // Verify that an error message is displayed
    cy.contains('Invalid email or password').should('be.visible');
  });
});
