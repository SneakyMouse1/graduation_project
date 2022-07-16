export const lightbox= () => {  
    const body = document.querySelector('body');
    const certificateDocuments = document.querySelectorAll('.sertificate-document');
    const modalOverlay = document.querySelector('.overlay');

    const modalBlock = document.createElement('div');
    const clone = modalOverlay.cloneNode(true);

    certificateDocuments.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();

            // Getting the original IMG SRC
            let href = e.target.closest('.sertificate-document').getAttribute('href'); 
            
            const imgDocument = document.createElement('img');
            imgDocument.setAttribute('src', href);

            body.append(modalBlock);

            modalBlock.innerHTML = `
            <span title="Close" class="header-modal__close">x</span>
            `;
        
            modalBlock.append(imgDocument);
            modalBlock.append(clone);

            imgDocument.style.display = 'block';
            imgDocument.style.position = 'fixed';
            imgDocument.style.top = '50%';
            imgDocument.style.left = '50%';
            imgDocument.style.zIndex = '9999';
            imgDocument.style.transform = 'translate(-50%, -50%)';    
            imgDocument.style.maxHeight = '65%';
            clone.style.display = 'block';


            modalBlock.addEventListener('click', () => {
                modalBlock.innerHTML = '';
                modalBlock.remove();
            });
        });
    });

    
};

export default lightbox;