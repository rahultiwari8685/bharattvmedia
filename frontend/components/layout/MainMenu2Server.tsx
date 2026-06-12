"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import setting from "../../setting.json";

type Category = {
  _id: string;
  name: string;
  position: number;
  showInMenu: boolean;
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
        const res = await fetch(`${setting.api}/api/categories/menu`);

        const data = await res.json();

        if (data.success) {
          const sortedCategories = data.data.sort(
            (a: Category, b: Category) => (a.position || 0) - (b.position || 0),
          );

          setCategories(sortedCategories);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const parentCategories = categories
    .filter((cat) => !cat.parentCategory)
    .sort((a, b) => (a.position || 0) - (b.position || 0));

  return (
    <>
      <li className="nav-item">
        <Link className="nav-link link-effect-1 data-link-alt" href="/">
          <span>Home</span>
        </Link>
      </li>

      {parentCategories.slice(0, 4).map((parent) => {
        const children = categories
          .filter((cat) => cat.parentCategory?._id === parent._id)
          .sort((a, b) => (a.position || 0) - (b.position || 0));

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
