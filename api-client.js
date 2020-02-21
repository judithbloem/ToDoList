URL = "https://wincacademydatabase.firebaseio.com/judith/tasks.json";

const getTasks = async () => {
  const apiUrl = `${URL}`;
  try {
    const responseTasks = await fetch(apiUrl, { method: "GET" });
    //console.log("Response from API fetch: ", responseTasks);
    return await responseTasks.json();
  } catch (error) {
    console.log(error);
  }
};

const addTask = async (description, done) => {
  const apiUrl = `${URL}`;
  //let description = "paard";
  const body = JSON.stringify({ description: description, done: done });
  try {
    const res = await fetch(apiUrl, { method: "POST", body });
  } catch (error) {
    console.log(error);
  }
};

// const deleteTask = async id => {
//   const apiUrl = `${URL}`;
//   //let description = "paard";
//   const body = JSON.stringify({ id: id });
//   try {
//     const res = await fetch(apiUrl, { method: "DELETE", body });
//   } catch (error) {
//     console.log(error);
//   }
// };
