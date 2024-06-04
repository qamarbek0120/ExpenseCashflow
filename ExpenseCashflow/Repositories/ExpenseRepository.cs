using ExpenseCashflow.Data;
using ExpenseCashflow.Models;
using Microsoft.EntityFrameworkCore;

namespace ExpenseCashflow.Repositories
{
    public class ExpenseRepository:IExpenseRepository
    {
        private readonly CashFlowDbContext _dbContext;
        public ExpenseRepository(CashFlowDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task CreateExpense(Expense expense)
        {
            await _dbContext.AddAsync(expense);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteExpense(int id)
        {
            var expense = await _dbContext.Flows.FirstOrDefaultAsync(x => x.Id == id);
            if (expense != null)
            {
                _dbContext.Flows.Remove(expense);
                await _dbContext.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Expense>> GetAllExpenses()
        {
            return await _dbContext.Flows.Include(b=> b.Category).ToListAsync();
        }

        public async Task<Expense> GetExpenseById(int id)
        {
            var expense = await _dbContext.Flows.Include(b=> b.Category).FirstOrDefaultAsync(b => b.Id == id);
            return expense;
        }

        public async Task UpdateExpense(Expense expense)
        {
            _dbContext.Entry(expense).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }
    }
}
