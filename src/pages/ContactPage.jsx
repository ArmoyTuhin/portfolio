import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Github, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4 font-mono">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              I'm always open to discussing research collaborations, project opportunities, 
              or academic inquiries. Feel free to reach out!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 font-mono">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg border border-border">
                  <div className="p-3 bg-background rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 font-mono">Email</h3>
                    <a 
                      href="mailto:tuhin.sec@gmail.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      tuhin.sec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg border border-border">
                  <div className="p-3 bg-background rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 font-mono">Phone</h3>
                    <a 
                      href="tel:+8801701538514"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +880 1701 538514
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg border border-border">
                  <div className="p-3 bg-background rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 font-mono">Location</h3>
                    <p className="text-muted-foreground">
                      Chittagong, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-semibold mb-4 font-mono">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 bg-secondary rounded-lg border border-border hover:border-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-secondary rounded-lg border border-border hover:border-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 font-mono">Send a Message</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 font-mono">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors font-mono"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 font-mono">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors font-mono"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 font-mono">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors font-mono"
                    placeholder="Research collaboration / Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 font-mono">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors font-mono resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-colors font-mono"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Collaboration */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-background p-8 rounded-lg border border-border"
          >
            <h2 className="text-2xl font-bold mb-4 font-mono">Research Collaboration Opportunities</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am actively seeking opportunities for research collaboration in the following areas:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Medical Healthcare Data Security</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Machine Learning & Deep Learning</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Computer Vision Applications</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Natural Language Processing</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Healthcare AI Systems & Privacy-Preserving AI</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Sustainable Energy Analytics</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              If you're interested in collaborating on research projects or have opportunities for 
              graduate studies, please don't hesitate to reach out via email.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
