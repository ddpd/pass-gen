$(document).ready(function () {
  const langSelect = $('#language-select');
  let language = localStorage.getItem('selectedLanguage') || 'english';

  langSelect.val(language);

  langSelect.change(function () {
    language = $(this).val();
    loadLanguage();
    localStorage.setItem('selectedLanguage', language);
  });

  function loadLanguage() {
    const fallback = 'english';

    $.getJSON(`lang/${language}.json`)
      .fail(() => {
        console.warn(`Language ${language} not found, loading fallback`);
        language = fallback;
        return $.getJSON(`lang/${fallback}.json`);
      })
      .done((data) => {
        Object.keys(data).forEach(key => {
          $(`#${key}`).text(data[key]);
        });
      })
      .fail(() => {
        alert('Error loading language files');
      });
  }

  loadLanguage();
});
