import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Heart, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Calendar,
  Users,
  Stethoscope,
  ChevronDown,
  ChevronUp,
  Download,
  Share2
} from 'lucide-react';

const Education: React.FC = () => {
  const [activeTab, setActiveTab] = useState('prevention');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const tabs = [
    { id: 'prevention', label: 'Prevention', icon: <Shield className="w-5 h-5" /> },
    { id: 'symptoms', label: 'Early Signs', icon: <AlertTriangle className="w-5 h-5" /> },
    { id: 'screening', label: 'Screening', icon: <Stethoscope className="w-5 h-5" /> },
    { id: 'treatment', label: 'Treatment', icon: <Heart className="w-5 h-5" /> }
  ];

  const preventionTips = [
    {
      title: "HPV Vaccination",
      description: "Get vaccinated against HPV (Human Papillomavirus) - the leading cause of cervical cancer.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Regular Screening",
      description: "Attend regular Pap smears and HPV tests as recommended by your healthcare provider.",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Safe Practices",
      description: "Practice safe sex, limit sexual partners, and maintain good sexual health habits.",
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Healthy Lifestyle",
      description: "Maintain a healthy diet, exercise regularly, avoid smoking, and boost your immune system.",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const symptoms = [
    "Unusual vaginal bleeding (between periods, after sex, or after menopause)",
    "Abnormal vaginal discharge with strong odor",
    "Pelvic pain or pain during intercourse",
    "Heavy or prolonged menstrual periods",
    "Bleeding after douching or pelvic exam",
    "Pain in the back, legs, or pelvis"
  ];

  const screeningInfo = [
    {
      test: "Pap Smear",
      frequency: "Every 3 years (ages 21-65)",
      description: "Detects abnormal cells in the cervix before they become cancerous"
    },
    {
      test: "HPV Test",
      frequency: "Every 5 years (ages 30-65)",
      description: "Identifies high-risk HPV types that can lead to cervical cancer"
    },
    {
      test: "Co-testing",
      frequency: "Every 5 years (ages 30-65)",
      description: "Combines Pap smear and HPV test for comprehensive screening"
    }
  ];

  const treatmentOptions = [
    {
      stage: "Precancerous Changes",
      treatments: ["Cryotherapy", "LEEP (Loop Electrosurgical Excision)", "Cone Biopsy"],
      success: "95%+ cure rate"
    },
    {
      stage: "Early Stage Cancer",
      treatments: ["Surgery", "Radiation Therapy", "Combination Treatment"],
      success: "90%+ survival rate"
    },
    {
      stage: "Advanced Cancer",
      treatments: ["Chemotherapy", "Radiation", "Targeted Therapy", "Immunotherapy"],
      success: "Varies by stage"
    }
  ];

  const faqs = [
    {
      question: "What causes cervical cancer?",
      answer: "Most cervical cancers are caused by persistent infection with high-risk types of Human Papillomavirus (HPV). HPV is very common and usually goes away on its own, but sometimes it can cause changes in cervical cells that may lead to cancer over time."
    },
    {
      question: "How can I prevent cervical cancer?",
      answer: "The best prevention methods include HPV vaccination (ideally before becoming sexually active), regular screening tests (Pap smears and HPV tests), practicing safe sex, limiting sexual partners, and not smoking."
    },
    {
      question: "At what age should I start screening?",
      answer: "Women should start cervical cancer screening at age 21. Between ages 21-29, you should have a Pap test every 3 years. From ages 30-65, you can have a Pap test every 3 years, an HPV test every 5 years, or both tests together every 5 years."
    },
    {
      question: "Is cervical cancer curable?",
      answer: "When detected early, cervical cancer is highly curable. Precancerous changes have a cure rate of over 95%. Early-stage cervical cancer has excellent survival rates when treated promptly. This is why regular screening is so important."
    },
    {
      question: "What should I expect during a Pap smear?",
      answer: "A Pap smear is a quick, simple test. You'll lie on an exam table, and your doctor will use a speculum to open the vagina and collect cells from the cervix with a small brush or spatula. The test takes just a few minutes and may cause mild discomfort."
    }
  ];

  const resources = [
    {
      title: "Cervical Cancer Prevention Guide",
      type: "PDF Download",
      description: "Comprehensive guide covering prevention strategies and lifestyle recommendations",
      icon: <Download className="w-5 h-5" />
    },
    {
      title: "Understanding Your Screening Results",
      type: "Interactive Guide",
      description: "Learn what your test results mean and next steps to take",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: "Support Groups Near You",
      type: "Directory",
      description: "Find local support groups and counseling services",
      icon: <Users className="w-5 h-5" />
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'prevention':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {preventionTips.map((tip, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${tip.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{tip.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'symptoms':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Early Warning Signs
              </h3>
              <p className="text-gray-600 text-center mb-8">
                Early cervical cancer often has no symptoms. When symptoms do appear, they may include:
              </p>
            </div>
            
            <div className="space-y-4">
              {symptoms.map((symptom, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{symptom}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
              <p className="text-yellow-800 text-center">
                <strong>Important:</strong> These symptoms can be caused by other conditions, 
                but it's important to see a healthcare provider for proper evaluation.
              </p>
            </div>
          </motion.div>
        );

      case 'screening':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              {screeningInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{info.test}</h3>
                      <p className="text-gray-600 mb-3">{info.description}</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      {info.frequency}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'treatment':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              {treatmentOptions.map((treatment, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{treatment.stage}</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {treatment.success}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-3">
                    {treatment.treatments.map((option, idx) => (
                      <div key={idx} className="bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-700 text-center">
                        {option}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            {...fadeInUp}
          >
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <BookOpen className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cancer Education Hub
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Empowering women with knowledge about cervical cancer prevention, 
              early detection, and treatment options
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center mb-12 bg-white rounded-2xl p-2 shadow-lg"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
                onClick={() => setActiveTab(tab.id)}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <div className="mb-20">
            {renderTabContent()}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about cervical cancer
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                <AnimatePresence>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600">
              Download guides, find support, and access more information
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                      {resource.icon}
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-purple-600 font-semibold group-hover:translate-x-2 transition-transform duration-300 inline-block">
                      Access Resource →
                    </span>
                    <Share2 className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">
              Take Action Today
            </h2>
            <p className="text-xl mb-8 text-pink-100">
              Knowledge is power. Use this information to protect yourself and spread awareness in your community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Find Screening Center
              </motion.button>
              
              <motion.button 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Share This Information
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Education;