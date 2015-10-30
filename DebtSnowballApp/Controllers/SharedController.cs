using System.Web.Mvc;

namespace DebtSnowballApp.Controllers
{
    public class SharedController : BaseController
    {
        public ActionResult dcMessageBox()
        {
            return PartialView();
        }
    }
}