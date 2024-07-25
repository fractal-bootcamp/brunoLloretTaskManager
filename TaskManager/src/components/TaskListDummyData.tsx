// Import necessary types
import { Task, Status } from "../interfaces/interfaces"; // Adjust import path as necessary

// Function to generate random tasks
const generateRandomTasks = (): Task[] => {
  const statuses: Status[] = [
    "Pending",
    "In Progress",
    "Completed",
    "Archived",
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

// Example usage
const dummyTasks = generateRandomTasks();
console.log(dummyTasks);
