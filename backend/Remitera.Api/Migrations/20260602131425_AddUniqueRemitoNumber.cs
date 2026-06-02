using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Remitera.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddUniqueRemitoNumber : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Remitos_NumeroRemito",
                table: "Remitos",
                column: "NumeroRemito",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Remitos_NumeroRemito",
                table: "Remitos");
        }
    }
}
