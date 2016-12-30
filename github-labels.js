function updateLabel (label) {
  var flag = false;
  [].slice.call(document.querySelectorAll(".labels-list-item"))
  .forEach(function(element) {
    if (element.querySelector('.label-link').textContent.trim() === label.name) {
      flag = true
      element.querySelector('.js-edit-label').click()
      element.querySelector('.label-edit-name').value = label.name
      element.querySelector('.color-editor-input').value = '#' + label.color
      element.querySelector('.new-label-actions .btn-primary').click()
    }
  })
  return flag
}

function addNewLabel (label) {
  document.querySelector('.new-label input#label-').value = label.name
  document.querySelector('.new-label input#edit-label-color-new').value = '#' + label.color
  document.querySelector('.new-label-actions .btn-primary').click()
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
    "name": "priority: trivial",
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
  {
    "name": "wontfix",
    "color": "ffffff"
  }
].forEach(function(label) {
  addLabel(label)
});

// thanks to:
// https://gist.github.com/Isaddo/7efebcb673a0957b9c6f07cd14826ea4
// https://gist.github.com/MoOx/93c2853fee760f42d97f

// https://github.com/popomore/github-labels
