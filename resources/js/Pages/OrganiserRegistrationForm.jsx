import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

const OrganiserRegistrationForm = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    address: '',
    phone_number: '',
    description: '',
  });

  const submit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', data);
    post(route('organiser.register'), data);

    
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <Head title="Organiser Registration" />

      <form onSubmit={submit} className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-600">
            Address
          </label>
          <input
            id="address"
            name="address"
            value={data.address}
            className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
            autoComplete="address"
            onChange={(e) => setData('address', e.target.value)}
            required
          />
          {errors.address && <span className="mt-2 text-red-500">{errors.address}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="phone_number" className="block text-sm font-medium text-gray-600">
            Phone Number
          </label>
          <input
            id="phone_number"
            type="text"
            name="phone_number"
            value={data.phone_number}
            className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
            onChange={(e) => setData('phone_number', e.target.value)}
            required
          />
          {errors.phone_number && <span className="mt-2 text-red-500">{errors.phone_number}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={data.description}
            className="mt-1 block w-full h-40 px-4 py-2 border border-blue-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
            onChange={(e) => setData('description', e.target.value)}
            required
          ></textarea>
          {errors.description && <span className="mt-2 text-red-500">{errors.description}</span>}
        </div>

        <div className="flex items-center justify-end mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
            disabled={processing}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrganiserRegistrationForm;
