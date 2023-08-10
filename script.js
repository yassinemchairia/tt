document.addEventListener('DOMContentLoaded', () => {
  const pdfIframe = document.getElementById('pdf-iframe');

  // Remplacez l'URL par l'URL réelle de votre fichier PDF hébergé
  const pdfUrl = 'URL_DU_FICHIER_PDF';

  // Charge le PDF dans l'iframe
  pdfIframe.src = pdfUrl;
});
