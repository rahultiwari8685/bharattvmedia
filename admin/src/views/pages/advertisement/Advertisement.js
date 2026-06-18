import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CForm,
  CFormInput,
  CFormSelect,
  CFormLabel,
  CRow,
  CCol,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasBody,
  CPagination,
  CPaginationItem,
} from '@coreui/react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import secureLocalStorage from 'react-secure-storage'
import setting from '../../../setting.json'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilTrash } from '@coreui/icons'

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  position: yup.string().required('Position is required'),
  priority: yup.number().required(),
  redirectUrl: yup.string(),
  image: yup.mixed(),
})

const Advertisement = () => {
  const [advertisements, setAdvertisements] = useState([])
  const [editingAdvertisement, setEditingAdvertisement] = useState(null)
  const [visible, setVisible] = useState(false)
  const [preview, setPreview] = useState('')
  const [search, setSearch] = useState('')

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    if (editingAdvertisement) {
      reset({
        title: editingAdvertisement.title,
        position: editingAdvertisement.position,
        priority: editingAdvertisement.priority,
        redirectUrl: editingAdvertisement.redirectUrl,
        status: editingAdvertisement.status,
      })

      setPreview(`${setting.api}/uploads/images/${editingAdvertisement.image}`)
    }
  }, [editingAdvertisement])

  const getAdvertisements = async () => {
    try {
      const token = JSON.parse(secureLocalStorage.getItem('logininfo'))?.token

      const res = await fetch(`${setting.api}/api/advertisements`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()

      if (data.success) {
        setAdvertisements(data.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAdvertisements()
  }, [])

  const saveAdvertisement = async (data) => {
    const formData = new FormData()

    formData.append('title', data.title)
    formData.append('position', data.position)
    formData.append('priority', data.priority)
    formData.append('redirectUrl', data.redirectUrl)
    formData.append('status', data.status)

    if (data.image?.[0]) {
      formData.append('image', data.image[0])
    }

    const token = JSON.parse(secureLocalStorage.getItem('logininfo'))?.token

    let endpoint = '/api/advertisements/create'

    if (editingAdvertisement) {
      endpoint = `/api/advertisements/update/${editingAdvertisement._id}`
    }

    const res = await fetch(setting.api + endpoint, {
      method: editingAdvertisement ? 'PUT' : 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })

    const result = await res.json()

    if (result.success) {
      getAdvertisements()
      setVisible(false)
      reset()
      setPreview('')
      setEditingAdvertisement(null)
    }
  }

  const handleEdit = (item) => {
    setEditingAdvertisement(item)
    setVisible(true)
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete Advertisement?')) return

    const token = JSON.parse(secureLocalStorage.getItem('logininfo'))?.token

    await fetch(`${setting.api}/api/advertisements/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    getAdvertisements()
  }

  const filtered = advertisements.filter(
    (x) =>
      x.title.toLowerCase().includes(search.toLowerCase()) ||
      x.position.toLowerCase().includes(search.toLowerCase()),
  )

  const totalPages = Math.ceil(filtered.length / itemsPerPage)

  const paginatedItems = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  return (
    <>
      <CCard className="shadow border-0 rounded-4">
        <CCardHeader className="bg-dark text-white fw-bold px-4 py-3 shadow-sm">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">📢 Advertisement Management</h5>

            <CButton
              color="light"
              variant="outline"
              className="rounded-pill px-4"
              onClick={() => {
                setEditingAdvertisement(null)
                setPreview('')
                reset()
                setVisible(true)
              }}
            >
              + Create Advertisement
            </CButton>
          </div>
        </CCardHeader>

        <CCardBody>
          <CRow className="mb-4">
            <CCol md={4}>
              <CFormInput
                placeholder="Search Advertisement..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </CCol>
          </CRow>

          <CTable striped hover responsive bordered>
            <CTableHead color="dark">
              <CTableRow>
                <CTableHeaderCell>#</CTableHeaderCell>

                <CTableHeaderCell>Image</CTableHeaderCell>

                <CTableHeaderCell>Title</CTableHeaderCell>

                <CTableHeaderCell>Position</CTableHeaderCell>

                <CTableHeaderCell>Priority</CTableHeaderCell>

                <CTableHeaderCell>Status</CTableHeaderCell>

                <CTableHeaderCell>Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>

            <CTableBody>
              {paginatedItems.length > 0 ? (
                paginatedItems.map((item, index) => (
                  <CTableRow key={item._id}>
                    <CTableDataCell>{(currentPage - 1) * itemsPerPage + index + 1}</CTableDataCell>

                    <CTableDataCell>
                      <img
                        src={`${setting.api}/uploads/images/${item.image}`}
                        width="90"
                        height="60"
                        alt=""
                        style={{
                          objectFit: 'cover',
                          borderRadius: '8px',
                        }}
                      />
                    </CTableDataCell>

                    <CTableDataCell>
                      <strong>{item.title}</strong>
                    </CTableDataCell>

                    <CTableDataCell>
                      <span className="badge bg-info">{item.position}</span>
                    </CTableDataCell>

                    <CTableDataCell>{item.priority}</CTableDataCell>

                    <CTableDataCell>
                      <span className={`badge ${item.status ? 'bg-success' : 'bg-danger'}`}>
                        {item.status ? 'Active' : 'Inactive'}
                      </span>
                    </CTableDataCell>

                    <CTableDataCell>
                      <CButton
                        size="sm"
                        color="warning"
                        className="me-2 rounded-pill"
                        onClick={() => handleEdit(item)}
                      >
                        <CIcon icon={cilPencil} />
                      </CButton>

                      <CButton
                        size="sm"
                        color="danger"
                        className="rounded-pill"
                        onClick={() => handleDelete(item._id)}
                      >
                        <CIcon icon={cilTrash} />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))
              ) : (
                <CTableRow>
                  <CTableDataCell colSpan={7} className="text-center">
                    No Advertisement Found
                  </CTableDataCell>
                </CTableRow>
              )}
            </CTableBody>
          </CTable>

          <div className="d-flex justify-content-end mt-4">
            <CPagination>
              {[...Array(totalPages)].map((_, i) => (
                <CPaginationItem
                  key={i}
                  active={currentPage === i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </CPaginationItem>
              ))}
            </CPagination>
          </div>
        </CCardBody>
      </CCard>

      {/* Offcanvas starts here */}

      <COffcanvas
        placement="end"
        visible={visible}
        onHide={() => setVisible(false)}
        backdrop={true}
      >
        <COffcanvasHeader closeButton>
          <strong>{editingAdvertisement ? 'Update Advertisement' : 'Create Advertisement'}</strong>
        </COffcanvasHeader>

        <COffcanvasBody>
          <CForm onSubmit={handleSubmit(saveAdvertisement)}>
            <CRow className="mb-3">
              <CCol md={12}>
                <CFormInput
                  label="Advertisement Title"
                  placeholder="Enter Advertisement Title"
                  {...register('title')}
                />
                {errors.title && <small className="text-danger">{errors.title.message}</small>}
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={12}>
                <CFormInput
                  label="Redirect URL"
                  placeholder="https://pinkchoice.in/product/1"
                  {...register('redirectUrl')}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormSelect label="Position" {...register('position')}>
                  <option value="">Select Position</option>

                  <option value="home_top">Home Top</option>

                  <option value="home_middle">Home Middle</option>

                  <option value="home_bottom">Home Bottom</option>

                  <option value="sidebar">Sidebar</option>

                  <option value="popup">Popup</option>

                  <option value="footer">Footer</option>
                </CFormSelect>

                {errors.position && (
                  <small className="text-danger">{errors.position.message}</small>
                )}
              </CCol>

              <CCol md={6}>
                <CFormInput
                  type="number"
                  label="Priority"
                  placeholder="1"
                  {...register('priority')}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol md={12}>
                <CFormSelect label="Status" {...register('status')}>
                  <option value={true}>Active</option>
                  <option value={false}>Inactive</option>
                </CFormSelect>
              </CCol>
            </CRow>

            <CRow className="mb-4">
              <CCol md={12}>
                <CFormLabel>Advertisement Image</CFormLabel>

                <CFormInput
                  type="file"
                  accept="image/*"
                  {...register('image')}
                  onChange={(e) => {
                    const file = e.target.files[0]

                    if (file) {
                      setPreview(URL.createObjectURL(file))
                    }
                  }}
                />
              </CCol>
            </CRow>

            {preview && (
              <div className="text-center mb-4">
                <img
                  src={preview}
                  alt=""
                  style={{
                    width: '100%',
                    maxHeight: '220px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    border: '1px solid #ddd',
                  }}
                />
              </div>
            )}

            <div className="d-flex justify-content-end">
              <CButton
                color={editingAdvertisement ? 'warning' : 'success'}
                type="submit"
                className="rounded-pill px-4"
              >
                {editingAdvertisement ? 'Update Advertisement' : 'Save Advertisement'}
              </CButton>
            </div>
          </CForm>
        </COffcanvasBody>
      </COffcanvas>
    </>
  )
}

export default Advertisement
