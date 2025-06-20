import { db } from "@/utils/dbConnectionString.js";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import styles from "@/modules/create-profile.module.css";

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
    <main className={styles.main}>
      <h1 className={styles.title}>Create Profile</h1>
      <p className={styles.small}>Enter your information in the form below</p>
      <form action={handleSubmit}>
        <div className={styles.content}>
          <label htmlFor="user_name" className={styles.formlabel}>
            Enter a Username
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className={styles.formentry}
            required
          />
          <label htmlFor="user_role" className={styles.formlabel}>
            Select Your Role
          </label>
          <select name="user_role" id="user_role" className={styles.formentry}>
            <option value="Admin">Admin</option>
            <option value="Delivery">Delivery</option>
            <option value="Management">Management</option>
          </select>
          <div className={styles.centre}>
            <button type="submit" className={styles.createbutton}>
              Create Profile
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
