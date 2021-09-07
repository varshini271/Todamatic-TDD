
describe('Edit the existing task', () => {
    it('Edit the task to the list', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="editSpan"]').contains('Sleep').parent().click()
        cy.get('.stack-small').find('[data-testid="editInputText"]').type('Play')
        cy.get('[data-testid="saveButton"]').click()
        cy.contains('Play')
        });
});