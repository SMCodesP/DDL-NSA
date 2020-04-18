export default function title(title, state = true) {
  let newTitle = '';
  if(state) newTitle = `${title} | ${document.title}`;
  let ti = '';
  function set(i) {
    setTimeout(function() {
      ti = ti+newTitle[i];
      setTitle(ti, false);
    }, i * 300);
  }
  for(let counter = 0;counter < newTitle.length;counter++) {
    set(counter);
  }
}

function setTitle(title, state) {
  const oldTitle = document.title;
  let newTitle = title;
  if(state) {
    newTitle = `${newTitle} | ${oldTitle}`;
  }

  document.title = newTitle;

  return oldTitle;
}
