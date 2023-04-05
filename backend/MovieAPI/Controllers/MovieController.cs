using Microsoft.AspNetCore.Mvc;
using MovieAPI.Model;

//Movie controller to create an instance
namespace MovieAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDBContex context;

        public MovieController(MovieDBContex temp) 
        {
            context = temp;
        }

        public IEnumerable<Movie> Get()
        {
            var x = context.Movies
            .Where(x => x.Edited == "Yes")
            .OrderBy(x => x.Title);

            return x;
        }
    }
}
