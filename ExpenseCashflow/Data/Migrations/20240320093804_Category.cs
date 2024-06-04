using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ExpenseCashflow.Data.Migrations
{
    public partial class Category : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CategoryId",
                table: "Flows",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    categoryName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Flows_CategoryId",
                table: "Flows",
                column: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Flows_Categories_CategoryId",
                table: "Flows",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Flows_Categories_CategoryId",
                table: "Flows");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropIndex(
                name: "IX_Flows_CategoryId",
                table: "Flows");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "Flows");
        }
    }
}
