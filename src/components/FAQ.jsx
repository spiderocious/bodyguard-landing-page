import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Briefcase, Calendar, ChevronDown, ChevronUp, DollarSign, Star } from 'lucide-react';
import { useRef, useState } from 'react';

const BodyguardsAndFAQ = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const constraintsRef = useRef(null);

  const faqs = [
    {
      question: "How do I book a bodyguard?",
      answer: "Booking a bodyguard is simple: Download our app, create an account, select your desired date and duration, choose from available bodyguards, and confirm your booking. Payment is processed securely through the app."
    },
    {
      question: "What are the requirements to become a bodyguard on the platform?",
      answer: "To join as a bodyguard, you must: Be at least 18 years old, have valid security certification, pass our background check and complete our platform verification proces."
    },
    {
      question: "How does payment work?",
      answer: "All payments are processed securely through the app. Clients pay when booking, and bodyguards receive payment after completing their assignments according to the agreed terms."
    },
    {
      question: "Can I choose my working hours?",
      answer: "Yes, bodyguards have full flexibility to set their own availability. You can update your schedule through the app, choose which bookings to accept, and set your preferred working areas."
    }
  ];

  return (
    <>
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900" id="bodyguards">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <span className="text-sm font-medium text-white">Become a bodyguard</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Join Our Professional Security Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Turn your security expertise into a profitable career. Set your own hours, 
              choose your assignments, and earn competitive rates.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Earning Potential
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#2A9D8F]/20 flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-[#2A9D8F]" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">You set your own rates</div>
                      <div className="text-sm text-gray-300">Competitive rates</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#2A9D8F]/20 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-[#2A9D8F]" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Flexible Schedule</div>
                      <div className="text-sm text-gray-300">Work when you want</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#2A9D8F]/20 flex items-center justify-center">
                      <Star className="w-6 h-6 text-[#2A9D8F]" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Performance Bonuses</div>
                      <div className="text-sm text-gray-300">Earn more with high ratings</div>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div 
                className="relative"
                ref={constraintsRef}
              >
                <img
                  src="app2.png"
                  alt="Bodyguard using app"
                  className="rounded-xl shadow-2xl w-full h-[1/2] relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2A9D8F]/20 to-[#264653]/20 rounded-xl blur-3xl" />
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20"
                  drag
                  dragConstraints={constraintsRef}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#2A9D8F]/30 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-[#2A9D8F]" />
                    </div>
                    <div>
                      <div className="font-medium text-white">Flexible Work</div>
                      <div className="text-sm text-gray-300">Set your own schedule</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <div className="w-full flex items-center justify-center">

            <motion.div 
              className="group bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 
                hover:border-[#2A9D8F]/50 transition-all duration-300 hover:bg-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-lg bg-[#2A9D8F]/20 flex items-center justify-center mb-6
                group-hover:bg-[#2A9D8F]/30 transition-colors duration-300">
                <Star className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Background Check
              </h3>
              <p className="text-gray-300">
                Must pass comprehensive background check and maintain clean record.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-lg" id="faq">
        <div className="container mx-auto max-w-3xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <span className="text-sm font-medium text-white">Got Questions?</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our platform and services.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#2A9D8F]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#2A9D8F]" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-white/5">
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <a className="group w-fit bg-white text-gray-900 px-8 py-4 rounded-xl font-medium 
              hover:bg-[#2A9D8F] hover:text-white transition-all duration-300 
              flex items-center gap-3 mx-auto shadow-xl shadow-white/10 hover:shadow-[#2A9D8F]/20" href="https://app.luxeliteafrica.com/auth/login" target="_blank">
              Join as a bodyguard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BodyguardsAndFAQ;