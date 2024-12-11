export const parseDescription = (description: string | null): string => {
    if (!description) return "No description available.";
    const parser = new DOMParser();
    const doc = parser.parseFromString(description, "text/html");
    return doc.body.textContent || "No description available.";
};