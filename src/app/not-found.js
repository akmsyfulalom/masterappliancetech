import React from 'react';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
const NotFoundPage = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-light">
      <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
          <div className="border-t border-gray-200 text-center pt-8">
            <h1 className="text-9xl font-bold text-primary">404</h1>
            <h1 className="text-6xl font-medium py-8 text-red-600">oops! Page not found</h1>
            <p className="text-2xl pb-8 px-12 font-medium">
              Oops! The page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <PrimaryButton buttonLink={'/'} buttonTitle={"Home"} textColor={'#1D202F'} />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
