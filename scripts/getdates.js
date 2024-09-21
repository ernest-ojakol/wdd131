const footerParagraphs = document.querySelectorAll('footer p');
const currentYear = new Date().getFullYear();
footerParagraphs[0].innerText = `${currentYear} Ernest Ojakol - Kampala, Uganda`;
footerParagraphs[1].innerText = `Last modified: ${document.lastModified}`;