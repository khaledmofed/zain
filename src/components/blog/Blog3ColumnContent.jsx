"use client";
import React from "react";
import Pagination from "react-paginate";
import blogData from "@/assets/jsonData/blog/BlogData.json";
import SingleBlog3Column from "./SingleBlog3Column";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Blog3ColumnContent = ({
  initialBlogs = null,
  meta = null,
  category = null,
  featured = null,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPageNumber = Math.max(1, Number(searchParams.get("page")) || 1);
  const [currentPage, setCurrentPage] = useState(currentPageNumber);

  const useApiData =
    Array.isArray(initialBlogs) && initialBlogs.length >= 0 && meta != null;
  const apiTotalPages = meta?.last_page ?? 1;
  const apiCurrentPage = meta?.current_page ?? 1;

  useEffect(() => {
    setCurrentPage(useApiData ? apiCurrentPage : currentPageNumber);
  }, [useApiData, apiCurrentPage, currentPageNumber]);

  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const fallbackBlogData = blogData.slice(startIndex, endIndex);
  const totalPagesFallback = Math.ceil(blogData.length / itemsPerPage);

  const currentBlogData = useApiData ? initialBlogs : fallbackBlogData;
  const totalPages = useApiData ? apiTotalPages : totalPagesFallback;
  const displayPage = useApiData ? apiCurrentPage : currentPage;

  const buildPaginatedUrl = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    if (category) params.set("category", category);
    if (featured !== undefined && featured !== null && featured !== "")
      params.set("featured", String(featured));
    const qs = params.toString();
    return qs ? `${pathname}?${qs}` : pathname;
  };

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
    router.push(buildPaginatedUrl(selectedPage));
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 200);
  };

  return (
    <>
      <div className="blog-area blog-grid default-padding">
        <div className="container">
          <div className="blog-item-box">
            <div className="row">
              {currentBlogData.map((blog) => (
                <div className="col-xl-4 col-md-6 single-item" key={blog.id}>
                  <SingleBlog3Column blog={blog} />
                </div>
              ))}
            </div>
          </div>

          {totalPages > 1 && (
            <div className="row">
              <div className="col-md-12 pagi-area text-center">
                <Pagination
                  forcePage={displayPage - 1}
                  previousLabel={
                    displayPage === 1 ? (
                      <i className="fas fa-ban"></i>
                    ) : (
                      <i className="fas fa-angle-double-left"></i>
                    )
                  }
                  nextLabel={
                    displayPage === totalPages ? (
                      <i className="fas fa-ban"></i>
                    ) : (
                      <i className="fas fa-angle-double-right"></i>
                    )
                  }
                  breakLabel="..."
                  pageCount={totalPages}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName="pagination text-center"
                  activeClassName="active"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousLinkClassName="page-link"
                  nextLinkClassName="page-link"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog3ColumnContent;
