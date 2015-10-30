using System.Web.Mvc;

namespace DebtSnowballApp.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult SampleHomePage()
        {
            return PartialView();
        }
    }
}