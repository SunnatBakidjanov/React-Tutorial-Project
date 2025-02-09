const colors = {
    "main-color": "#F3F4F6",
    "black-color": "#000",
    "accent-color": "#FFD25D",
    "secondary-color": "#d35400",
};

export const themes = {
    main: {
        "--progressbar-bg-color": colors["accent-color"],
        "--welcome-page-title-border-color": colors["accent-color"],
        "--welcome-slide-line-bg-color": colors["accent-color"],
        "--welcome-slide-title-border-bottom-color": colors["accent-color"],
        "--welcome-button-show-restaurants-bg-color": colors["accent-color"],
        "--welcome-button-show-restaurants-text-color": colors["main-color"],
        "--welcome-button-show-resturants-text-hover-color": colors["black-color"],
        "--header-button-bg-color": colors["accent-color"],
        "--header-button-hover-bg-color": colors["secondary-color"],
        "--header-button-text-color": colors["black-color"],
        "--header-button-text-hover-color": colors["main-color"],
    },
    secondary: {
        "--progressbar-bg-color": colors["secondary-color"],
        "--welcome-page-title-border-color": colors["secondary-color"],
        "--welcome-slide-line-bg-color": colors["secondary-color"],
        "--welcome-slide-title-border-bottom-color": colors["secondary-color"],
        "--welcome-button-show-restaurants-bg-color": colors["secondary-color"],
        "--welcome-button-show-restaurants-text-color": colors["main-color"],
        "--welcome-button-show-resturants-text-hover-color": colors["main-color"],
        "--header-button-bg-color": colors["secondary-color"],
        "--header-button-hover-bg-color": colors["accent-color"],
        "--header-button-text-color": colors["main-color"],
        "--header-button-text-hover-color": colors["black-color"],
    },
};
