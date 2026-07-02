export async function triggerPingWorkflow() {

  const response = await fetch(
    `https://api.github.com/repos/${import.meta.env.VITE_GITHUB_OWNER}/${import.meta.env.VITE_GITHUB_REPO}/actions/workflows/${import.meta.env.VITE_GITHUB_WORKFLOW}/dispatches`,
    {
      method: "POST",

      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        ref: "main",
      }),
    }
  );

  if (!response.ok) {

    const error = await response.text();

    throw new Error(error);

  }

  return true;

}