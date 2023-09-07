const interactivePhotoNode = document.querySelector('.interactive-photo');

const openButton = (button) => {
  const buttonSpanNode = button.querySelector('span');

  button.classList.add('button--opened');
  buttonSpanNode.classList.remove('visually-hidden');
}

const closeButton = (button) => {
  const buttonSpanNode = button.querySelector('span');

  button.classList.remove('button--opened');
  buttonSpanNode.classList.add('visually-hidden');
}

const hasOpenButton = () => interactivePhotoNode.querySelector('.button--opened');

const closePreviousButton = (currentButton) => {
  const openedButtonNode = interactivePhotoNode.querySelector('.button--opened');

  if (openedButtonNode !== currentButton) {
    closeButton(openedButtonNode);
  }
}

const isButtonOpen = (button) => button.classList.contains('button--opened');

const handleInteractiveImageClick = (evt) => {
  evt.preventDefault();

  const isTargetButton = evt.target.classList.contains('button');

  if (hasOpenButton()) {
    closePreviousButton(isTargetButton ? evt.target : null);
  }

  if (isTargetButton) {
    isButtonOpen(evt.target)
      ? closeButton(evt.target)
      : openButton(evt.target);
  }
}

interactivePhotoNode.addEventListener('click', handleInteractiveImageClick);
