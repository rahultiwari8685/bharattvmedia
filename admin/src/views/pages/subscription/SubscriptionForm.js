import React, { useEffect, useState } from "react";
import {
    CForm,
    CFormSelect,
    CButton,
    CRow,
    CCol
} from "@coreui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import setting from "../../../setting.json";

const SubscriptionForm = ({ editSub, onSuccess }) => {
    const { register, handleSubmit, reset } = useForm();
    const [customers, setCustomers] = useState([]);
    const [plans, setPlans] = useState([]);

    const API_URL = `${setting.api}/api/subscriptions`;

    useEffect(() => {
        if (editSub) reset(editSub);

        const loadData = async () => {
            const c = await axios.get(`${setting.api}/api/customers`);
            const p = await axios.get(`${setting.api}/api/plans/getAllPlan`);
            setCustomers(c.data.data || []);
            setPlans(p.data.data || []);
        };

        loadData();
    }, [editSub, reset]);

    const submitForm = async (data) => {
        if (editSub) {
            await axios.put(`${API_URL}/${editSub._id}`, data);
        } else {
            await axios.post(API_URL, data);
        }
        onSuccess();
    };

    return (
        <CForm onSubmit={handleSubmit(submitForm)}>
            <CRow>
                <CCol md={6}>
                    <CFormSelect label="Customer" {...register("customer_id")} required>
                        <option value="">Select Customer</option>
                        {customers.map(c => (
                            <option key={c._id} value={c._id}>{c.name}</option>
                        ))}
                    </CFormSelect>
                </CCol>

                <CCol md={6}>
                    <CFormSelect label="Plan" {...register("plan_id")} required>
                        <option value="">Select Plan</option>
                        {plans.map(p => (
                            <option key={p._id} value={p._id}>{p.name}</option>
                        ))}
                    </CFormSelect>
                </CCol>
            </CRow>

            <div className="mt-3">
                <CButton type="submit" color="success">
                    {editSub ? "Update Subscription" : "Assign Subscription"}
                </CButton>
            </div>
        </CForm>
    );
};

export default SubscriptionForm;
