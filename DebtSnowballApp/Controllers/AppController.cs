using System.Web.Mvc;

namespace DebtSnowballApp.Controllers
{
    public class AppController : BaseController
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}

