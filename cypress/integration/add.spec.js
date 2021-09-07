describe('Adding a new task', () => {
    it('Add the task to the list', () => {
        cy.visit('http://localhost:3000');
        cy.get('#new-todo-input').type('Play')
        cy.get('[data-testid="addButton"]').click();
        cy.contains('Play')
        });
});