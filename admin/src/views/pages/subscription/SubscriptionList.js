import React, { useEffect, useState } from "react";
import {
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
    CButton,
    CBadge
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPencil, cilBan } from "@coreui/icons";
import axios from "axios";
import setting from "../../../setting.json";

const SubscriptionList = ({ onEdit }) => {
    const [subs, setSubs] = useState([]);
    const API_URL = `${setting.api}/api/subscriptions`;

    const loadSubscriptions = async () => {
        const res = await axios.get(API_URL);
        setSubs(res.data.data || []);
    };

    const cancelSubscription = async (id) => {
        await axios.patch(`${API_URL}/${id}/cancel`);
        loadSubscriptions();
    };

    useEffect(() => {
        loadSubscriptions();
    }, []);

    return (
        <CTable responsive hover>
            <CTableHead>
                <CTableRow>
                    <CTableHeaderCell>Customer</CTableHeaderCell>
                    <CTableHeaderCell>Plan</CTableHeaderCell>
                    <CTableHeaderCell>Start</CTableHeaderCell>
                    <CTableHeaderCell>End</CTableHeaderCell>
                    <CTableHeaderCell>Status</CTableHeaderCell>
                    <CTableHeaderCell>Action</CTableHeaderCell>
                </CTableRow>
            </CTableHead>

            <CTableBody>
                {subs.map((s) => (
                    <CTableRow key={s._id}>
                        <CTableDataCell>{s.customer_id?.name}</CTableDataCell>
                        <CTableDataCell>{s.plan_id?.name}</CTableDataCell>
                        <CTableDataCell>
                            {new Date(s.start_date).toLocaleDateString()}
                        </CTableDataCell>
                        <CTableDataCell>
                            {new Date(s.end_date).toLocaleDateString()}
                        </CTableDataCell>
                        <CTableDataCell>
                            <CBadge color={s.status === "active" ? "success" : "secondary"}>
                                {s.status}
                            </CBadge>
                        </CTableDataCell>
                        <CTableDataCell>
                            <CButton
                                size="sm"
                                color="info"
                                className="me-2"
                                onClick={() => onEdit(s)}
                            >
                                <CIcon icon={cilPencil} />
                            </CButton>

                            <CButton
                                size="sm"
                                color="danger"
                                onClick={() => cancelSubscription(s._id)}
                            >
                                <CIcon icon={cilBan} />
                            </CButton>
                        </CTableDataCell>
                    </CTableRow>
                ))}
            </CTableBody>
        </CTable>
    );
};

export default SubscriptionList;
