import db from "./firebase-admin.js";

async function pingProjects() {
  const snapshot = await db.collection("projects").get();

  console.log(`Found ${snapshot.size} projects\n`);

  for (const document of snapshot.docs) {
    const project = document.data();

    if (!project.enabled) {
      console.log(`Skipping ${project.name}`);
      continue;
    }

    console.log(`Pinging ${project.name}...`);

    const start = Date.now();

    try {
      const response = await fetch(project.url, {
        method: "GET",
        redirect: "follow",
      });

      const responseTime = Date.now() - start;

      await document.ref.update({
  status: response.ok ? "Online" : `HTTP ${response.status}`,
  responseTime,
  lastPing: new Date(),
});

      console.log(
        `✅ ${project.name} | ${response.status} | ${responseTime} ms`
      );
    } catch (error) {
      await document.ref.update({
        status: "Offline",
        responseTime: null,
        lastPing: new Date(),
      });

      console.log(`❌ ${project.name} | ${error.message}`);
    }
  }

  console.log("\nDone!");
}

pingProjects();