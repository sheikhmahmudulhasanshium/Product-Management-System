import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const privacy_policy = () => {
  return (
    <div className='bg-white flex flex-col justify-center items-center  rounded-2xl'>
        <Header/>
      <header className='text-2xl font-bold'>
        <h1 className='p-2'>Privacy Policy</h1>
    </header>

    <main className='p-2 m-2'>
        <section>
            <h2 className='text-lg font-bold'>Information We Collect</h2>
            <p>Explain what type of information you collect from users, such as personal information, usage data, cookies, etc.</p>
        </section>

        <section>
            <h2 className='text-lg font-bold'>How We Use Your Information</h2>
            <p>Describe how you use the collected information, whether it's for improving the service, personalizing user experience, marketing, etc.</p>
        </section>

        <section>
            <h2 className='text-lg font-bold'>Cookies and Similar Technologies</h2>
            <p>Explain the use of cookies or similar technologies on your website and how they are used for tracking and analytics purposes.</p>
        </section>

        <section>
            <h2 className='text-lg font-bold'>Third-Party Disclosure</h2>
            <p>Clarify whether you share user information with third parties, and if so, under what circumstances.</p>
        </section>

        <section>
            <h2 className='text-lg font-bold'>Security</h2>
            <p>Detail the security measures you have implemented to protect user information from unauthorized access or disclosure.</p>
        </section>

        <section>
            <h2 className='text-lg font-bold'>Links to Other Sites</h2>
            <p>Inform users about any external links present on your website and state that you are not responsible for the content or privacy practices of those external sites.</p>
        </section>

        <section>
            <h2 className='text-lg font-bold'>Changes to this Privacy Policy</h2>
            <p>Explain that the privacy policy may be updated from time to time and provide a date for the last update.</p>
        </section>
    </main>

    <Footer/>
    </div>
  )
}

export default privacy_policy
