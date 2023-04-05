using Microsoft.EntityFrameworkCore;

namespace MovieAPI.Model
{
    //Contex file for the Movies database
    public class MovieDBContex : DbContext
    {
        public MovieDBContex(DbContextOptions<MovieDBContex> options) : base(options) { }

        public DbSet<Movie> Movies { get; set; }
    }
}
