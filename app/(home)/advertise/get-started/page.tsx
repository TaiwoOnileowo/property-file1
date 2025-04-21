import CheckoutFlow from '@/components/advertise/CheckoutFlow'
import ClientOnly from '@/providers/ClientOnly'
import React from 'react'

const GetStarted = () => {
  return (
    <div className="py-[100px] flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">Ready to Grow Your Business?</h1>
          <p className="text-center text-gray-600 mb-8">Fill out the form below and our advertising team will contact you within 24 hours.</p>
          
          <ClientOnly>
            <CheckoutFlow />
          </ClientOnly>
        </div>
      </div>
    </div>
  )
}

export default GetStarted