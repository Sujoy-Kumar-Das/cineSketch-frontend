import { IUserRoles } from "@/interface/IUser";
import { routes } from "@/routes";

const routeGenerator = (role: IUserRoles) => {
  return routes
    .filter((item) => {
      return item.role.includes(role);
    })
    .map((item) => ({
      title: item.title,
      link: item.link,
      icon: item.icon,
    }));
};

export default routeGenerator;
