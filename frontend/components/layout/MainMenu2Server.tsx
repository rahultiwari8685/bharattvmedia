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

  // Parent Categories
  const parentCategories = categories.filter(
    (cat) => !cat.parentCategory && String(cat.showInMenu) === "1",
  );

  return (
    <>
      <nav className="main-menu">
        <ul className="menu-list">
          <li>
            <Link href="/">Home</Link>
          </li>

          {parentCategories.map((parent) => {
            const children = categories.filter(
              (cat) =>
                cat.parentCategory?._id === parent._id &&
                String(cat.showInMenu) === "1",
            );

            return (
              <li
                key={parent._id}
                className={`menu-item ${
                  children.length > 0 ? "has-dropdown" : ""
                }`}
              >
                <Link href={`/archive-1?category=${parent._id}`}>
                  {parent.name}
                  {children.length > 0 && <span className="arrow">▼</span>}
                </Link>

                {children.length > 0 && (
                  <ul className="submenu">
                    {children.map((child) => (
                      <li key={child._id}>
                        <Link href={`/archive-1?category=${child._id}`}>
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <style jsx>{`
        .menu-list {
          display: flex;
          gap: 24px;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }

        .menu-item {
          position: relative;
        }

        .menu-item > a {
          text-decoration: none;
          color: #000;
        }

        .arrow {
          margin-left: 5px;
          font-size: 10px;
        }

        .submenu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 220px;
          background: #fff;
          list-style: none;
          margin: 0;
          padding: 8px 0;
          border: 1px solid #eee;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 9999;
        }

        .submenu li a {
          display: block;
          padding: 10px 15px;
          color: #000;
          text-decoration: none;
          white-space: nowrap;
        }

        .submenu li a:hover {
          background: #f5f5f5;
        }

        .menu-item:hover .submenu {
          display: block;
        }
      `}</style>
    </>
  );
}
