import React, { useEffect, useState } from 'react'
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CBadge,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilBan } from '@coreui/icons'
import axios from 'axios'
import setting from '../../../setting.json'

const PlanList = ({ onEdit }) => {
  const [plans, setPlans] = useState([])

  const loadPlans = async () => {
    const res = await axios.get(`${setting.api}/api/plans/getAllPlans`)
    setPlans(res.data.data || [])
    console.log(res.data.data)
  }

  const toggleStatus = async (id) => {
    await axios.patch(`${setting.api}/api/plans/${id}/status`)
    loadPlans()
  }

  useEffect(() => {
    loadPlans()
  }, [])

  return (
    <CTable responsive hover>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>SR.No</CTableHeaderCell>
          <CTableHeaderCell>Name</CTableHeaderCell>
          <CTableHeaderCell>Price</CTableHeaderCell>
          <CTableHeaderCell>Billing</CTableHeaderCell>
          <CTableHeaderCell>Report Limit</CTableHeaderCell>
          <CTableHeaderCell>Status</CTableHeaderCell>
          <CTableHeaderCell>Action</CTableHeaderCell>
        </CTableRow>
      </CTableHead>

      <CTableBody>
        {plans.map((plan, i) => (
          <CTableRow key={plan._id}>
            <CTableDataCell>{i + 1}</CTableDataCell>
            <CTableDataCell>{plan.name}</CTableDataCell>
            <CTableDataCell>₹{plan.price}</CTableDataCell>
            <CTableDataCell>{plan.billing_cycle}</CTableDataCell>
            <CTableDataCell>{plan.report_limit}</CTableDataCell>
            <CTableDataCell>
              <CBadge color={plan.is_active ? 'success' : 'secondary'}>
                {plan.is_active ? 'Active' : 'Inactive'}
              </CBadge>
            </CTableDataCell>
            <CTableDataCell>
              <CButton size="sm" color="info" className="me-2" onClick={() => onEdit(plan)}>
                <CIcon icon={cilPencil} />
              </CButton>
              <CButton size="sm" color="warning" onClick={() => toggleStatus(plan._id)}>
                <CIcon icon={cilBan} />
              </CButton>
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  )
}

export default PlanList
