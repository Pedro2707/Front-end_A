import { BiHome } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const panelData = [
    {
      title: "Inicio",
      icon: BiHome,
      link: "/dashboard",
    },
    {
      title: "Personas",
      icon: BsPeople,
      link: "/dashboard/personas/1",
    },
    {
      title: "Citas",
      icon: BsPeople,
      link: "/dashboard/citas/1",
    },
  ];

  return (
    <div className="flex">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white shadow-lg"
        aria-label="Sidebar"
      >
        <div className="h-full px-4 py-6 overflow-y-auto bg-gradient-to-b from-gray-800 to-gray-600">
          <a href="/" className="flex items-center pl-2.5 mb-8">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2rC6mKlm3Wj324Y_Ukz5l7JNcQz-nYvbgA&s"
              className="h-6 mr-3 sm:h-7"
              alt="Logo"
            />
            <span className="self-center text-xl font-semibold text-white">
             Menu
            </span>
          </a>
          <ul className="space-y-4">
            {panelData.map(({ title, icon: Icon, link }) => (
              <li key={`left.panel.title.${title}`}>
                <Link
                  to={link}
                  className="flex items-center p-3 text-white rounded-lg hover:bg-gray-700"
                >
                  <Icon className="w-6 h-6 text-gray-300" />
                  <span className="ml-4 text-lg">{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="flex-1 p-6 bg-gray-100 sm:ml-64">
        <div className="flex justify-between items-center mb-8">
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
