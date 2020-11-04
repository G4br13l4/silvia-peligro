const loadInsta = (callback) => {

  const existingScript = document.getElementById('insta');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.id = 'insta';
    document.body.appendChild(script);
    script.onload = () => { 
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};
export default loadInsta;

