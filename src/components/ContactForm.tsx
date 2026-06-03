import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xrevgepk');
  
  if (state.succeeded) {
      return (
        <div className="p-8 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-2xl text-center">
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">Message Sent!</h3>
            <p className="text-green-700 dark:text-green-400">Thanks for reaching out. I'll get back to you soon.</p>
        </div>
      );
  }
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-lg mx-auto bg-white dark:bg-gray-900 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 p-8 rounded-2xl shadow-sm text-left">
      <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            required 
            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all dark:text-white"
            placeholder="you@example.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
      </div>
      
      <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
          <textarea 
            id="message" 
            name="message" 
            required 
            rows={4}
            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all dark:text-white resize-y"
            placeholder="How can I help you?"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
      </div>
      
      <button 
        type="submit" 
        disabled={state.submitting}
        className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
