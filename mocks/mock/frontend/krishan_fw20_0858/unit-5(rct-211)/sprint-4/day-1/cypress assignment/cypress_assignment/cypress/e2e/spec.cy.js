describe('empty spec', () => {
  it('user should visit the page', () => {
    cy.visit('http://localhost:3000')
  })
  it('should autofocus the input box',()=>{
    cy.visit("http://localhost:3000");
    cy.get('.input-tag').first().focus()
  })
  it('should have the same input after typing',()=>{
    cy.visit("http://localhost:3000");
    cy.get('.input-tag').should('have.text',"")
    cy.get('.input-tag').type('Hello World');
    cy.get('.input-tag').should('have.value',"Hello World")
  })
})