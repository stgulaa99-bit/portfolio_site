document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const profileWrap = document.querySelector(".profile-image-wrap");
  const profileImage = document.getElementById("profileImage");

  if (profileWrap && profileImage) {
    // 프로필 사진 파일이 존재할 경우 자동으로 표시
    profileImage.addEventListener("load", () => {
      profileWrap.classList.add("has-image");
    });

    profileImage.addEventListener("error", () => {
      profileWrap.classList.remove("has-image");
    });

    if (profileImage.complete && profileImage.naturalWidth > 0) {
      profileWrap.classList.add("has-image");
    }
  }

  const toggle = document.querySelector(".skill-toggle");
  const tabs = document.querySelectorAll(".toggle-option");
  const panels = document.querySelectorAll(".skill-panel");

  const activateTab = (tabName) => {
    const isSkills = tabName === "skills";
    toggle.classList.toggle("show-skills", isSkills);

    tabs.forEach((tab) => {
      const active = tab.dataset.tab === tabName;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", active);
    });

    panels.forEach((panel) => {
      const active = panel.id === `${tabName}-panel`;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });
  };

  if (toggle) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => activateTab(tab.dataset.tab));
      tab.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          activateTab(tab.dataset.tab);
        }
      });
    });
  }

  const skillTags = document.querySelectorAll(".skill-tag");
  const skillDescription = document.querySelector(".skill-description");
  const skillSite = document.querySelector(".skill-site");
  const siteLink = document.querySelector(".site-link");

  const showSkillDescription = (skillTag) => {
    if (!skillDescription) return;

    skillTags.forEach((tag) => tag.classList.toggle("is-selected", tag === skillTag));
    const siteUrl = skillTag.dataset.siteUrl;
    skillSite.hidden = !siteUrl;
    if (siteUrl) siteLink.href = siteUrl;
    skillDescription.classList.add("is-changing");

    window.setTimeout(() => {
      skillDescription.textContent = skillTag.dataset.description.replace(/\\n/g, "\n");
      skillDescription.classList.remove("is-changing");
    }, 120);
  };

  skillTags.forEach((skillTag) => {
    skillTag.addEventListener("click", () => showSkillDescription(skillTag));
    skillTag.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showSkillDescription(skillTag);
      }
    });
  });

});
