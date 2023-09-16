"use client";
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

function ContactSection() {
    const [state, handleSubmit] = useForm("myForm");
    
    if (state.succeeded) {
      return <p className='flex items-center justify-center mt-12 text-4xl font-semibold'>Thanks for reaching out! :D </p>;
    }
    return (
      <form onSubmit={handleSubmit} className="flex flex-col" id="contact">
        <h1 className='text-3xl font-semibold flex items-center justify-center mt-12'>Contact Me</h1>
      <div className='flex flex-col items-center justify-center'>
      <label htmlFor="email" className='font-semibold mt-8 mb-3'>
        Email Address
      </label>
      <input
        className='w-full md:w-1/4 mb-3 text-black text-sm p-1 rounded flex justify-center'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <p className='font-semibold mb-3'>Message</p>
      <textarea
      className='w-full md:w-1/3 h-[150px] text-black p-1 rounded'
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} 
      className="font-extrabold flex items-center justify-center mt-4 px-3 py-2 border rounded-full text-[#ADB7BE] border-slate-300 hover:text-white hover:border-white">
        Submit
      </button>
    </div>
    </form>
  );
}

export default ContactSection