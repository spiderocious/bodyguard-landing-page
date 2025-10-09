import { useState } from 'react';

const DataDeletion = () => {
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', reason: '' });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate an async deletion process
    await new Promise((r) => setTimeout(r, 2200));
    setLoading(false);
    setDone(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
        {!done ? (
          <>
            <h1 className="text-2xl font-bold mb-4">Request Data Deletion</h1>
            <p className="text-gray-700 mb-6">Complete the form below to request deletion of your personal data. We will process
              verifiable requests as required by applicable law. This form simulates the
              deletion flow and does not actually delete data in this demo.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full name</label>
                <input name="fullName" required value={form.fullName} onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#2A9D8F] focus:border-[#2A9D8F]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input name="email" type="email" required value={form.email} onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#2A9D8F] focus:border-[#2A9D8F]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone number</label>
                <input name="phone" required value={form.phone} onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#2A9D8F] focus:border-[#2A9D8F]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Reason for deletion (optional)</label>
                <textarea name="reason" value={form.reason} onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#2A9D8F] focus:border-[#2A9D8F]" />
              </div>

              <div className="pt-4">
                <button type="submit" disabled={loading}
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#2A9D8F] text-white px-4 py-2 rounded-md hover:bg-[#248579] disabled:opacity-60">
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                  ) : null}
                  {loading ? 'Processing deletion...' : 'Request Deletion'}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Account Deleted</h2>
            <p className="text-gray-700">Thank you. Your data deletion request has been processed and your account has been deleted from our demo system.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataDeletion;
