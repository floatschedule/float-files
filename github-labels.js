function updateLabel (label) {
  var flag = false;
  [].slice.call(document.querySelectorAll(".labels-list-item"))
  .forEach(function(element) {
    if (element.querySelector('.label-link').textContent.trim() === label.name) {
      flag = true
      element.querySelector('.js-edit-label').click()
      element.querySelector('.js-new-label-name-input').value = label.name
      element.querySelector('.js-new-label-color-input').value = '#' + label.color
      element.querySelector('.js-edit-label-cancel ~ .btn-primary').disabled = false
      element.querySelector('.js-edit-label-cancel ~ .btn-primary').click()
    }
  })
  return flag
}

function addNewLabel (label) {
  document.querySelector('.js-new-label-name-input').value = label.name
  document.querySelector('.js-new-label-color-input').value = '#' + label.color
  document.querySelector('.js-details-target ~ .btn-primary').disabled = false
  document.querySelector('.js-details-target ~ .btn-primary').click()
}

function addLabel (label) {
  if (!updateLabel(label)) addNewLabel(label)
}

[
  {
    "name": "bug",
    "color": "fc2929"
  },
  {
    "name": "duplicate",
    "color": "cccccc"
  },
  {
    "name": "enhancement",
    "color": "84b6eb"
  },
  {
    "name": "invalid",
    "color": "e6e6e6"
  },
  {
    "name": "priority: BLOCKER",
    "color": "ff0000"
  },
  {
    "name": "priority: critical",
    "color": "e11d21"
  },
  {
    "name": "priority: major",
    "color": "eb6420"
  },
  {
    "name": "priority: normal",
    "color": "fbca04"
  },
  {
    "name": "priority: minor",
    "color": "207de5"
  },
  {
    "name": "question",
    "color": "cc317c"
  },
  {
    "name": "status: in progress",
    "color": "bfe5bf"
  },
  {
    "name": "status: in testing",
    "color": "d4c5f9"
  },
  {
    "name": "status: needs review",
    "color": "fef2c0"
  },
  {
    "name": "status: rejected",
    "color": "000000"
  },
  {
    "name": "status: under discussion",
    "color": "c7def8"
  },
  {
    "name": "tech debt",
    "color": "fad8c7"
  },
  {
    "name": "ticket: created",
    "color": "c7def8"
  },
  {
    "name": "ticket: needed",
    "color": "fef2c0"
  },
  {
    "name": "help wanted",
    "color": "128A0C"
  },
  {
    "name": "wontfix",
    "color": "ffffff"
  }
].forEach(function(label) {
  addLabel(label)
});
