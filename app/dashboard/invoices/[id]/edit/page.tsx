import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import EditInvoiceForm from '@/app/ui/invoices/edit-form'
import { notFound } from 'next/navigation'
import React from 'react'

const breadcrumbs = [
    { label: 'Invoices', href: '/invoices' },
    { label: 'Create Invoice', href: '/invoices/create', active: true },
]

async function EditInvoicePage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params
    const id = params.id

    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers()
    ])

    if (!invoice) {
        notFound()
    }

    return (
        <main>
            <Breadcrumbs breadcrumbs={breadcrumbs} />

            <EditInvoiceForm invoice={invoice} customers={customers} />
        </main>
    )
}

export default EditInvoicePage