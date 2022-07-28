const user = {
  full_name: 'Miguel Andrade Barreto',
  email: 'miguelandradebarreto2@gmail.com',
  phone: '11 91447-3529',
  occupation: 'Dev fullstack',
  salary: '99999',
  type: 'CLT/PJ',
  about: 'Sou um cara legal :D'
}

describe('Home', () => {
  it('should be able to register and show data', () => {
    cy.visit('/')

    cy.get('input[name="full_name"]').clear().type('Miguel Andrade Barreto')
    cy.get('input[name="email"]')
      .clear()
      .type('miguelandradebarreto2@gmail.com')
    cy.get('input[name="phone"]').clear().type('11 91447-3529')

    cy.get('form > button').click()

    cy.get('input[name="occupation"]').clear().type('Dev fullstack')
    cy.get('input[name="salary"]').clear().type('99999')
    cy.get('input[name="type"]').clear().type('CLT/PJ')

    cy.get('form > button').click()

    cy.get('textarea').clear().type('Sou um cara legal :D')

    cy.get('form > button').click()

    cy.intercept('/users', { createdUser: user })

    Object.values(user).map(value =>
      expect(cy.get('section + section').contains(value))
    )
  })
})

export {}
