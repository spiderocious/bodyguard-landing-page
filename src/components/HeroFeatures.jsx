import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, CreditCard, Shield, Users } from "lucide-react";

const HeroAndFeatures = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-[#264653] to-[#2A9D8F]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <span className="text-sm font-medium">Trusted by 10,000+ clients</span>
              </motion.div>
              <motion.h1 
                className="text-5xl sm:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Elite Security
                <br />
                <span className="text-[#2A9D8F]">At Your Command</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Book verified professional bodyguards instantly. Whether
                it&apos;s for an hour or a day, elite protection is one click away.
              </motion.p>
              <motion.div 
                className="flex gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <a className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-medium 
                  hover:bg-[#2A9D8F] hover:text-white transition-all duration-300 
                  flex items-center gap-3 shadow-xl shadow-white/10 hover:shadow-[#2A9D8F]/20 cursor-pointer" href="https://app.luxeliteafrica.com/auth/login" target="_blank">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                {/* <button className="px-8 py-4 rounded-xl font-medium border-2 border-white/20 text-white
                  hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Learn More
                </button> */}
              </motion.div>
              <motion.div 
                className="mt-12 grid grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                {[
                  { number: "500+", label: "Elite Guards" },
                  { number: "10k+", label: "Clients Protected" },
                  { number: "4.9/5", label: "Client Rating" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square rounded-3xl flex items-center justify-center relative">
                <img
                  src="/app.png"
                  alt="Mobile app screenshot"
                  className="w-auto h-full rounded-xl shadow-2xl relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2A9D8F]/20 to-[#264653]/20 rounded-xl blur-3xl" />
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#2A9D8F]/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#2A9D8F]" />
                  </div>
                  <div>
                    <div className="font-medium text-white">
                      Verified Guards
                    </div>
                    <div className="text-sm text-gray-300">
                      100% Background Checked
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900" id="clients">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Security Made Simple
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Book professional bodyguards in minutes. Our platform ensures a
              seamless experience for both clients and security professionals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">@@ .. @@
            {/* Feature 1 */}
            <motion.div 
              className="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-[#2A9D8F]/50 
                transition-all duration-300 hover:bg-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-14 h-14 rounded-lg bg-[#2A9D8F]/20 flex items-center justify-center mb-6
                group-hover:bg-[#2A9D8F]/30 transition-colors duration-300">
                <Clock className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Instant Booking
              </h3>
              <p className="text-gray-300">
                Book a verified bodyguard in less than 5 minutes. Choose your
                duration and location, and we&apos;ll handle the rest.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-[#2A9D8F]/50 
                transition-all duration-300 hover:bg-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-14 h-14 rounded-lg bg-[#2A9D8F]/20 flex items-center justify-center mb-6
                group-hover:bg-[#2A9D8F]/30 transition-colors duration-300">
                <CreditCard className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Transparent Pricing
              </h3>
              <p className="text-gray-300">
                Clear hourly rates with no hidden fees. Pay securely through the
                app and get detailed digital receipts.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-[#2A9D8F]/50 
                transition-all duration-300 hover:bg-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-14 h-14 rounded-lg bg-[#2A9D8F]/20 flex items-center justify-center mb-6
                group-hover:bg-[#2A9D8F]/30 transition-colors duration-300">
                <Users className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Verified Professionals
              </h3>
              <p className="text-gray-300">
                All bodyguards undergo rigorous background checks and are
                professionally certified. Your safety is our priority.
              </p>
            </motion.div>

            {/* Feature 4 */}
            {/* <motion.div 
              className="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-[#2A9D8F]/50 
                transition-all duration-300 hover:bg-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-14 h-14 rounded-lg bg-[#2A9D8F]/20 flex items-center justify-center mb-6
                group-hover:bg-[#2A9D8F]/30 transition-colors duration-300">
                <Shield className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Insurance Coverage
              </h3>
              <p className="text-gray-300">
                Every booking includes comprehensive insurance coverage for your
                peace of mind.
              </p>
            </motion.div> */}

            {/* Feature 5 */}
            {/* <motion.div 
              className="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-[#2A9D8F]/50 
                transition-all duration-300 hover:bg-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="w-14 h-14 rounded-lg bg-[#2A9D8F]/20 flex items-center justify-center mb-6
                group-hover:bg-[#2A9D8F]/30 transition-colors duration-300">
                <Smartphone className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Real-time Tracking
              </h3>
              <p className="text-gray-300">
                Track your bodyguard's location in real-time and stay
                connected through our secure in-app messaging.
              </p>
            </motion.div> */}

            {/* Feature 6 */}
            <motion.div 
              className="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-[#2A9D8F]/50 
                transition-all duration-300 hover:bg-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="w-14 h-14 rounded-lg bg-[#2A9D8F]/20 flex items-center justify-center mb-6
                group-hover:bg-[#2A9D8F]/30 transition-colors duration-300">
                <CheckCircle className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Flexible Duration
              </h3>
              <p className="text-gray-300">
                Book for as little as 3 hours or as long as you need. Extend
                your booking anytime through the app.
              </p>
            </motion.div>
          </div>
        </div>
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
              Book a Bodyguard now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
      </section>
    </>
  );
};

export default HeroAndFeatures;
