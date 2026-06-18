const report = {
  technicalQuestions: [
    {
      question: "What is React and why is it used?",
      intention: "Evaluate understanding of React fundamentals and component-based architecture.",
      answer:
        "React is a JavaScript library for building user interfaces. It uses reusable components and a virtual DOM to efficiently update the UI."
    },
    {
      question: "What is the difference between useState and useEffect?",
      intention: "Check knowledge of React Hooks and component lifecycle management.",
      answer:
        "useState is used to manage state within a component, while useEffect is used to perform side effects such as API calls, subscriptions, or DOM updates."
    },
    {
      question: "Explain the Virtual DOM.",
      intention: "Assess understanding of React rendering optimization.",
      answer:
        "The Virtual DOM is a lightweight copy of the real DOM. React compares changes in the Virtual DOM and updates only the necessary parts of the real DOM."
    }
  ],

  behaviorQuestions: [
    {
      question: "Tell me about a challenging project you worked on.",
      intention: "Evaluate problem-solving skills and ability to handle challenges.",
      answer:
        "Describe the project, the challenge faced, actions taken, and the outcome using the STAR method."
    },
    {
      question: "How do you handle tight deadlines?",
      intention: "Assess time management and prioritization skills.",
      answer:
        "Explain how you break down tasks, prioritize important work, and communicate risks early."
    }
  ],

  skillGaps: [
    "Need stronger understanding of React Hooks.",
    "Should practice JavaScript ES6 concepts.",
    "Improve API integration and error handling skills.",
    "Gain more confidence in behavioral interview responses."
  ],

  preparationPlan: [
    {
      day: 1,
      tasks: [
        "Review React fundamentals",
        "Practice 20 JavaScript interview questions",
        "Build a small React project"
      ]
    },
    {
      day: 2,
      tasks: [
        "Learn advanced React Hooks",
        "Practice mock interviews",
        "Solve coding problems on LeetCode"
      ]
    }
  ]
};
export default report