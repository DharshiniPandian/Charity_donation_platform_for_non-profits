import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

const FundProviderRegistrationForm = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    profilePhoto: null,
    phone: '',
    age: '',
    gender: '',          
    address: '',        
    occupation: '',     
    dateOfBirth: '',    
  });

  const submit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', data);
    post(route('fundProvider.register'), data);
  };

  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-blue-100">
      <br></br>
      <h2 className="text-2xl font-extrabold text-blue-400">Create Your Profile</h2>
      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-opacity-50 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <Head title="Fund Provider Registration" />

        <form onSubmit={submit} className="mt-8 space-y-6">
          <div className="mb-4">
            <label htmlFor="profilePhoto" className="block text-sm font-medium text-gray-600">
              Profile Photo
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
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              value={data.phone}
              className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setData('phone', e.target.value)}
              required
            />
            {errors.phone && <span className="mt-2 text-red-500">{errors.phone}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium text-gray-600">
              Age
            </label>
            <input
              id="age"
              type="text"
              name="age"
              value={data.age}
              className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setData('age', e.target.value)}
              required
            />
            {errors.age && <span className="mt-2 text-red-500">{errors.age}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={data.gender}
              className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setData('gender', e.target.value)}
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <span className="mt-2 text-red-500">{errors.gender}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-600">
              Date of Birth
            </label>
            <input
              id="dateOfBirth"
              type="date"
              name="dateOfBirth"
              value={data.dateOfBirth}
              className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setData('dateOfBirth', e.target.value)}
              required
            />
            {errors.dateOfBirth && <span className="mt-2 text-red-500">{errors.dateOfBirth}</span>}
          </div>


          <div className="mb-4">
            <label htmlFor="occupation" className="block text-sm font-medium text-gray-600">
              Occupation
            </label>
            <input
              id="occupation"
              type="text"
              name="occupation"
              value={data.ocuupation}
              className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setData('occupation', e.target.value)}
              required
            />
            {errors.address && <span className="mt-2 text-red-500">{errors.age}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
              Address
            </label>
            <input
              id="address"
              type="text"
              name="address"
              value={data.address}
              className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setData('address', e.target.value)}
              required
            />
            {errors.address && <span className="mt-2 text-red-500">{errors.age}</span>}
          </div>

          <div className="flex items-center justify-end mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md focus:outline-none"
              disabled={processing}
            >
              Register
            </button>
          </div>
        </form>
      </div>
   <br></br>
     </div>
  );
};

export default FundProviderRegistrationForm;
