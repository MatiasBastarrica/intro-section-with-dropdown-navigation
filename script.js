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
const mobileNav = document.querySelector(".mobile-nav");
const featuresLinkMobile = mobileNav.querySelector(".features-list-item a");
const featureNavContainerMobile = mobileNav.querySelector(
  ".features-nav-container"
);
const companyLinkMobile = mobileNav.querySelector(".company-list-item a");
const companyNavContainerMobile = mobileNav.querySelector(
  ".company-nav-container"
);

const mobileNavStatus = {
  featuresLink: {
    isOpen: false,
    element: featureNavContainerMobile,
  },
  companyLink: {
    isOpen: false,
    element: companyNavContainerMobile,
  },
};

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

function handleMenu(navContainer, navLink, navStatus) {
  for (const nav in navStatus) {
    if (Object.prototype.hasOwnProperty.call(navStatus, nav)) {
      const dropdownNav = navStatus[nav];
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
    navStatus[navLink].isOpen = true;
  } else {
    navContainer.classList.add("hide");
    navStatus[navLink].isOpen = false;
  }
}

featuresLinkDesktop.addEventListener("click", () => {
  handleMenu(featureNavContainerDesktop, "featuresLink", desktopNavStatus);
});

companyLinkDesktop.addEventListener("click", () => {
  handleMenu(compnayNavContainerDesktop, "companyLink", desktopNavStatus);
});

navIcon.addEventListener("click", () => {
  dialog.showModal();
});

closeIcon.addEventListener("click", () => {
  dialog.close();
});

featuresLinkMobile.addEventListener("click", () => {
  handleMenu(featureNavContainerMobile, "featuresLink", mobileNavStatus);
});

companyLinkMobile.addEventListener("click", () => {
  handleMenu(companyNavContainerMobile, "companyLink", mobileNavStatus);
});
