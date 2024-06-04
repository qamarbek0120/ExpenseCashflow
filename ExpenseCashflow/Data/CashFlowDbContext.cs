using ExpenseCashflow.Models;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace ExpenseCashflow.Data
{
    public class CashFlowDbContext:DbContext
    {
        public CashFlowDbContext(DbContextOptions<CashFlowDbContext> options) : base(options) { }
        public DbSet<Expense> Flows { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
