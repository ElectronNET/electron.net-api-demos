using Microsoft.AspNetCore.Mvc;

namespace ElectronNET_API_Demos.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}