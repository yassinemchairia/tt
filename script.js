document.addEventListener('DOMContentLoaded', () => {
  const pdfIframe = document.getElementById('pdf-iframe');

  // Remplacez l'URL par l'URL réelle de votre fichier PDF hébergé
  const pdfUrl = 'https://github.com/yassinemchairia/tt/blob/main/ticket44.pdf';

  // Charge le PDF dans l'iframe
  pdfIframe.src = pdfUrl;
});
