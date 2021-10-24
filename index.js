window.onload = (event) => {
  const contactsContainer = document.getElementById('contacts');
  
  // Contacts Content
  const mail = 'matteoandreani2@gmail.com';
  const phone = '+49 (0) 179 816 28 50';
  const phoneSanitized = '+491798162850';

  // Create Phone Node
  const phoneNode = document.createElement('a');
  const phoneContent = document.createTextNode(phone);
  phoneNode.appendChild(phoneContent);
  phoneNode.href = `tel:${phoneSanitized}`;
  contactsContainer.appendChild(phoneNode);

  // Create Mail Node
  const mailNode = document.createElement('a');
  const mailContent = document.createTextNode(mail);
  mailNode.appendChild(mailContent);
  mailNode.href = `mailto:${mail}`;
  contactsContainer.appendChild(mailNode);
}