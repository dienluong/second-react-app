export function fetchFiles(url) {
  return fetch(url)
    .then(response => response.json())
    .catch((err) => {
      console.log(`Fetch error: ${err}`);
    });
}

export function fetchFilesXHR(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.addEventListener('load', callback);
  xhr.open('GET', url, true);
  xhr.send(null);
}
