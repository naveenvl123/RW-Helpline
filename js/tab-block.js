function toggleAccordion(header) {
    const accordionContent = header.nextElementSibling;
    accordionContent.classList.toggle('open');
  }