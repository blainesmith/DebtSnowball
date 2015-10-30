using System.Web.Mvc;

namespace DebtSnowballApp.Controllers
{
    public class AccountController : Controller
    {
        //
        // GET: /Account/

        public ActionResult SampleAccountPage()
        {
            return PartialView();
        }
    }
}