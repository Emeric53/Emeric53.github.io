document.querySelectorAll('[data-copy]').forEach(function (button) {
  button.addEventListener('click', async function () {
    var citation = button.parentElement.querySelector('pre');
    var status = button.parentElement.querySelector('[role="status"]');
    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(citation.textContent.trim());
      status.textContent = 'Citation copied.';
    } catch (error) {
      status.textContent = 'Could not copy automatically. Select the citation above and copy it manually.';
    }
  });
});
