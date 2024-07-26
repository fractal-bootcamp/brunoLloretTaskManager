// Import necessary types
import { Task, Status, statuses } from "../interfaces/interfaces"; // Adjust import path as necessary

// Function to generate random tasks
const generateRandomTasks = (): Task[] => {
  const statuses: Status[] = [
    { name: "Pending", order: 0 },
    { name: "In Progress", order: 1 },
    { name: "Completed", order: 2 },
    { name: "Archived", order: 3 },
  ];

  const randomStatus = () =>
    statuses[Math.floor(Math.random() * statuses.length)];

  const randomTitle = (index: number) => `Task ${index + 1}`;

  const randomDescription = () =>
    `Description for task ${Math.floor(Math.random() * 1000)}`;

  // Generate 10 random tasks
  return Array.from({ length: 10 }, (_, index) => ({
    title: randomTitle(index),
    description: randomDescription(),
    status: randomStatus(),
  }));
};
export default generateRandomTasks;

// // Example usage
// const dummyTasks = generateRandomTasks();
// console.log(dummyTasks);
