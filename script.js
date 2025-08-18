const desktopNav = document.querySelector(".desktop-nav");
const featuresLinkDesktop = desktopNav.querySelector(".features-list-item a");
const featureNavContainerDesktop = desktopNav.querySelector(
  ".feature-nav-container"
);
const companyLinkDesktop = desktopNav.querySelector(".company-list-item a");
const compnayNavContainerDesktop = desktopNav.querySelector(
  ".company-nav-container"
);

const navIcon = document.querySelector(".nav-icon");
const dialog = document.querySelector("dialog");
const closeIcon = dialog.querySelector(".close-icon");

const desktopNavStatus = {
  featuresLink: {
    isOpen: false,
    element: featureNavContainerDesktop,
  },
  companyLink: {
    isOpen: false,
    element: compnayNavContainerDesktop,
  },
};

function handleDesktopMenu(navContainer, navLink) {
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

featuresLinkDesktop.addEventListener("click", () => {
  handleDesktopMenu(featureNavContainerDesktop, "featuresLink");
});

companyLinkDesktop.addEventListener("click", () => {
  handleDesktopMenu(compnayNavContainerDesktop, "companyLink");
});
