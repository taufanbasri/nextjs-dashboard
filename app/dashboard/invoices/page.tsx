import { lusitana } from '@/app/ui/fonts'
import { CreateInvoice } from '@/app/ui/invoices/buttons'
import InvoicesTable from '@/app/ui/invoices/table'
import Search from '@/app/ui/search'
import { InvoicesTableSkeleton } from '@/app/ui/skeletons'
import { Suspense } from 'react'

interface InvoicePageProps {
    searchParams?: {
        query?: string
        page?: string
    }
}

async function InvoicePage({ searchParams }: InvoicePageProps) {
    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1

    return (
        <div className='w-full'>
            <div className='flex w-full items-center justify-between'>
                <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
            </div>

            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder='Search invoices...' />
                <CreateInvoice />
            </div>

            <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
                <InvoicesTable query={query} currentPage={currentPage} />
            </Suspense>

            <div className='mt-5 flex w-full justify-center'>

            </div>
        </div>
    )
}

export default InvoicePage