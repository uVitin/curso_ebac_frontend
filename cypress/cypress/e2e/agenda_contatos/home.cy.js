/// <reference types="cypress" />

describe('Teste para a página de Agenda de Contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })


    it('Deve incluir um contato', () => {
        cy.get('[type="text"]').type('Albert Vitor')
        cy.get('[type="email"]').type('teste@gmail.com')
        cy.get('[type="tel"]').type('11 91234-1234')
        cy.get('.adicionar').click()
    })

    it('Deve alterar um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('O Gian Souza')
        cy.get('[type="email"]').clear().type('ebac.online@gmail.com')
        cy.get('[type="tel"]').clear().type('11 91234-1234')
        cy.get('.alterar').click()
    })

    it('Deve deletar um contato', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
    })
})