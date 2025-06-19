import { db } from "@/utils/dbConnectionString.js";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function CreateProfile() {
  const clerkUser = await currentUser();
  console.log("Full clerk user: ", clerkUser);
  const clerkId = JSON.stringify(clerkUser!.id);
  console.log("Clerk ID: ", clerkId);

  async function handleSubmit(formValues: FormData) {
    "use server";
    const formData = {
      clerk_id: clerkId,
      user_name: formValues.get("user_name"),
      user_role: formValues.get("user_role"),
    };

    db.query(
      `INSERT INTO users (user_name, user_role, clerk_id)
      VALUES ($1, $2, $3)`,
      [formData.user_name, formData.user_role, formData.clerk_id]
    );
    redirect("/");
  }

  return (
    <>
      <h1>Create Profile</h1>
      <p>Enter your information in the form below</p>
      <form action={handleSubmit}>
        <label htmlFor="user_name">Enter a Username</label>
        <input type="text" name="user_name" id="user_name" required />
        <label htmlFor="user_role">Select Your Role</label>
        <select name="user_role" id="user_role">
          <option value="Admin">Admin</option>
          <option value="Delivery">Delivery</option>
          <option value="Management">Management</option>
        </select>
        <button type="submit">Create Profile</button>
      </form>
    </>
  );
}
