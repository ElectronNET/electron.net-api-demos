using Microsoft.AspNetCore.Mvc;

namespace ElectronNET_API_Demos.Controllers
{
    public class DesktopCapturerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}