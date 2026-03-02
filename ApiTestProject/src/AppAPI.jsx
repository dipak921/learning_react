export const getPost = async () => {
    const response = await fetch("https://localhost:7035/api/Employees");

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    return response.json();
};