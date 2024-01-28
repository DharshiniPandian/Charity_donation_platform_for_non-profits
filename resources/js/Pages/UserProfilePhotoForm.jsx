import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

const UserProfilePhotoForm = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    profilePhoto: null,
    certificate: null,
  });

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('profilePhoto', data.profilePhoto);
    formData.append('certificate', data.certificate);

    try {
      // Send files to the server using FormData
      await post(route('user.uploadProfilePhoto'), formData);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <Head title="Profile Photo and Certificate Upload" />

      <form onSubmit={submit} className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <div className="mb-4">
          <label htmlFor="profilePhoto" className="block text-sm font-medium text-gray-600">
            Profile Photo (JPG or PNG)
          </label>
          <input
            id="profilePhoto"
            name="profilePhoto"
            type="file"
            accept=".jpg, .jpeg, .png"
            className="mt-1 block w-full"
            onChange={(e) => setData('profilePhoto', e.target.files[0])}
            required
          />
          {errors.profilePhoto && <span className="mt-2 text-red-500">{errors.profilePhoto}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="certificate" className="block text-sm font-medium text-gray-600">
            Certificate (PDF)
          </label>
          <input
            id="certificate"
            name="certificate"
            type="file"
            accept=".pdf"
            className="mt-1 block w-full"
            onChange={(e) => setData('certificate', e.target.files[0])}
            required
          />
          {errors.certificate && <span className="mt-2 text-red-500">{errors.certificate}</span>}
        </div>

        <div className="flex items-center justify-end mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
            disabled={processing}
          >
            Upload Photo and Certificate
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfilePhotoForm;
