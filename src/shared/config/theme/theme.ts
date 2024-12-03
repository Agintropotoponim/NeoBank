export const theme = {
    colors: {
        textPrimary: "#1c1c1e",
        textSecondary: "white",
        textTertiary: "#000000",
        textQuaternary: "#4f5665",
        textQuinary: "#ffffff",
        featureArticleTitle: "#0b132a",
        feedbackContainerSupport: "#eb801d",
        navbarActive: "rgba(178, 163, 95, 1)",
        navbarItem: "rgba(29, 25, 41, 1)",
        currencyConverter: {
            backgroundLight: "rgba(178, 178, 178, 0.8) 8.06%, rgba(178, 178, 178, 0) 67.93%",
            backgroundDark: "rgba(244, 244, 244, 0.9)",
            shadowLight: "0px 0px 4px rgba(0, 0, 0, 0.08)",
            shadowDark: "0px 2px 4px rgba(187, 187, 187, 0.2)",
            currency: "#808080",
        },
        blueButton: {
            background: "#003cff",
            disabled: "rgba(119, 150, 192, 1)",
        },
        customInput: {
            background: "#ffffff",
            border: "#e5e7eb",
            shadow: "rgba(54, 58, 120, 0.1)",
            iconText: "#9ca3af",
            text: "#4b5563",
            placeholder: "rgba(144, 146, 176, 1)",
            buttonBackground: "#686df1",
            buttonHover: "#4f46e5",
            buttonText: "#ffffff",
        },
        horizontalRule: "rgba(255, 255, 255, 0.81)",
        logo: "#b4387a",
        footer: {
            backgroundLight: "rgba(178, 178, 178, 0.2), rgba(178, 178, 178, 0.2)",
            backgroundDark: "#f4f4f4",
            secondary: "#2d3748",
        },
    },
};

export type Theme = typeof theme;