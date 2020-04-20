export default function title(title, state = true) {
  const oldTitle = document.title;
  let newTitle = '';
  if(state) {
    newTitle = `${title} | ${oldTitle}`;
    let ti = '';
    function set(i) {
      setTimeout(function() {
        ti = ti+newTitle[i];
        setTitle(ti, false);
      }, i * 250);
    }
    for(let counter = 0;counter < newTitle.length;counter++) {
      set(counter);
    }
  }
  document.title = title;
  return oldTitle;
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
