/// <reference types="cypress" />

describe('Sign in screen', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should find app logo', () => {
    cy.get('h1').contains('Chatify')
  })
})
