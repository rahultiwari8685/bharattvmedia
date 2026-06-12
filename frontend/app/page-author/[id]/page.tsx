"use client";

import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/author/Section1";
import Section2 from "@/components/sections/home-4/Section6";
import Ads from "@/components/elements/ads";

import Image from "next/image";

import { useEffect, useState } from "react";

import { useParams, useSearchParams } from "next/navigation";

import setting from "@/setting.json";

export default function Page_Author() {
  const params = useParams();

  const searchParams = useSearchParams();

  const page = searchParams.get("page") || "1";

  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const [author, setAuthor] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  // Fetch Author
  useEffect(() => {
    if (!id) return;

    setLoading(true);

    fetch(`${setting.api}/api/users/getUserById/${id}`)
      .then((res) => res.json())

      .then((data) => {
        console.log("AUTHOR DATA:", data);

        if (data.status) {
          setAuthor(data.data);
        }
      })

      .catch((err) => {
        console.error("Author Fetch Error:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  // Loading
  if (loading) {
    return (
      <Layout headerStyle={2} footerStyle={2}>
        <div className="container pt-100 text-center">
          <h4>Loading...</h4>
        </div>
      </Layout>
    );
  }

  return (
    <Layout headerStyle={2} footerStyle={2}>
      {/* Author Profile */}
      <div className="container pt-100">
        <div className="row">
          <div className="col-lg-6 col-md-8 mx-auto">
            <div className="card shadow border-0 rounded-4 p-4">
              {/* Author Image */}
              <div className="card-img mb-4 text-center">
                <img
                  className="rounded-circle avatar-154"
                  src={
                    author?.profileImage
                      ? author.profileImage.startsWith("http")
                        ? author.profileImage
                        : `${setting.api}/uploads/images/${author.profileImage}`
                      : "/assets/imgs/template/author/author-19.png"
                  }
                  alt={author?.name || "author"}
                  width={200}
                  height={200}
                />
              </div>

              {/* Author Details */}
              <div className="card-body text-center">
                {/* Name */}
                <h3 className="mb-3">{author?.name || "Admin"}</h3>

                {/* Bio */}
                <p className="mb-0 fs-7">
                  {author?.bio || "Latest news updates and trending stories."}
                </p>

                {/* Social Links */}
                <div
                  className="d-inline-flex group-social-icons bg-transparent mt-3"
                  id="toppagination"
                >
                  {/* Facebook */}
                  {author?.facebook && (
                    <a
                      href={author.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-shape icon-46"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                  )}

                  {/* Twitter */}
                  {author?.twitter && (
                    <a
                      href={author.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-shape icon-46"
                    >
                      <i className="bi bi-twitter-x"></i>
                    </a>
                  )}

                  {/* Linkedin */}
                  {author?.linkedin && (
                    <a
                      href={author.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-shape icon-46"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {id && (
        <Section1
          authorId={id.toString()}
          searchParams={{
            page,
          }}
        />
      )}

      {/* More Section */}
      <Section2 />
    </Layout>
  );
}
