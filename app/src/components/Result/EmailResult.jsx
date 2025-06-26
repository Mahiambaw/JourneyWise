// EmailResult.jsx
import React, { useState } from 'react';
import emailjs from  '@emailjs/browser';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import axios from 'axios';
import Buttons from '../Buttons/Buttons';
import './emailResult-custom.css'
import EmailConfirmation from './EmailConfirmation';
import Spinner from './Spinner';

const EmailResult = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  const capturePdf = async (element) => {
    const canvas = await html2canvas(element, {
      width: element.offsetWidth,
      height: element.offsetHeight,
      scrollY: -window.scrollY,
      scrollX: -window.scrollX,
      scale: 2 // Higher resolution for PDF
    });
  
    const pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
    pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, canvas.width, canvas.height);
    
    return pdf;
  };
  
  const uploadFileToCloudinary = async (file) => {
    try {
      const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/upload`;
      
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'doctyxnj');
      formData.append('tags', 'browser_upload');
      formData.append('resource_type', 'auto');
      
      const response = await axios.post(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      return response.data.secure_url;
    } catch (error) {
      console.error('Error uploading file to Cloudinary:', error);
      throw new Error('Failed to upload file to Cloudinary');
    }
  };

  const handleEmailResult = async (e) => {
    e.preventDefault();
    const element = document.getElementById('result-container');
    
    if (!element) {
      alert('Result container not found');
      return;
    }
    
    setIsLoading(true);

    try {
      const pdf = await capturePdf(element);
      const pdfBlob = pdf.output('blob');

      // Upload the PDF to Cloudinary
      const fileUrl = await uploadFileToCloudinary(new File([pdfBlob], 'result.pdf', { type: 'application/pdf' }));

      // Send the email with the PDF link
      const templateParams = {
        user_email: email,
        message: 'Here is your result',
        link: fileUrl
      };

      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_ID,
      );

      setSubmitButtonClicked(true);

    } catch (error) {
      console.error('Error generating or sending email:', error);
      alert('Failed to generate or send email. Please try again.');
    } finally {
      setIsLoading(false); 
    }
  };

  if (submitButtonClicked) {
    return <EmailConfirmation />;
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 md:p-8 bg-white rounded-xl shadow-lg">
      <form onSubmit={handleEmailResult} className="space-y-4">
        <div className="flex justify-center mb-4">
          <img 
            src="/mdi_email-plus.svg" 
            alt="Email icon"
            className="w-12 h-12 md:w-16 md:h-16"
          />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-center">Review Your Results</h3>
        <p className="text-base text-center mb-6">
          Input your email below and we'll send you a printable PDF of your results.
        </p>
        
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Buttons
            type="button"
            variant="secondary"
            className="w-full sm:w-auto"
            onClick={onClose}
          >
            CANCEL
          </Buttons>
          <Buttons
            primary
            rounded
            type="submit"
            className="w-full sm:w-auto"
            disabled={isLoading}
          >
            {isLoading ? 'SENDING...' : 'SEND RESULTS'}
          </Buttons>
        </div>
        
        {isLoading && (
          <div className="flex justify-center mt-6">
            <Spinner />
          </div>
        )}
      </form>
    </div>
  );
};

export default EmailResult;