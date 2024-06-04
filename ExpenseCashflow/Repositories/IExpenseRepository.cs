using ExpenseCashflow.Models;

namespace ExpenseCashflow.Repositories
{
    public interface IExpenseRepository
    {
        Task<IEnumerable<Expense>> GetAllExpenses();
        Task<Expense> GetExpenseById(int id);
        Task CreateExpense(Expense expense);
        Task UpdateExpense(Expense expense);
        Task DeleteExpense(int id);
    }
}
