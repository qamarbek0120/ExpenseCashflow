using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ExpenseCashflow.Models
{
    public class Expense
    {
        public int Id { get; set; }

        private string _description;

        [Required(ErrorMessage = "Description is required!")]
        public string Description
        {
            get => _description;
            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Descriptoin can not be empty.");
                }
                _description = value;

            }
        }

        [Required(ErrorMessage = "Amount is required")]
        [Range(0.1, Double.MaxValue, ErrorMessage = "Min value is 0.1")]
        public double Amount { get; set; }

        [Required(ErrorMessage = "Date is required")]
        public DateTime Date { get; set; }
        public DateTime DateAdded { get; set; }
        public int? CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public Category? Category { get; set; }
    }
}
