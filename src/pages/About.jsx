import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Lightbulb, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const About = () => {
  const handleClick = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries and exploring new frontiers in technology.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together to achieve extraordinary results.',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering the highest quality in everything we do.',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building trust through transparency and ethical practices.',
      gradient: 'from-red-400 to-pink-500'
    }
  ];

  const leadership = [
    {
      name: 'VENKATESWARLU KATARI',
      position: 'Founder & Operations Head ',
      experience: '12+ years Expirence',
      image: 'public/venkat-profile.jpg'
    },
    {
      name: 'M.AMARNATH REDDY',
      position: 'Regional Sales Manager – Bangalore',
      experience: '11+ years Expirence',
      image: '/amar.jpg'
    },
    {
      name: 'ANAND.B',
      position: 'Full Stack Developer',
      experience: '2+ years of Expirence in Web Development',
      image: '/anand.jpg'
    },
  ];

  const milestones = [
    { year: '2024', title: 'Company Founded', description: 'Started with a vision to revolutionize semiconductor design services.' },
    { year: '2025', title: 'First Major Client', description: 'Secured partnership with leading automotive semiconductor company.' },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle bg-gradient-to-r from-green-400 to-blue-500"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 4 + 4}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              About NXTsilicon
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Pioneering technology solutions since 2009, we've been at the forefront of 
              semiconductor innovation and engineering excellence.
            </p>
          </motion.div>

          <div className="flex flex-col items-center justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 w-full max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-white">Our Story</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Founded with a vision to revolutionize the semiconductor industry, NXTsilicon Technologies 
                has grown from a small startup to a global leader in engineering services. Our journey 
                began with a simple belief: that innovation thrives when brilliant minds collaborate 
                to solve complex challenges.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Today, we serve clients across the globe, delivering cutting-edge solutions that power 
                the next generation of technology. From automotive systems to consumer electronics, 
                our expertise spans multiple industries and applications.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Over the years, our relentless pursuit of excellence has enabled us to build a diverse team of experts, foster long-term partnerships, and consistently deliver results that exceed expectations. We invest heavily in research and development, ensuring that our solutions remain at the forefront of technological advancement. Our commitment to quality, integrity, and customer satisfaction drives every project we undertake, no matter the scale or complexity.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                As we look to the future, NXTsilicon remains dedicated to shaping the world through technology, empowering businesses to innovate, and making a positive impact on society. We invite you to join us on this exciting journey and discover how our passion for engineering can help turn your vision into reality.
              </p>
              <Button
                onClick={handleClick}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 neon-glow mx-auto"
              >
                Learn More About Our Journey
              </Button>
            </motion.div>

            {/* Removed stats box section here */}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide our work and define our culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass neon-border rounded-xl p-6 text-center hover-lift"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-4 neon-glow`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the visionaries driving innovation and excellence at NXTsilicon Technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.slice(0, 3).map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass neon-border rounded-xl overflow-hidden hover-lift cursor-pointer"
                onClick={handleClick}
              >
                <div className="relative h-[28rem] bg-gradient-to-br from-green-400/20 to-blue-500/20 overflow-hidden">
                  {leader.image ? (
                    <img
                      src={leader.image.startsWith('/') ? leader.image : `/${leader.image.replace(/^public\//, '')}`}
                      alt={leader.name}
                      className="absolute inset-0 w-full h-full object-cover shadow-lg border-4 border-white/20 bg-white/10"
                    />
                  ) : (
                    <div className="h-40 w-40 rounded-full bg-gray-700 flex items-center justify-center text-5xl text-white/50 mx-auto my-auto">
                      {leader.name[0]}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{leader.name}</h3>
                  <p className="text-green-400 mb-2">{leader.position}</p>
                  <p className="text-gray-400 text-sm">{leader.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Key milestones that shaped our growth and success over the years.
            </p>
          </motion.div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="glass neon-border rounded-xl p-6 hover-lift">
                    <div className="text-2xl font-bold gradient-text mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full neon-glow flex-shrink-0"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass neon-border rounded-2xl p-12 pulse-glow"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of a team that's shaping the future of technology. Explore career opportunities at NXTsilicon.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 neon-glow text-white px-12 py-4 text-lg"
            >
              <a href="/contact">View Open Positions</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;