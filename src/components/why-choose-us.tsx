"use client"

import { useEffect, useRef } from "react"
import { Check, X } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const comparisonData = [
  {
    feature: "Canvas Integration",
    canvo: true,
    otherTodoApps: false,
    canvasApp: true,
    notes: "Direct import of assignments, due dates, and course materials",
  },
  {
    feature: "Course-Specific Organization",
    canvo: true,
    otherTodoApps: false,
    canvasApp: true,
    notes: "Automatically organizes tasks by course and semester",
  },
  {
    feature: "Assignment Interaction",
    canvo: true,
    otherTodoApps: false,
    canvasApp: true,
    notes: "View and interact with assignment details directly in the app",
  },
  {
    feature: "Assignment Type Categorization",
    canvo: true,
    otherTodoApps: false,
    canvasApp: false,
    notes: "Automatically categorizes quizzes, papers, discussions, etc.",
  },
  {
    feature: "Exam Countdown Timers",
    canvo: true,
    otherTodoApps: false,
    canvasApp: false,
    notes: "Visual countdown timers for upcoming exams",
  },
  {
    feature: "Canvas File Access",
    canvo: true,
    otherTodoApps: false,
    canvasApp: true,
    notes: "Access course files and materials without leaving the app",
  },
  {
    feature: "Custom Task Creation",
    canvo: true,
    otherTodoApps: true,
    canvasApp: false,
    notes: "Create and manage personal tasks alongside Canvas assignments",
  },
  {
    feature: "Priority Levels",
    canvo: true,
    otherTodoApps: true,
    canvasApp: false,
    notes: "Set low, medium, or high priority for better organization",
  },
  {
    feature: "Subtasks",
    canvo: true,
    otherTodoApps: true,
    canvasApp: false,
    notes: "Break down complex assignments into manageable steps",
  },
  {
    feature: "Productivity Stats",
    canvo: true,
    otherTodoApps: true,
    canvasApp: false,
    notes: "Track completion rates and maintain daily streaks",
  },
  {
    feature: "Dark Mode",
    canvo: true,
    otherTodoApps: true,
    canvasApp: false,
    notes: "Comfortable viewing experience day or night",
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const tableRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      },
    )

    gsap.fromTo(
      tableRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: tableRef.current,
          start: "top 80%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="why-choose-us" className="py-24 bg-gradient-to-b from-background to-purple-900/20">
      <div className="container px-4 md:px-6">
        <div ref={textRef} className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20 mb-4">
            Comparison
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
            Why Choose Canvo?
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            See how Canvo compares to other solutions for managing your academic workload.
          </p>
        </div>

        <div
          ref={tableRef}
          className="overflow-hidden rounded-2xl border border-purple-500/20 shadow-[0_0_25px_-5px_rgba(139,92,246,0.3)]"
        >
          <div className="overflow-x-auto">
            <table className="w-full divide-y divide-purple-500/10">
              <thead className="bg-purple-900/30 backdrop-blur-sm">
                <tr>
                  <th scope="col" className="px-6 py-5 text-left text-sm font-medium">
                    Feature
                  </th>
                  <th scope="col" className="px-6 py-5 text-center text-sm font-medium">
                    <div className="flex flex-col items-center">
                      <span className="text-primary font-bold text-lg">Canvo</span>
                      <span className="text-xs text-muted-foreground mt-1">Our App</span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-5 text-center text-sm font-medium">
                    <div className="flex flex-col items-center">
                      <span className="font-medium text-lg">Other To-Do Apps</span>
                      <span className="text-xs text-muted-foreground mt-1">Todoist, TickTick, etc.</span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-5 text-center text-sm font-medium">
                    <div className="flex flex-col items-center">
                      <span className="font-medium text-lg">Canvas App</span>
                      <span className="text-xs text-muted-foreground mt-1">Official App</span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-5 text-left text-sm font-medium">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-500/10 bg-background/50 backdrop-blur-sm">
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-purple-900/5" : ""}>
                    <td className="px-6 py-5 text-sm font-medium whitespace-nowrap">{row.feature}</td>
                    <td className="px-6 py-5 text-center">
                      <div className="flex justify-center">
                        {row.canvo ? (
                          <div className="rounded-full bg-green-500/10 p-1.5 border border-green-500/20 shadow-[0_0_10px_-3px_rgba(34,197,94,0.5)]">
                            <Check className="h-5 w-5 text-green-500" />
                          </div>
                        ) : (
                          <div className="rounded-full bg-red-500/10 p-1.5 border border-red-500/20">
                            <X className="h-5 w-5 text-red-500" />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <div className="flex justify-center">
                        {row.otherTodoApps ? (
                          <div className="rounded-full bg-green-500/10 p-1.5 border border-green-500/20">
                            <Check className="h-5 w-5 text-green-500" />
                          </div>
                        ) : (
                          <div className="rounded-full bg-red-500/10 p-1.5 border border-red-500/20">
                            <X className="h-5 w-5 text-red-500" />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <div className="flex justify-center">
                        {row.canvasApp ? (
                          <div className="rounded-full bg-green-500/10 p-1.5 border border-green-500/20">
                            <Check className="h-5 w-5 text-green-500" />
                          </div>
                        ) : (
                          <div className="rounded-full bg-red-500/10 p-1.5 border border-red-500/20">
                            <X className="h-5 w-5 text-red-500" />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm text-muted-foreground">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto bg-purple-900/10 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 shadow-[0_10px_40px_-15px_rgba(139,92,246,0.3)]">
          <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400">
            The Best of Both Worlds
          </h3>
          <p className="text-lg text-white/90 mb-4">
            Canvo is the only app that combines powerful task management with complete Canvas integration
          </p>
          <p className="text-muted-foreground">
            While other to-do apps offer general productivity features, only Canvo bridges the gap between Canvas and
            task management. With Canvo, you get the best of both worlds: the powerful organization of a dedicated to-do
            app with seamless Canvas integration.
          </p>
        </div>
      </div>
    </section>
  )
}

