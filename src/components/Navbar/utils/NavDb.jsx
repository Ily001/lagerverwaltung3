import {ArchiveBoxIcon, ViewColumnsIcon, ArrowRightOnRectangleIcon, BuildingOffice2Icon, ClipboardDocumentCheckIcon, PresentationChartLineIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline"

export const navLinks = [
  {
    id: 0,
    title: "Inventar",
    icon: <PresentationChartLineIcon className="nav-icon " />,
  },
  {
    id: 1,
    title: "Bestellungen",
    icon: <ShoppingCartIcon className="nav-icon" />,
  },
  {
    id: 2,
    title: "Lagerübersicht",
    icon: <BuildingOffice2Icon className="nav-icon" />,
  },
  {
    id: 3,
    title: "Lagerartikel",
    icon: <ArchiveBoxIcon className="nav-icon" />,
  },
  {
    id: 4,
    title: "Bestandübersicht",
    icon: <ClipboardDocumentCheckIcon className="nav-icon" />,
  },
 
  {
    id: 5,
    title: "Admin",
    icon: <UserIcon className="nav-icon" />,
  },
  {
    id: 6,
    title: "Abmelden",
    icon: <ArrowRightOnRectangleIcon className="nav-icon" />,
  },
];