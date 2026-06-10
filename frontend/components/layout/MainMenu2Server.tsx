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
    fetch(`${setting.api}/api/categories/getAllCategory`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCategories(data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // Parent Categories
  const parents = categories.filter(
    (cat) => !cat.parentCategory && String(cat.showInMenu) === "1",
  );

  return (
    <nav className="main-menu">
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link href="/">Home</Link>
        </li>

        {parents.map((parent) => {
          const children = categories.filter(
            (cat) =>
              cat.parentCategory?._id === parent._id &&
              String(cat.showInMenu) === "1",
          );

          return (
            <li
              key={parent._id}
              style={{
                position: "relative",
              }}
              className="menu-item"
            >
              <Link href={`/archive-1?category=${parent._id}`}>
                {parent.name}
              </Link>

              {children.length > 0 && (
                <ul
                  className="submenu"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    background: "#fff",
                    minWidth: "200px",
                    listStyle: "none",
                    padding: "10px 0",
                    margin: 0,
                    display: "none",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    zIndex: 999,
                  }}
                >
                  {children.map((child) => (
                    <li key={child._id}>
                      <Link
                        href={`/archive-1?category=${child._id}`}
                        style={{
                          display: "block",
                          padding: "8px 15px",
                        }}
                      >
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

      <style jsx>{`
        .menu-item:hover .submenu {
          display: block;
        }
      `}</style>
    </nav>
  );
}
