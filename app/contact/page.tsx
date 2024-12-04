import AnimatedBackground from '../../components/AnimatedBackground'
import FadeIn from '../../components/FadeIn'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <AnimatedBackground />
      <FadeIn className="z-10 container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="page-title">Contact Us</h1>
          <p className="content-text mb-16 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Get in touch with us for any inquiries or collaboration opportunities.
          </p>
        </div>

        <div className="max-w-2xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-3 gradient-text">Sales Inquiries</h2>
            <p className="text-xl text-gray-200">sales@whitewolfstudio.co.za</p>
            <p className="text-lg text-gray-400 mt-2">For custom software solutions, app development, and other business opportunities</p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-3 gradient-text">Careers</h2>
            <p className="text-xl text-gray-200">careers@whitewolfstudio.co.za</p>
            <p className="text-lg text-gray-400 mt-2">Interested in joining our team? Send us your CV and portfolio</p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-3 gradient-text">Business Hours</h2>
            <p className="text-xl text-gray-200">Monday - Friday: 9:00 AM - 5:00 PM CET</p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 gradient-text">Follow Us</h2>
            <div className="flex space-x-6">
              <span className="text-gray-300 cursor-not-allowed">
                <FaTwitter size={32} />
              </span>
              <span className="text-gray-300 cursor-not-allowed">
                <FaFacebook size={32} />
              </span>
              <span className="text-gray-300 cursor-not-allowed">
                <FaInstagram size={32} />
              </span>
            </div>
          </div>
        </div>
      </FadeIn>
    </main>
  )
} 