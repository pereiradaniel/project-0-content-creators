function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];

  switch (extension) {
    case 'html':
      return 'text/html';
      break;
    case 'css':
      return 'text/css';
      break;
    case 'jpeg':
      return 'image/jpeg';
      break
    case 'jpg':
      return 'image/jpeg';
      break
  default:
    return 'text/plain';
  }
}