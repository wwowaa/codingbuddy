import mongoose from "mongoose";

class Connection {
  constructor(
    uri = "mongodb+srv://dmitryr510:NUn2YRrM5nO1tn1Q@codingbuddydb.jkxingg.mongodb.net/coding_buddy_db?retryWrites=true&w=majority&appName=CodingBuddyDB",
    clientOptions = {
      serverApi: { version: "1", strict: true, deprecationErrors: true },
    }
  ) {
    this.uri = uri;
    this.clientOptions = clientOptions;
  }

  async connect() {
    try {
      await mongoose.connect(this.uri, this.clientOptions);
      await mongoose.connection.db.admin().command({ ping: 1 });
      console.log("Connected to MongoDB!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }

  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log("Disconnected from MongoDB!");
    } catch (error) {
      console.error("Error disconnecting from MongoDB:", error);
    }
  }

  async addDocument(model, data) {
    try {
      const newDocument = await model.create(data);
      console.log("Document added successfully:", newDocument);
      return newDocument;
    } catch (error) {
      console.error("Error adding document:", error);
    }
  }

  async updateDocument(model, conditions, update) {
    try {
      const updatedDocument = await model.findOneAndUpdate(conditions, update, {
        new: true,
      });
      console.log("Document updated successfully:", updatedDocument);
      return updatedDocument;
    } catch (error) {
      console.error("Error updating document:", error);
    }
  }

  async deleteDocument(model, conditions) {
    try {
      const deletedDocument = await model.findOneAndDelete(conditions);
      console.log("Document deleted successfully:", deletedDocument);
      return deletedDocument;
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  }

  async getDocument(model, conditions) {
    try {
      const document = await model.findOne(conditions);
      return document;
    } catch (error) {
      console.error("Error getting document:", error);
    }
  }
}

export default Connection;
