export default function SwitchPages() {
  console.clear();

  // Nav
  const navList = document.querySelectorAll('[data-js="nav-list"]');
  // Pages
  const homePage = document.querySelector('[data-js="home-page"]');
  const bookmarkPage = document.querySelector('[data-js="bookmark-page"]');
  const createPage = document.querySelector('[data-js="create-page"]');
  const profilePage = document.querySelector('[data-js="profile-page"]');

  // Icons
  const homeFilled = document.querySelector(
    '[data-js="nav__home-icon--filled"]'
  );
  const bookmarkFilled = document.querySelector(
    '[data-js="nav__bookmark-icon--filled"]'
  );
  const createFilled = document.querySelector(
    '[data-js="nav__create-icon--filled"]'
  );
  const profileFilled = document.querySelector(
    '[data-js="nav__profile-icon--filled"]'
  );

  // Function

  // forEach
  const filledIcons = document.querySelectorAll('[data-js="icon--filled"]');

  navList.forEach((navItem) => {
    const navButton = navItem.querySelector('[data-js="nav-button"]');
    const currentIcon = navItem.querySelector('[data-js="icon--filled"]');

    navButton.addEventListener("click", () => {
      // ausblenden
      filledIcons.forEach((icon) => {
        icon.classList.add("icon--active");
      });
      navList.forEach((navItem) => {
        homePage.classList.add("page--hidden");
        bookmarkPage.classList.add("page--hidden");
        createPage.classList.add("page--hidden");
        profilePage.classList.add("page--hidden");
      });

      // einblenden
      currentIcon.classList.remove("icon--active");
      // if homeButton clicked, show home page. If bookmarks clicked, show bookmarks etc.
      if (navButton.classList.contains("bookmarksButton")) {
        bookmarkPage.classList.remove("page--hidden");
      } else if (navButton.classList.contains("homeButton")) {
        homePage.classList.remove("page--hidden");
      } else if (navButton.classList.contains("createButton")) {
        createPage.classList.remove("page--hidden");
      } else if (navButton.classList.contains("profileButton")) {
        profilePage.classList.remove("page--hidden");
      }
    });
  });

  // if navButton class icon--active => remove icon--active from other navButtons
}
