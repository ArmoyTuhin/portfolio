import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Calendar, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  // Sample blog posts - in a real implementation, these would come from a CMS or database
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Microservices with Spring Boot",
      excerpt: "Exploring best practices for designing and implementing microservices architecture using Spring Boot, including service discovery, load balancing, and fault tolerance.",
      date: "2024-03-15",
      readTime: "8 min read",
      category: "Software Development",
      tags: ["Spring Boot", "Microservices", "Java", "Architecture"],
      featured: true
    },
    {
      id: 2,
      title: "Computer Vision in Cultural Preservation",
      excerpt: "How AI and machine learning can help preserve cultural heritage through automated classification and analysis of traditional artifacts and clothing.",
      date: "2024-02-28",
      readTime: "6 min read",
      category: "AI & Machine Learning",
      tags: ["Computer Vision", "Cultural Heritage", "AI", "Research"],
      featured: true
    },
    {
      id: 3,
      title: "The Future of Energy Forecasting with Ensemble Models",
      excerpt: "Combining multiple machine learning algorithms to create more accurate and reliable energy consumption predictions for sustainable development.",
      date: "2024-02-10",
      readTime: "10 min read",
      category: "Machine Learning",
      tags: ["Energy", "Forecasting", "Ensemble Learning", "Sustainability"],
      featured: false
    },
    {
      id: 4,
      title: "Photography and Technology: A Creative Intersection",
      excerpt: "Exploring how modern technology enhances photography, from AI-powered editing to automated capture systems and digital workflows.",
      date: "2024-01-22",
      readTime: "5 min read",
      category: "Photography",
      tags: ["Photography", "Technology", "Digital Art", "Innovation"],
      featured: false
    },
    {
      id: 5,
      title: "Leading Development Teams: Lessons Learned",
      excerpt: "Insights from leading a 4-member development team, including communication strategies, project management, and fostering innovation.",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Leadership",
      tags: ["Leadership", "Team Management", "Software Development", "Career"],
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section id="blog" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Blog</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing insights on software development, machine learning, photography, 
            and technology trends. Join me on this journey of continuous learning and innovation.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <PenTool className="w-6 h-6 mr-3" />
            Featured Articles
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-secondary p-8 rounded-lg border border-border hover-lift group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(post.date)}
                  </div>
                </div>

                <h4 className="text-xl font-bold mb-4 group-hover:text-muted-foreground transition-colors">
                  {post.title}
                </h4>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="flex items-center gap-1 bg-background text-foreground px-2 py-1 rounded text-xs border border-border"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  <button className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors group">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Recent Posts</h3>
          <div className="space-y-6">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary p-6 rounded-lg border border-border hover-lift group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(post.date)}
                      </div>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>

                    <h4 className="text-lg font-bold mb-2 group-hover:text-muted-foreground transition-colors">
                      {post.title}
                    </h4>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <button className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors group self-start md:self-center">
                    <span className="text-sm font-medium">Read</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-secondary rounded-lg border border-border"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">
            Get notified when I publish new articles about technology, development, and innovation.
          </p>
          <button className="bg-foreground text-background px-8 py-3 rounded-lg font-medium hover:bg-muted-foreground transition-colors">
            Subscribe to Newsletter
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;

