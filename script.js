const desktopNav = document.querySelector(".desktop-nav");
const featuresLink = desktopNav.querySelector(".features-list-item a");
const featureNavContainer = desktopNav.querySelector(".feature-nav-container");
const companyLink = desktopNav.querySelector(".company-list-item a");
const compnayNavContainer = desktopNav.querySelector(".company-nav-container");

const desktopNavStatus = {
  featuresLink: {
    isOpen: false,
    element: featureNavContainer,
  },
  companyLink: {
    isOpen: false,
    element: compnayNavContainer,
  },
};

function handleMenu(navContainer, navLink) {
  for (const nav in desktopNavStatus) {
    if (Object.prototype.hasOwnProperty.call(desktopNavStatus, nav)) {
      const dropdownNav = desktopNavStatus[nav];
      if (dropdownNav.element === navContainer) {
        continue;
      } else if (dropdownNav.isOpen) {
        dropdownNav.element.classList.add("hide");
        dropdownNav.isOpen = false;
      }
    }
  }

  if (navContainer.classList.contains("hide")) {
    navContainer.classList.remove("hide");
    desktopNavStatus[navLink].isOpen = true;
  } else {
    navContainer.classList.add("hide");
    desktopNavStatus[navLink].isOpen = false;
  }
}

featuresLink.addEventListener("click", () => {
  handleMenu(featureNavContainer, "featuresLink");
});

companyLink.addEventListener("click", () => {
  handleMenu(compnayNavContainer, "companyLink");
});
