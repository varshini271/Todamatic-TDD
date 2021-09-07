
describe('Delete the existing task', () => {
    it('Delete the task from the list', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="deleteSpan"]').contains('Sleep').parent().click()
        cy.findByLabelText('Sleep').should('not.exist')
        });
});