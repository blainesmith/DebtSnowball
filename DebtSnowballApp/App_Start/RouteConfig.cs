using System.Web.Mvc;
using System.Web.Routing;

namespace DebtSnowballApp.App_Start
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "xfer",
                url: "{controller}/{action}/{sessionKey}/{ticks}/{handshake}",
                defaults: new { controller = "Shared", action = "Xfer" },
                constraints: new { controller = "^Shared$", action = "^Xfer$" }
                );

            routes.MapRoute(
                name: "Index",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "App", action = "Index", id = UrlParameter.Optional }
                );
        }
    }
}