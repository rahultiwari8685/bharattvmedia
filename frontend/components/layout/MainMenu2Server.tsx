"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import setting from "../../setting.json";

type Category = {
  _id: string;
  name: string;
  showInMenu?: string | number;
  parentCategory?: {
    _id: string;
    name: string;
  } | null;
};

export default function MainMenu2Server() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${setting.api}/api/categories/getAllCategory`);

        const data = await res.json();

        if (data.success) {
          setCategories(data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const parentCategories = categories.filter(
    (cat) => !cat.parentCategory && String(cat.showInMenu) === "1",
  );

  return (
    <>
      <li className="nav-item">
        <Link className="nav-link link-effect-1 data-link-alt" href="/">
          <span>Home</span>
        </Link>
      </li>

      {parentCategories.map((parent) => {
        const children = categories.filter(
          (cat) =>
            cat.parentCategory?._id === parent._id &&
            String(cat.showInMenu) === "1",
        );

        // Parent With Submenu
        if (children.length > 0) {
          return (
            <li key={parent._id} className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle link-effect-1 data-link-alt"
                href="#"
              >
                <span>{parent.name}</span>
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    href={`/archive-1?category=${parent._id}`}
                  >
                    All {parent.name}
                  </Link>
                </li>

                {children.map((child) => (
                  <li key={child._id}>
                    <Link
                      className="dropdown-item"
                      href={`/archive-1?category=${child._id}`}
                    >
                      {child.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        }

        // Normal Menu Item
        return (
          <li key={parent._id} className="nav-item">
            <Link
              className="nav-link link-effect-1 data-link-alt"
              href={`/archive-1?category=${parent._id}`}
            >
              <span>{parent.name}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
}
