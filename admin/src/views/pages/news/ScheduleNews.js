
import React, { useEffect, useState, useCallback } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormInput,
  CForm,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CPagination,
  CPaginationItem,
} from '@coreui/react'

import { cilTrash, cilPencil, cilReload } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import setting from '../../../setting.json'
import secureLocalStorage from 'react-secure-storage'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const ScheduleNews = () => {
  const navigate = useNavigate()

  const [newsList, setNewsList] = useState([])
  const [userList, setUserList] = useState([])
  const [categoryList, setCategoryList] = useState([])

  const [searchText, setSearchText] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedAuthor, setSelectedAuthor] = useState('')

  const itemsPerPage = 30

  // GET LOGIN INFORMATION
  const getLoginInfo = () => {
    try {
      const storedLogin = secureLocalStorage.getItem('logininfo')

      if (!storedLogin) return null

      return typeof storedLogin === 'string'
        ? JSON.parse(storedLogin)
        : storedLogin
    } catch (error) {
      console.error('Login information error:', error)
      return null
    }
  }

  // =========================================
  // FETCH SCHEDULED NEWS
  // =========================================
  const fetchNews = useCallback(async () => {
    try {
      setLoading(true)

      const loginInfo = getLoginInfo()

      if (!loginInfo?.token) {
        toast.error('Please login again')
        navigate('/login')
        return
      }

      // Separate Scheduled News API
      const res = await fetch(
        `${setting.api}/api/news/getAllScheduledNews?page=1&limit=1000`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${loginInfo.token}`,
          },
        },
      )

      const data = await res.json()

      if (!res.ok || data.status !== true) {
        throw new Error(data.message || 'Unable to fetch scheduled news')
      }

      const scheduledNews = (data.data || []).sort((a, b) => {
        const dateA = new Date(a.scheduledAt || 0).getTime()
        const dateB = new Date(b.scheduledAt || 0).getTime()

        return dateA - dateB
      })

      setNewsList(scheduledNews)
    } catch (error) {
      console.error('Fetch scheduled news error:', error)
      toast.error(error.message || 'Failed to fetch scheduled news')
    } finally {
      setLoading(false)
    }
  }, [navigate])

  // =========================================
  // FETCH CATEGORIES
  // =========================================
  const fetchCategories = async () => {
    try {
      const res = await fetch(
        `${setting.api}/api/categories/getAllCategory`,
      )

      const data = await res.json()

      if (data.status !== false) {
        setCategoryList(data.data || [])
      }
    } catch (error) {
      console.error('Category fetch error:', error)
    }
  }

  // =========================================
  // FETCH USERS
  // =========================================
  const fetchUsers = async () => {
    try {
      const loginInfo = getLoginInfo()

      if (!loginInfo?.token) return

      const res = await fetch(`${setting.api}/api/users/getAllUser`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${loginInfo.token}`,
        },
      })

      const data = await res.json()

      if (!res.ok || data.status === false) {
        return
      }

      setUserList(data.data || [])
    } catch (error) {
      console.error('Users fetch error:', error)
    }
  }

  // =========================================
  // INITIAL LOAD
  // =========================================
  useEffect(() => {
    fetchNews()
    fetchCategories()
    fetchUsers()
  }, [fetchNews])

  // =========================================
  // EDIT NEWS
  // =========================================
  const handleEdit = (news) => {
    navigate(`/UpdateNews/${news._id}`)
  }

  // =========================================
  // DELETE NEWS
  // =========================================
  const deleteNews = async (id) => {
    if (
      !window.confirm(
        'Are you sure you want to delete this scheduled news?',
      )
    ) {
      return
    }

    try {
      const loginInfo = getLoginInfo()

      if (!loginInfo?.token) {
        toast.error('Please login again')
        navigate('/login')
        return
      }

      const response = await fetch(
        `${setting.api}/api/news/deleteNews/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${loginInfo.token}`,
          },
        },
      )

      const data = await response.json()

      if (!response.ok || data.status !== true) {
        throw new Error(data.message || 'Delete failed')
      }

      toast.success('Scheduled news deleted successfully')

      setNewsList((prev) => prev.filter((item) => item._id !== id))
    } catch (error) {
      console.error('Delete news error:', error)
      toast.error(error.message || 'Something went wrong')
    }
  }

  // =========================================
  // FILTER NEWS
  // =========================================
  const filteredNews = newsList.filter((news) => {
    const titleMatch = (news.title || '')
      .toLowerCase()
      .includes(searchText.toLowerCase())

    const authorId =
      typeof news.author === 'object'
        ? news.author?._id
        : news.author

    const authorMatch =
      !selectedAuthor || String(authorId) === String(selectedAuthor)

    const categoryMatch =
      !selectedCategory ||
      news.categories?.some(
        (cat) => String(cat._id || cat) === String(selectedCategory),
      )

    const newsDate = news.scheduledAt
      ? new Date(news.scheduledAt)
      : null

    const fromMatch =
      !fromDate ||
      (newsDate && newsDate >= new Date(`${fromDate}T00:00:00`))

    const toMatch =
      !toDate ||
      (newsDate && newsDate <= new Date(`${toDate}T23:59:59.999`))

    return (
      titleMatch &&
      authorMatch &&
      categoryMatch &&
      fromMatch &&
      toMatch
    )
  })

  // =========================================
  // PAGINATION
  // =========================================
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage)

  const paginatedItems = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [searchText, selectedAuthor, selectedCategory, fromDate, toDate])

  // =========================================
  // FORMAT DATE
  // =========================================
  const formatDate = (date) => {
    if (!date) return 'Schedule date not set'

    const parsedDate = new Date(date)

    if (Number.isNaN(parsedDate.getTime())) {
      return 'Invalid date'
    }

    return parsedDate.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
  }

  // =========================================
  // UI
  // =========================================
  return (
    <CCard className="shadow-sm border-0 rounded-4">
      <CCardHeader className="bg-dark text-white fw-bold px-4 py-3">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
          <h5 className="mb-0">
            <i className="bi bi-calendar-check-fill me-2 text-warning"></i>
            Schedule News ({filteredNews.length})
          </h5>

          <CButton
            color="light"
            size="sm"
            onClick={fetchNews}
            disabled={loading}
          >
            <CIcon icon={cilReload} className="me-1" />
            Refresh
          </CButton>
        </div>
      </CCardHeader>

      <CCardBody>
        {/* FILTERS */}
        <CForm className="mb-4">
          <CRow className="g-3">
            <CCol md={3}>
              <CFormInput
                type="date"
                label="From Date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </CCol>

            <CCol md={3}>
              <CFormInput
                type="date"
                label="To Date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </CCol>

            <CCol md={3}>
              <label className="form-label">Category</label>

              <select
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>

                {categoryList.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </CCol>

            <CCol md={3}>
              <label className="form-label">Author</label>

              <select
                className="form-select"
                value={selectedAuthor}
                onChange={(e) => setSelectedAuthor(e.target.value)}
              >
                <option value="">All Authors</option>

                {userList.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </CCol>

            <CCol md={12}>
              <CFormInput
                label="Search News"
                placeholder="Search by title..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </CCol>
          </CRow>
        </CForm>

        {/* TABLE */}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status" />
            <p className="mt-2">Loading scheduled news...</p>
          </div>
        ) : (
          <>
            <CTable align="middle" hover responsive bordered>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>#</CTableHeaderCell>
                  <CTableHeaderCell>Title</CTableHeaderCell>
                  <CTableHeaderCell>Category</CTableHeaderCell>
                  <CTableHeaderCell>Author</CTableHeaderCell>
                  <CTableHeaderCell>Scheduled At</CTableHeaderCell>
                  <CTableHeaderCell>Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>

              <CTableBody>
                {paginatedItems.length > 0 ? (
                  paginatedItems.map((news, index) => {
                    const actualIndex =
                      (currentPage - 1) * itemsPerPage + index

                    return (
                      <CTableRow key={news._id}>
                        <CTableDataCell>
                          {actualIndex + 1}
                        </CTableDataCell>

                        <CTableDataCell>
                          {news.title}
                        </CTableDataCell>

                        <CTableDataCell>
                          {news.categories?.length > 0
                            ? news.categories
                                .map((cat) => cat.name || 'Unknown')
                                .join(', ')
                            : '-'}
                        </CTableDataCell>

                        <CTableDataCell>
                          {news.author?.name || 'N/A'}
                        </CTableDataCell>

                        <CTableDataCell>
                          {formatDate(news.scheduledAt)}
                        </CTableDataCell>

                        <CTableDataCell>
                          <div className="d-flex gap-2">
                            <CButton
                              size="sm"
                              color="primary"
                              onClick={() => handleEdit(news)}
                            >
                              <CIcon icon={cilPencil} /> Edit
                            </CButton>

                            <CButton
                              size="sm"
                              color="danger"
                              onClick={() => deleteNews(news._id)}
                            >
                              <CIcon icon={cilTrash} /> Delete
                            </CButton>
                          </div>
                        </CTableDataCell>
                      </CTableRow>
                    )
                  })
                ) : (
                  <CTableRow>
                    <CTableDataCell
                      colSpan={6}
                      className="text-center py-4"
                    >
                      No scheduled news found.
                    </CTableDataCell>
                  </CTableRow>
                )}
              </CTableBody>
            </CTable>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-4">
                <CPagination align="center">
                  <CPaginationItem
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(1, prev - 1))
                    }
                  >
                    Previous
                  </CPaginationItem>

                  {Array.from(
                    { length: totalPages },
                    (_, i) => i + 1,
                  )
                    .filter(
                      (page) =>
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 2 &&
                          page <= currentPage + 2),
                    )
                    .map((page, index, arr) => (
                      <React.Fragment key={page}>
                        {index > 0 &&
                          page - arr[index - 1] > 1 && (
                            <CPaginationItem disabled>
                              ...
                            </CPaginationItem>
                          )}

                        <CPaginationItem
                          active={currentPage === page}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </CPaginationItem>
                      </React.Fragment>
                    ))}

                  <CPaginationItem
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setCurrentPage((prev) =>
                        Math.min(totalPages, prev + 1),
                      )
                    }
                  >
                    Next
                  </CPaginationItem>
                </CPagination>
              </div>
            )}
          </>
        )}
      </CCardBody>
    </CCard>
  )
}

export default ScheduleNews
