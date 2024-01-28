import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import './SocialMediaForm.css';

const SocialMediaForm = () => {
  const [showLinkedIn, setShowLinkedIn] = useState(false);
  const [showFacebook, setShowFacebook] = useState(false);
  const [showTwitter, setShowTwitter] = useState(false);
  const [showWebsite, setShowWebsite] = useState(false);

  const { data, setData, post, processing, errors, reset } = useForm({
    linkedin: '',
    facebook: '',
    twitter: '',
    website: '',
  });

  const handleDropdownChange = (key, value) => {
    // Set the data value to 'NIL' if the user selects 'No'
    setData(key, value === 'yes' ? '' : 'NIL');

    switch (key) {
      case 'linkedin':
        setShowLinkedIn(value === 'yes');
        break;
      case 'facebook':
        setShowFacebook(value === 'yes');
        break;
      case 'twitter':
        setShowTwitter(value === 'yes');
        break;
      case 'website':
        setShowWebsite(value === 'yes');
        break;
      default:
        break;
    }
  };

  const getPlaceholder = (key) => {
    return key === 'website' && showWebsite ? 'Enter URL' : '';
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', data);
    post(route('socialMedia.register'), data);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <Head title="Social Media Registration" />

      <form onSubmit={submit} className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">

        <div className="mb-4">
          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-600">
            LinkedIn
          </label>
          <div className="flex items-center">
            <select
              className="mr-2 p-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => handleDropdownChange('linkedin', e.target.value)}
            >
              <option placeholder="Choose">Choose</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            {showLinkedIn && (
              <input
                id="linkedin"
                name="linkedin"
                value={data.linkedin}
                placeholder={getPlaceholder('linkedin')}
                className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
                onChange={(e) => setData('linkedin', e.target.value)}
                required
              />
            )}
          </div>
          {errors.linkedin && <span className="mt-2 text-red-500">{errors.linkedin}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="facebook" className="block text-sm font-medium text-gray-600">
            Facebook
          </label>
          <div className="flex items-center">
            <select
              className="mr-2 p-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => handleDropdownChange('facebook', e.target.value)}
            >
              <option placeholder="Choose">Choose</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            {showFacebook && (
              <input
                id="facebook"
                name="facebook"
                value={data.facebook}
                placeholder={getPlaceholder('facebook')}
                className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
                onChange={(e) => setData('facebook', e.target.value)}
                required
              />
            )}
          </div>
          {errors.facebook && <span className="mt-2 text-red-500">{errors.facebook}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="twitter" className="block text-sm font-medium text-gray-600">
            Twitter
          </label>
          <div className="flex items-center">
            <select
              className="mr-2 p-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => handleDropdownChange('twitter', e.target.value)}
            >
              <option placeholder="Choose">Choose</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            {showTwitter && (
              <input
                id="twitter"
                name="twitter"
                value={data.twitter}
                placeholder={getPlaceholder('twitter')}
                className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
                onChange={(e) => setData('twitter', e.target.value)}
                required
              />
            )}
          </div>
          {errors.twitter && <span className="mt-2 text-red-500">{errors.twitter}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="website" className="block text-sm font-medium text-gray-600">
            Website
          </label>
          <div className="flex items-center">
            <select
              className="mr-2 p-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => handleDropdownChange('website', e.target.value)}
            >
              <option placeholder="Choose">Choose</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            {showWebsite && (
              <input
                id="website"
                name="website"
                value={data.website}
                placeholder={getPlaceholder('website')}
                className="mt-1 block w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
                onChange={(e) => setData('website', e.target.value)}
                required
              />
            )}
          </div>
          {errors.website && <span className="mt-2 text-red-500">{errors.website}</span>}
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

export default SocialMediaForm;
