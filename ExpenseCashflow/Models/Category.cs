using System.ComponentModel.DataAnnotations;

namespace ExpenseCashflow.Models
{
    public class Category
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Full Name of the Author is required!")]
        public string categoryName { get; set; }
    }
}
