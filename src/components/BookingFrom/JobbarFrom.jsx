
'use client'
import React, { useEffect } from 'react';

const JobbarForm = () => {
    useEffect(() => {
        // Generate a unique ID for the script
        const scriptId = 'jobbar-script';
      
        // Check if the script has already been appended
        const existingScript = document.getElementById(scriptId);
      
        if (!existingScript) {
          const script = document.createElement('script');
          script.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';
          script.setAttribute('clienthub_id', '623f04d2-9301-4ef0-b667-c67229c82601');
          script.setAttribute('form_url', 'https://clienthub.getjobber.com/client_hubs/623f04d2-9301-4ef0-b667-c67229c82601/public/work_request/embedded_work_request_form');
          script.async = true;
          script.id = scriptId;
      
          document.head.appendChild(script);
      
          // Cleanup script when component is unmounted
          return () => {
            document.head.removeChild(script);
          };
        }
      }, []);
      

  return (
    <div>
      {/* The div element for embedding the form */}
      <div id="623f04d2-9301-4ef0-b667-c67229c82601"></div>

      {/* Link to the external stylesheet */}
      <link rel="stylesheet" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" media="screen" />
    </div>
  );
};

export default JobbarForm;

