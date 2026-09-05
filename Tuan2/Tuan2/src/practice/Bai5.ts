
import { simulateTask } from "./utils";


simulateTask(1000).then((result) => {
  console.log(result); // "Task done" sau 1 giây
});
