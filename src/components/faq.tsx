"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const faqs = [
  {
    question: "How does Canvo connect to my Canvas account?",
    answer:
      "Canvo uses secure OAuth authentication to connect to your Canvas account. You'll be prompted to log in to Canvas and authorize Canvo to access your assignments and course information.",
  },
  {
    question: "Does Canvo work with any university that uses Canvas?",
    answer:
      "Yes! Canvo works with any educational institution that uses Canvas LMS. If your university isn't in our default list, you can simply enter your Canvas URL to connect.",
  },
  {
    question: "Can I use Canvo without connecting to Canvas?",
    answer:
      "While Canvas integration is a key feature, Canvo functions perfectly as a standalone to-do list app with all its organizational features.",
  },
  {
    question: "How often does Canvo sync with Canvas?",
    answer:
      "Canvo automatically syncs with Canvas whenever you open the app. You can also manually trigger a sync at any time with the refresh button.",
  },
  {
    question: "Is my Canvas data secure?",
    answer:
      "Yes, your security is our priority. Canvo only stores the minimum information needed to display your assignments, and all data is encrypted. We never store your Canvas password.",
  },
  {
    question: "Can I submit assignments through Canvo?",
    answer:
      "Currently, Canvo is focused on helping you organize and track assignments. For submission, you'll use the 'View in Canvas' button to go directly to the assignment in Canvas.",
  },
]

export default function Faq() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const accordionRef = useRef(null)
  const [activeItem, setActiveItem] = useState<string | undefined>(undefined)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      },
    )

    // Individual animations for each accordion item with staggered delay
    const accordionItems = document.querySelectorAll('.faq-item');
    
    accordionItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.1 * index,
          scrollTrigger: {
            trigger: accordionRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const handleValueChange = (value: string) => {
    setActiveItem(value === activeItem ? undefined : value);
  };

  return (
    <section ref={sectionRef} id="faq" className="py-24 bg-gradient-to-b from-background to-purple-900/20">
      <div className="container px-4 md:px-6">
        <div ref={headingRef} className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20 mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Got questions about Canvo? Find answers to the most common questions below.
          </p>
        </div>

        <div ref={accordionRef} className="max-w-3xl mx-auto">
          <Accordion 
            type="single" 
            collapsible 
            className="w-full space-y-4"
            value={activeItem}
            onValueChange={handleValueChange}
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`faq-item border border-purple-500/20 rounded-xl overflow-hidden backdrop-blur-sm shadow-sm transition-all duration-300 ${
                  activeItem === `item-${index}` 
                    ? 'bg-purple-900/20 border-purple-500/40 shadow-[0_8px_30px_-15px_rgba(139,92,246,0.3)]' 
                    : 'bg-background/50 hover:bg-background/70 hover:border-purple-500/30 hover:shadow-[0_4px_20px_-10px_rgba(139,92,246,0.2)]'
                }`}
              >
                <AccordionTrigger className="text-left text-lg font-medium px-6 py-4 hover:bg-purple-500/5 transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-6 pb-4 pt-2 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block backdrop-blur-sm bg-background/20 p-6 rounded-xl border border-purple-500/10 shadow-[0_10px_40px_-15px_rgba(139,92,246,0.2)]">
            <p className="text-lg font-medium mb-2">Still have questions?</p>
            <p className="text-muted-foreground">
              Visit our{" "}
              <a 
                href="https://github.com/nicholasconoplia/student-todo-list/issues" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
              >
                GitHub Issues
              </a>{" "}
              page to ask questions or report bugs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

