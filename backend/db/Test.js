import Connection from "./Connection.js";
import Category from "./models/Category.js";
import User from "./models/User.js";

const db = new Connection();

async function exampleUsage() {
  await db.connect();

  //   // Add document
  //   await db.addDocument(Category, {
  //     name: "Gamedev",
  //     description: "Game development",
  //   });

  //   await db.addDocument(Category, {
  //     name: "Web",
  //     description: "Web development",
  //   });

  //   await db.addDocument(User, {
  //     name: "Joe",
  //     surname: "Biden",
  //     nickname: "President",
  //     password: "usa",
  //     email: "nagibator@mail.com",
  //     description: "President of the USA",
  //     date_of_birth: "1950-08-15",
  //     date_of_registration: "2024-03-08",
  //   });

  // Update document
  //   await db.updateDocument(
  //     Category,
  //     { name: "Example" },
  //     { description: "Updated Description" }
  //   );

  // Delete document
  //await db.deleteDocument("Category", { name: "Example" });
  const user1 = await db.getDocument(User, {
    _id: "6605bbc4ac277540433da69a",
  });
  console.log(user1.name);

  await db.disconnect();
}

exampleUsage().catch(console.error);
