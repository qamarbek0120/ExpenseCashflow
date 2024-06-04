using ExpenseCashflow.Data;
using ExpenseCashflow.Models;
using Microsoft.EntityFrameworkCore;

namespace ExpenseCashflow.Repositories
{
    public class CategoryRepository: ICategoryRepository
    {
        private readonly CashFlowDbContext _dbContext;
        public CategoryRepository(CashFlowDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task CreateCategory(Category category)
        {
            await _dbContext.AddAsync(category);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteCategory(int id)
        {
            var category = await _dbContext.Categories.FirstOrDefaultAsync(x => x.Id == id);
            if (category != null)
            {
                _dbContext.Categories.Remove(category);
                await _dbContext.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Category>> GetAllCategories()
        {
            var categories = await _dbContext.Categories.ToListAsync();
            return categories;
        }


        public async Task<Category> GetCategoryById(int id)
        {
            return await _dbContext.Categories.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task UpdateCategory(Category category)
        {
            _dbContext.Entry(category).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }
    }
}
