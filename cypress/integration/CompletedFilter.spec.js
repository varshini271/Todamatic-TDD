
describe('Filter the existing task', () => {
    it('Filter the task in the list', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="filterSpan"]').contains('Completed').parent().click()
        cy.get('.c-cb').get('[data-testid="displayTask"]').should('be.checked');
        });
});