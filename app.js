const enlacesConClaseBtn = document.querySelectorAll(".btn");
function miFuncion() {
    event.preventDefault()
    Swal.fire({
        title: 'Estás a un paso de unirte a tech2life',
        html: '<div id="hubspotPopup"></div>',
        showConfirmButton: false,
        showCloseButton: true,
        customClass: {
          container: 'hubspot-popup-container',
          content: 'hubspot-popup-content',
          closeButton: 'hubspot-popup-close-button'
        },
        didOpen: () => {
          const script = document.createElement('script');
          script.src = '//js.hsforms.net/forms/v2.js';
          script.id = 'hubspotScript';
          document.getElementById('hubspotPopup').appendChild(script);
  
          script.onload = () => {
            if (window.hbspt) {
              window.hbspt.forms.create({
                portalId: '39943186',
                formId: 'bc2b5abb-6126-48a5-a804-d44621e0ac71',
                target: '#hubspotPopup',
                onFormReady: (form) => {
                  const urlParams = new URLSearchParams(window.location.search);
                  const bdrValue = urlParams.get('bdr');
                  console.log(bdrValue)
                  // Set the hidden field value
                  const hiddenField = form.querySelector('input[name="vendedor"]');
                  console.log(hiddenField)
                  if (hiddenField) {
                    hiddenField.value = bdrValue;
                  }
                }
              });
            }
          };
        },
        
    });
}
enlacesConClaseBtn.forEach(enlace => {
    enlace.addEventListener("click", miFuncion);
});