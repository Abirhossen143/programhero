const mileStoneData = JSON.parse(data).data;
function milstoneload() {
  const milstone = document.querySelector(".milestones");
  milstone.innerHTML = `${mileStoneData
    .map(function (milestone) {
      return `<div class="milestone border-b" id ='${milestone._id}'>
    <div class="flex">
      <div class="checkbox"><input type="checkbox" onclick="Markmilestine(this,${
        milestone._id
      })" /></div>
      <div onclick= "Openmilestone(this,${milestone._id})">
        <p>
          ${milestone.name}
          <span><i class="fas fa-chevron-down"></i></span>
        </p>
      </div>
    </div>
    <div class="hidden_panel">
      ${milestone.modules
        .map(function (module) {
          return `<div class="module border-b">
    <p>${module.name}</p>
  </div>`;
        })
        .join("")}
    </div>
  </div>`;
    })
    .join("")}`;
}
function Openmilestone(Milestoneelement, id) {
  const Carrentpanel = Milestoneelement.parentNode.nextElementSibling;
  const showPanel = document.querySelector(".show");
  const Active = document.querySelector(".active");
  Milestoneelement.classList.toggle("active");
  if (Active && Milestoneelement.classList.contains("active")) {
    Active.classList.remove("active");
  }

  if (!Carrentpanel.classList.contains("show") && showPanel)
    showPanel.classList.remove("show");
  Carrentpanel.classList.toggle("show");

  showMilestone(id);
}
function showMilestone(id) {
  const showpic = document.querySelector(".milestoneImage");
  const title = document.querySelector(".title");
  const details = document.querySelector(".details");
  title.innerText = mileStoneData[id].name;
  details.innerText = mileStoneData[id].description;
  showpic.src = mileStoneData[id].image;
  showpic.src.style.opacity = "1";
}
const showpic = document.querySelector(".milestoneImage");
showpic.onload = function () {
  this.style.opacity = "1";
};
function Markmilestine(checkbox, id) {
  const Marklist = document.querySelector(".doneList");
  const Milestonelist = document.querySelector(".milestones");
  const itemlist = document.getElementById(id);
  if (checkbox.cheked) {
    Milestonelist.removechild(itemlist);
    Marklist.appendChild(itemlist);
  } else {
    Milestonelist.appendChild(itemlist);
    Marklist.removeChild(itemlist);
  }
}
milstoneload();
