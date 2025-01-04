
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
            hover: "rgba(255, 255, 255, 0.8)",
            textPrimary: "rgb(255, 255, 255)",
            active: "rgba(255, 255, 255, 0.6)",
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
        newsCard: {
            shadowLight: "0px 0px 4px rgba(0, 0, 0, 0.08)",
            shadowDark: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            background: "#FFFFFF"
        },
        loanPage: {
            creditCardLinearGradient: "linear-gradient(180.8deg, rgba(203, 213, 224, 0.624) 34.33%, rgba(254, 235, 200, 0.56) 64.27%)",
            textPrimary: "rgba(45, 55, 72, 1)",
            textSecondary: "rgba(61, 61, 61, 1)",
            textTertiary: "rgba(255, 255, 255, 1)",
            tabsItem: "rgba(123, 116, 84, 1)",
            tabsItemHover: "rgb(150, 141, 107)",
            tabsLine: "rgba(128, 128, 128, 0.2)",
            loadPageBoxShadow: " 0px 0px 8px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.2)"
        },
        aboutCardTab: {
            itemBoxShadow: "0px 0px 8px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.2)",
            oddBackground: "rgba(234, 236, 238, 1)",
            evenBackground: "rgba(127, 146, 172, 0.7)",
            textPrimary: "rgba(0, 0, 0, 1)",
        },
        ratesAndConditionsTab: {
            textPrimary: "#000000",
            textSecondary: "#434343",
            border: "1px solid rgba(127, 146, 172, 1)"
        },
        cashbackTab: {
            oddBackground: "#EAECEE",
            evenBackground: "rgba(136, 179, 184, 0.6)",
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.2)",
            textPrimary: "rgba(67, 67, 67, 0.9)",
            textSecondary: "#000000",
        },
        faqTab: {
            textPrimary: "#000000",
        },
        accordion: {
            textPrimary: "rgba(28, 28, 30, 1)",
            textSecondary: "rgba(123, 116, 84, 1)",
            background: "white",
            border: "1px solid rgba(226, 232, 240, 1)"
        },
        tooltip: {
            background: "rgba(61, 61, 61, 1)",
            textPrimary: "rgba(255, 255, 255, 1)"
        },
        howToGetCard: {
            stepNumberBackground: "#D9D9D9",
            textPrimary: "#000000",
            lineBorder: "1px solid rgba(128, 128, 128, 0.2);"
        },
        input: {
            background: "#F9F5E3",
            errorBorder: "2px solid rgba(255, 86, 49, 1)",
            border: "1px solid rgba(128, 128, 128, 0.2)",
            textPrimary: "#000000",
            focusBorder: "rgba(91, 53, 213, 1)",
            required: "rgba(255, 0, 0, 1)"
        },
        prescoring: {
            background: "#FFFFFF",
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.2)",
            textPrimary: "#000000",
            separatorBorder: "1px dashed rgba(128, 128, 128, 0.4)",
            chosenAmountSeparatorBorder: "1px solid rgba(128, 128, 128, 0.2)"
        },
        select: {
            background: "#F9F5E3",
            errorBorder: "2px solid rgba(255, 86, 49, 1)",
            border: "1px solid rgba(128, 128, 128, 0.2)",
            textPrimary: "#000000",
            focusBorder: "rgba(91, 53, 213, 1)",
            
        },
        loader: {
            mainBorder: "2px solid rgba(128, 128, 128, 1)",
            spinner: "rgba(180, 56, 122, 1)"
        },
        fieldContainer: {
            required: "rgba(255, 0, 0, 1)",
            errorMessage: "rgba(255, 86, 49, 1)"
        }
    },
};

export type Theme = typeof theme;