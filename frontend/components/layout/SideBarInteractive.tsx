"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import useSidebarMenu from "@/util/useSidebarMenu";
import setting from "@/setting.json";

type Category = {
  _id: string;
  name: string;
  showInMenu?: number | string;
};

export default function SideBarInteractive() {
  const { toggleSidebar } = useSidebarMenu();

  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch(`${setting.api}/api/categories/getAllCategory`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCategories(data.data || []);
        }
      })
      .catch((err) => console.log("Category Error:", err));
  }, []);

  const toggleMenu = (menuKey: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  const handleCollapseToggle = (e: React.MouseEvent, menuKey: string) => {
    e.preventDefault();
    toggleMenu(menuKey);
  };

  const handleLinkClick = () => {
    toggleSidebar(false);
  };

  return (
    <ul className="sidebar-nav list-unstyled ps-0">
      <li className={`nav-item collapse ${openMenus["category"] ? "active" : ""}`}>
        <a
          className="nav-link mb-2 collapse-toggle"
          href="#"
          onClick={(e) => handleCollapseToggle(e, "category")}
        >
          Categories
        </a>

        <ul className="collapse-menu d-flex flex-column gap-1 list-unstyled">
          {categories.length > 0 ? (
            categories.map((cat) => (
              <li key={cat._id}>
                <Link
                  className="collapse-item"
                  href={`/archive-1?category=${cat._id}`}
                  onClick={handleLinkClick}
                >
                  {cat.name}
                </Link>
              </li>
            ))
          ) : (
            <li className="text-muted px-2">Loading...</li>
          )}
        </ul>
      </li>
    </ul>
  );
}