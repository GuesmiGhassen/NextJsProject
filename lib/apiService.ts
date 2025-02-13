
export async function fetchRepos() {
    try {
      const response = await fetch(`http://localhost:8080/api/repositories/bitbucket_testing2`);
      if (!response.ok) {
        throw new Error("Failed to fetch node data");
      }
      const data = await response.json();
      console.log("API Response from Spring Boot:", data);
      return data;
    } catch (error) {
      console.error("Error fetching node data:", error);
      return null;
    }
  }
  