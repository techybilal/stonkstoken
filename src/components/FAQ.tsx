
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Will STNK go to the moon? 🚀",
      answer: "Absolutely! Our proprietary rocket technology ensures we bypass the moon and head straight to Andromeda. Terms and conditions apply in this universe."
    },
    {
      question: "Is this a scam or a rug pull?",
      answer: "How dare you! STNK is 100% legitimate digital art representing the concept of going up. Our rugs are firmly secured with diamond-reinforced adhesive."
    },
    {
      question: "What gives STNK its value?",
      answer: "Pure internet magic, meme energy, and the collective belief of 69,420 holders that numbers only go up. Also, we have a really cool logo."
    },
    {
      question: "Can I lose money with STNK?",
      answer: "Impossible! Our advanced stonk technology prevents any downward movement. Money can only be temporarily relocated to other dimensions."
    },
    {
      question: "When Lambo?",
      answer: "Lambo delivery is scheduled for next Tuesday, or the Tuesday after that. Possibly the Tuesday after the Tuesday after that. Definitely a Tuesday though."
    },
    {
      question: "How do I buy STNK?",
      answer: "Simply believe in the power of stonks, click our 'Buy' button, and watch as your portfolio achieves levels of green previously thought impossible by physics."
    },
    {
      question: "Is STNK environmentally friendly?",
      answer: "Yes! STNK runs on 100% renewable meme energy. Each transaction plants a virtual tree in the metaverse and feeds a digital unicorn."
    },
    {
      question: "What happens if I sell my STNK?",
      answer: "The system is designed to prevent such catastrophic events. However, if you somehow manage to sell, you forfeit your membership to the diamond hands club forever."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            FAQ
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Frequently Asked Stonks - All your burning questions answered with 100% scientific accuracy
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-md border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-900/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="text-cyan-400" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={24} />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-gray-800">
                  <div className="pt-4 text-gray-300 leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border border-cyan-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-400 mb-6">
              Join our community of fellow stonk enthusiasts and get your questions answered by certified meme experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Join Discord
              </button>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Follow on Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
