console.log("Elon Mask content script is running");

const replaceImageUrl = "data:image/jpeg;base64,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";

// consider consolidating next two

function maskImagesInElement(element) {
    const regex = /elon/gi;
    

    // Handle <img> elements within the specific element
    const images = element.getElementsByTagName('img');
    for (let img of images) {
        // Ignore images that have already been replaced
        if (img.classList.contains('elon-replaced')) {
            continue;
        }

        let foundInAttributes = false;

        // Check all attributes of the image element
        for (let attr of img.attributes) {
            if (regex.test(attr.value)) {
                foundInAttributes = true;
                break;
            }
        }

        if (foundInAttributes) {
            console.log("Found 'Elon' in an image attribute within the element, replacing it with something:", img);

            // Replace the src with the replacement image
            img.src = replaceImageUrl;
            img.alt = "Elon sucks";

            // Remove srcset and other attributes
            img.removeAttribute('srcset');
            img.removeAttribute('data-file-width');
            img.removeAttribute('data-file-height');

            // Clear any background images
            img.style.backgroundImage = 'none';

            // Remove onload and onerror handlers
            img.onload = null;
            img.onerror = null;

            // Mark the image as replaced
            img.classList.add('elon-replaced');
            console.log("Image after replacement within the element:", img);
        }
    }

    // Handle <source> elements within the specific element
    const sources = element.getElementsByTagName('source');
    for (let source of sources) {
        let foundInAttributes = false;

        // Check all attributes of the source element
        for (let attr of source.attributes) {
            if (regex.test(attr.value)) {
                foundInAttributes = true;
                break;
            }
        }

        if (foundInAttributes) {
            console.log("Found 'Elon' in a <source> element attribute within the element, replacing srcset with something:", source);

            // Replace the srcset with the replacement image URL
            source.srcset = replaceImageUrl;

            // Mark the source as replaced to avoid reprocessing
            source.classList.add('elon-replaced');
            console.log("Source after replacement within the element:", source);
        }
    }
}


function maskElonImages() {
    const regex = /elon/gi;
  
    // Handle <img> elements
    const images = document.getElementsByTagName('img');
    for (let img of images) {
        // Ignore images that have already been replaced
        if (img.classList.contains('elon-replaced')) {
            continue;
        }

        let foundInAttributes = false;

        // Check all attributes of the image element
        for (let attr of img.attributes) {
            if (regex.test(attr.value)) {
                foundInAttributes = true;
                break;
            }
        }

        if (foundInAttributes) {
            console.log("Found 'Elon' in an image attribute, replacing it with something:", img);

            // Replace the src with the replacement image
            img.src = replaceImageUrl;
            img.alt = "Elon sucks";
            
            // Remove srcset and other attributes
            img.removeAttribute('srcset');
            img.removeAttribute('data-file-width');
            img.removeAttribute('data-file-height');

            // Clear any background images
            img.style.backgroundImage = 'none';

            // Remove onload and onerror handlers
            img.onload = null;
            img.onerror = null;

            // Mark the image as replaced
            img.classList.add('elon-replaced');
            console.log("Image after replacement:", img);
        }
    }

    // Handle <source> elements within <picture> tags
    const sources = document.getElementsByTagName('source');
    for (let source of sources) {
        let foundInAttributes = false;

        // Check all attributes of the source element
        for (let attr of source.attributes) {
            if (regex.test(attr.value)) {
                foundInAttributes = true;
                break;
            }
        }

        if (foundInAttributes) {
            console.log("Found 'Elon' in a <source> element attribute, replacing srcset with something:", source);

            // Replace the srcset with the replacement image URL
            source.srcset = replaceImageUrl;

            // Mark the source as replaced to avoid reprocessing
            source.classList.add('elon-replaced');
            console.log("Source after replacement:", source);
        }
    }
}

function maskElonContent() {
    const regex = /elon/gi;

    // Handle text within elements like div, p, section, article, but avoid blocking unrelated content
    const elements = document.body.getElementsByTagName('*');
    for (let element of elements) {
        const attributesToCheck = ['data-editable', 'data-zjs', 'title', 'data-zjs-href', 'data-zjs-traits-search_term'];

        let foundInAttributes = attributesToCheck.some(attr => {
            return regex.test(element.getAttribute(attr) || '');
        });

        if (element.children.length === 0 && (regex.test(element.textContent) || foundInAttributes)) {
            let parent = element.closest('div, p, section, article, span, a');
            console.log("Processing element:", element);
            console.log("Parent element to modify:", parent);

            if (parent && regex.test(parent.textContent)) {
                console.log("Found 'Elon' in container or attributes:", parent);
                parent.style.backgroundColor = 'black';
                parent.style.color = 'black';
            } else if (regex.test(element.textContent)) {
                element.style.backgroundColor = 'black';
                element.style.color = 'black';
            }
            // Now check the parent of the parent (grandparent)
            if (parent) {
            let grandparent = parent.closest('div, p, section, article, span, a');
            if (grandparent && regex.test(grandparent.textContent)) {
                console.log("Found 'Elon' in grandparent container or attributes:", grandparent);
                grandparent.style.backgroundColor = 'black';
                grandparent.style.color = 'black';
                // Check and replace images in the grandparent
                maskImagesInElement(grandparent);
            }
        }
        }
    }

    // Replace images that are associated with "Elon"
    maskElonImages();

    // Handle links and other inline elements
    const links = document.querySelectorAll('a, span, strong, em, b, i');
    for (let link of links) {
        if (regex.test(link.textContent) || regex.test(link.title)) {
            console.log("Found 'Elon' in a link or inline element:", link);
            link.style.backgroundColor = 'black';
            link.style.color = 'black';
            link.textContent = "████";  // Replace the text with blacked-out content
            console.log("Link after modification:", link);
        }
    }
}

// Immediately call the function
maskElonContent();

// Use MutationObserver to apply changes on dynamically loaded content
const observer = new MutationObserver(maskElonContent);
observer.observe(document.body, { childList: true, subtree: true });